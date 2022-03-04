from bs4 import BeautifulSoup
import requests
import json
from urllib.request import Request, urlopen
from fake_useragent import UserAgent
from requests.auth import HTTPProxyAuth
import random
import time

ua = UserAgent()
proxys = []


def proxx():
    # Retrieve latest proxies
    proxies_req = Request('https://www.free-proxy-list.net/')
    proxies_req.add_header('User-Agent', ua.random)
    proxies_doc = urlopen(proxies_req).read().decode('utf8')

    soup = BeautifulSoup(proxies_doc, 'html.parser')
    proxies_table = soup.find(id='proxylisttable')

    # Save proxies in the array
    for row in proxies_table.tbody.find_all('tr'):
        proxys.append({
            'ip': row.find_all('td')[0].string,
            'port': row.find_all('td')[1].string
        })

    print([proxys])

    # Retrieve latest proxies
    proxies_req = Request('https://www.free-proxy-list.net/uk-proxy.html')
    proxies_req.add_header('User-Agent', ua.random)
    proxies_doc = urlopen(proxies_req).read().decode('utf8')

    soup = BeautifulSoup(proxies_doc, 'html.parser')
    proxies_table = soup.find(id='proxylisttable')

    # Save proxies in the array
    for row in proxies_table.tbody.find_all('tr'):
        proxys.append({
            'ip': row.find_all('td')[0].string,
            'port': row.find_all('td')[1].string
        })

    print([proxys])

    # Retrieve latest proxies
    proxies_req = Request('https://www.us-proxy.org/')
    proxies_req.add_header('User-Agent', ua.random)
    proxies_doc = urlopen(proxies_req).read().decode('utf8')

    soup = BeautifulSoup(proxies_doc, 'html.parser')
    proxies_table = soup.find(id='proxylisttable')

    # Save proxies in the array
    for row in proxies_table.tbody.find_all('tr'):
        proxys.append({
            'ip': row.find_all('td')[0].string,
            'port': row.find_all('td')[1].string
        })

    print([proxys])

    # Retrieve latest proxies
    proxies_req = Request('https://sslproxies.org/')
    proxies_req.add_header('User-Agent', ua.random)
    proxies_doc = urlopen(proxies_req).read().decode('utf8')

    soup = BeautifulSoup(proxies_doc, 'html.parser')
    proxies_table = soup.find(id='proxylisttable')

    # Save proxies in the array
    for row in proxies_table.tbody.find_all('tr'):
        proxys.append({
            'ip': row.find_all('td')[0].string,
            'port': row.find_all('td')[1].string
        })

    print([proxys])
    # Choose a random proxy
    proxy_index = random_proxy()
    proxy = proxys[proxy_index]

    # header = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5)'
    #                         'AppleWebKit 537.36(KHTML, like Gecko) Chrome',
    #           'Accept': 'text/html,application/xhtml+xml,application/xml;'
    #                     'q=0.9,image/wepp,*/*;q=0.8;'}
    header = {'User-Agent': ua.random}

    session = requests.Session()

    with open("/var/www/html/json/melon_day_ab_pop.json", encoding="utf-8") as json_file:
        apop_json = json.load(json_file)

    title = []
    for i in range(100):
        if i % 10 == 0:
            proxy_index = random_proxy()
            proxy = proxys[proxy_index]
        try:
            session.proxies = {"http": "http://%s" % proxy['ip'] + ':' + proxy['port']}

            url = 'https://www.youtube.com/results?search_query=' + apop_json["entries"][i]["artist"] + '+' + \
                  apop_json["entries"][i]["title"] + '+' + 'audio'
            # print(session.get(ipconfig).text)
            time.sleep(2)
            req = session.get(url, headers=header)
            print(req)
            parse = BeautifulSoup(req.text, 'html.parser')
            titles = parse.find_all("ol", {"class": "item-section"})
            for t in titles:
                videoId = t.find_all('div', {"class": "yt-lockup yt-lockup-tile yt-lockup-video vve-check clearfix"})
                k = videoId.count("None")
                for c in range(k):
                    videoId.remove("None")
                title.append(videoId[0].get('data-context-item-id'))
                break

            print(title[i])
        except requests.exceptions.ConnectionError or requests.exceptions.ProxyError or TimeoutError:
            del proxys[proxy_index]
            print('Proxy ' + proxy['ip'] + ':' + proxy['port'] + ' deleted.')

            proxy_index = random_proxy()
            proxy = proxys[proxy_index]
            time.sleep(6)
            i -= 1
            continue
    a = 0
    for d in apop_json['entries']:
        d['videoId'] = str(title[a])
        a += 1

    with open('/var/www/html/json/melon_day_ab_pop.json', 'w', encoding="utf-8") as make_file:
        json.dump(apop_json, make_file, ensure_ascii=False, indent="\t")


# Retrieve a random index proxy (we need the index to delete it if not working)
def random_proxy():
    return random.randint(0, len(proxys) - 1)


if __name__ == "__main__":
    proxx()
