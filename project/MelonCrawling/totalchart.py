# 0807 전체 차트 한번에 필요해서 병합하는 코드 작성
import json
from collections import OrderedDict

file_data = OrderedDict()
file_data['entries'] = []

with open("/var/www/html/json/melon_day_ab_pop.json", encoding="utf-8") as json_file:
    apop_json = json.load(json_file)
with open("/var/www/html/json/melon_day_ab_rap.json", encoding="utf-8") as json_file:
    arap_json = json.load(json_file)

with open("/var/www/html/json/melon_day_ab_rock.json", encoding="utf-8") as json_file:
    arock_json = json.load(json_file)

with open("/var/www/html/json/melon_day_ab_rnb.json", encoding="utf-8") as json_file:
    arnb_json = json.load(json_file)
with open("/var/www/html/json/melon_day_ab_folk.json", encoding="utf-8") as json_file:
    afolk_json = json.load(json_file)

with open("/var/www/html/json/melon_day_ab_elec.json", encoding="utf-8") as json_file:
    aelec_json = json.load(json_file)

with open("/var/www/html/json/melon_top_100.json", encoding="utf-8") as json_file:
    top100_json = json.load(json_file)

with open("/var/www/html/json/melon_day_ballad.json", encoding="utf-8") as json_file:
    ballad_json = json.load(json_file)

with open("/var/www/html/json/melon_day_dance.json", encoding="utf-8") as json_file:
    dance_json = json.load(json_file)

with open("/var/www/html/json/melon_day_hiphop.json", encoding="utf-8") as json_file:
    hiphop_json = json.load(json_file)

with open("/var/www/html/json/melon_day_rock.json", encoding="utf-8") as json_file:
    rock_json = json.load(json_file)

with open("/var/www/html/json/melon_day_rnb.json", encoding="utf-8") as json_file:
    rnb_json = json.load(json_file)

with open("/var/www/html/json/melon_day_folk.json", encoding="utf-8") as json_file:
    folk_json = json.load(json_file)

with open("/var/www/html/json/melon_day_inde.json", encoding="utf-8") as json_file:
    inde_json = json.load(json_file)

for i in range(100):
    file_data['entries'].append(apop_json['entries'][i])
for i in range(100):
    file_data['entries'].append(arap_json['entries'][i])
for i in range(100):
    file_data['entries'].append(arock_json['entries'][i])
for i in range(100):
    file_data['entries'].append(arnb_json['entries'][i])
for i in range(100):
    file_data['entries'].append(afolk_json['entries'][i])
for i in range(100):
    file_data['entries'].append(aelec_json['entries'][i])
for i in range(100):
    file_data['entries'].append(top100_json['entries'][i])
for i in range(100):
    file_data['entries'].append(ballad_json['entries'][i])
for i in range(100):
    file_data['entries'].append(dance_json['entries'][i])
for i in range(100):
    file_data['entries'].append(hiphop_json['entries'][i])
for i in range(100):
    file_data['entries'].append(rock_json['entries'][i])
for i in range(100):
    file_data['entries'].append(rnb_json['entries'][i])
for i in range(100):
    file_data['entries'].append(folk_json['entries'][i])
for i in range(100):
    file_data['entries'].append(inde_json['entries'][i])

with open('/var/www/html/json/total_charts.json', 'w', encoding="utf-8") as make_file:
    json.dump(file_data, make_file, ensure_ascii=False, indent="\t")
