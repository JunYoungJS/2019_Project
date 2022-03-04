import pymysql
import json

RANK = 100

con = pymysql.connect(host="localhost", user="root", password="akejvkej123", db="first", charset="utf8")
cur = con.cursor()

with open("/var/www/html/json/melon_top_100.json", encoding="utf-8") as json_file:
    top100_json = json.load(json_file)

sql = "delete from melon_top_100_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_top_100_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (top100_json['entries'][i]['artist'], top100_json['entries'][i]['title'], str(i + 1),top100_json['entries'][i]['imgsrc'], top100_json['entries'][i]['imgalt'],top100_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_ab_pop.json", encoding="utf-8") as json_file:
    apop_json = json.load(json_file)

sql = "delete from melon_day_ab_pop_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_ab_pop_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (
    apop_json['entries'][i]['artist'], apop_json['entries'][i]['title'], str(i + 1), apop_json['entries'][i]['imgsrc'],
    apop_json['entries'][i]['imgalt'], apop_json['entries'][i]['videoId']))
    con.commit()

with open("/var/www/html/json/melon_day_ab_rap.json", encoding="utf-8") as json_file:
    arap_json = json.load(json_file)

sql = "delete from melon_day_ab_rap_chart"
cur.execute(sql)
con.commit()

for i in range(RANK):
    sql = "insert into melon_day_ab_rap_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (arap_json['entries'][i]['artist'], arap_json['entries'][i]['title'], str(i + 1),arap_json['entries'][i]['imgsrc'], arap_json['entries'][i]['imgalt'],arap_json['entries'][i]['videoId']))
    con.commit()



with open("/var/www/html/json/melon_day_ab_rock.json", encoding="utf-8") as json_file:
    arock_json = json.load(json_file)


sql = "delete from melon_day_ab_rock_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):

    sql = "insert into melon_day_ab_rock_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (arock_json['entries'][i]['artist'], arock_json['entries'][i]['title'], str(i + 1),arock_json['entries'][i]['imgsrc'], arock_json['entries'][i]['imgalt'],arock_json['entries'][i]['videoId']))
    con.commit()

with open("/var/www/html/json/melon_day_ab_rnb.json", encoding="utf-8") as json_file:
    arnb_json = json.load(json_file)

sql = "delete from melon_day_ab_rnb_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_ab_rnb_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (arnb_json['entries'][i]['artist'], arnb_json['entries'][i]['title'], str(i + 1),arnb_json['entries'][i]['imgsrc'], arnb_json['entries'][i]['imgalt'],arnb_json['entries'][i]['videoId']))
    con.commit()

with open("/var/www/html/json/melon_day_ab_elec.json", encoding="utf-8") as json_file:
    aelec_json = json.load(json_file)

sql = "delete from melon_day_ab_elec_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):

    sql = "insert into melon_day_ab_elec_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (aelec_json['entries'][i]['artist'], aelec_json['entries'][i]['title'], str(i + 1),aelec_json['entries'][i]['imgsrc'], aelec_json['entries'][i]['imgalt'],aelec_json['entries'][i]['videoId']))
    con.commit()

with open("/var/www/html/json/melon_day_ab_folk.json", encoding="utf-8") as json_file:
    afolk_json = json.load(json_file)

sql = "delete from melon_day_ab_folk_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_ab_folk_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (afolk_json['entries'][i]['artist'], afolk_json['entries'][i]['title'], str(i + 1),afolk_json['entries'][i]['imgsrc'], afolk_json['entries'][i]['imgalt'],afolk_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_ballad.json", encoding="utf-8") as json_file:
    balla_json = json.load(json_file)

sql = "delete from melon_day_ballad_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_ballad_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (balla_json['entries'][i]['artist'], balla_json['entries'][i]['title'], str(i + 1),balla_json['entries'][i]['imgsrc'], balla_json['entries'][i]['imgalt'],balla_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_rnb.json", encoding="utf-8") as json_file:
    rnb_json = json.load(json_file)

sql = "delete from melon_day_rnb_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_rnb_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (rnb_json['entries'][i]['artist'], rnb_json['entries'][i]['title'], str(i + 1),rnb_json['entries'][i]['imgsrc'], rnb_json['entries'][i]['imgalt'],rnb_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_rock.json", encoding="utf-8") as json_file:
    rock_json = json.load(json_file)

sql = "delete from melon_day_rock_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_rock_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (rock_json['entries'][i]['artist'], rock_json['entries'][i]['title'], str(i + 1),rock_json['entries'][i]['imgsrc'], rock_json['entries'][i]['imgalt'],rock_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_dance.json", encoding="utf-8") as json_file:
    dance_json = json.load(json_file)

sql = "delete from melon_day_dance_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_dance_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (dance_json['entries'][i]['artist'], dance_json['entries'][i]['title'], str(i + 1),dance_json['entries'][i]['imgsrc'], dance_json['entries'][i]['imgalt'],dance_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_hiphop.json", encoding="utf-8") as json_file:
    hiphop_json = json.load(json_file)

sql = "delete from melon_day_hiphop_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):
    sql = "insert into melon_day_hiphop_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (hiphop_json['entries'][i]['artist'], hiphop_json['entries'][i]['title'], str(i + 1),hiphop_json['entries'][i]['imgsrc'], hiphop_json['entries'][i]['imgalt'],hiphop_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_inde.json", encoding="utf-8") as json_file:
    inde_json = json.load(json_file)

sql = "delete from melon_day_inde_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):

    sql = "insert into melon_day_inde_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (inde_json['entries'][i]['artist'], inde_json['entries'][i]['title'], str(i + 1),inde_json['entries'][i]['imgsrc'], inde_json['entries'][i]['imgalt'],inde_json['entries'][i]['videoId']))
    con.commit()


with open("/var/www/html/json/melon_day_folk.json", encoding="utf-8") as json_file:
    folk_json = json.load(json_file)

sql = "delete from melon_day_folk_chart"
cur.execute(sql)
con.commit()
for i in range(RANK):

    sql = "insert into melon_day_folk_chart values(%s, %s, %s, %s, %s,%s)"
    cur.execute(sql, (folk_json['entries'][i]['artist'], folk_json['entries'][i]['title'], str(i + 1),folk_json['entries'][i]['imgsrc'], folk_json['entries'][i]['imgalt'],folk_json['entries'][i]['videoId']))
    con.commit()

