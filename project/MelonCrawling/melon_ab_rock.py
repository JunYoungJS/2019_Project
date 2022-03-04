import requests
from bs4 import BeautifulSoup
import json
from collections import OrderedDict
import datetime

if __name__ == "__main__":
    RANK = 100

    header = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'}
    req = requests.get('https://www.melon.com/chart/day/index.htm?classCd=GN1000', headers=header)
    html = req.text
    parse = BeautifulSoup(html, 'html.parser')

    titles = parse.find_all("div", {"class": "ellipsis rank01"})
    songs = parse.find_all("div", {"class": "ellipsis rank02"})
    images = parse.find_all("a", {"class": "image_typeAll"})

    title = []
    song = []
    image = []
    imagea = []
    imagee = []
    file_data = OrderedDict()

    for t in titles:
        title.append(t.find('a').text)

    for s in songs:
        song.append(s.find('span', {"class": "checkEllipsis"}).text)

    for m in images:
        image.append(m.find('img').get('src'))
        imagea.append(m.find('img').get('alt'))

    for i in range(RANK):
        print('%3d위: %s - %s' % (i + 1, title[i], song[i]))

    file_data["chart"] = "Melon"
    file_data["date"] = str(datetime.datetime.now())
    file_data["entries"] = []

    for e in range(RANK):
        file_data["entries"].append(
            {"artist": str(song[e]), "title": str(title[e]), "rank": e + 1, "imgsrc": str(image[e]),
             "imgalt": str(imagea[e])})

    with open('/var/www/html/json/melon_day_ab_rock.json', 'w', encoding="utf-8") as make_file:
        json.dump(file_data, make_file, ensure_ascii=False, indent="\t")
