#!/usr/bin/python

from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser
import json

# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
DEVELOPER_KEY = "AIzaSyC6vRToiVbHqwEL_hWEtSrbaHHU_nd-EYU"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"


def youtube_search(options):
    youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
                    developerKey=DEVELOPER_KEY)

    # Call the search.list method to retrieve results matching the specified
    # query term.
    search_response = youtube.search().list(
        q=options.q,
        part="id",
        fields="items/id/videoId",
        maxResults=options.max_results
    ).execute()

    videos = []

    # Add each result to the appropriate list, and then display the lists of
    # matching videos, channels, and playlists.
    for search_result in search_response.get("items", []):
        # if search_result["id"]["kind"] == "youtube#video":
            videos.append(search_result)
            # videos.append("%s" % search_result["id"]["videoId"])

    print(search_response)
    print(videos)


if __name__ == "__main__":

    with open("./melon_top_100.json", encoding="utf-8") as json_file:
        top100_json = json.load(json_file)

    argparser.add_argument("--q", help="Search term",
                           default=top100_json['entries'][0]['artist'] + '-' + top100_json['entries'][0][
                               'title'] + ' audio')
    argparser.add_argument("--max-results", help="Max results", default=1)
    args = argparser.parse_args()

    try:
        youtube_search(args)
    except HttpError as e:
        print("An HTTP error %d occurred:\n%s" % (e.resp.status, e.content))

# with open("./melon_top_100.json", encoding="utf-8") as json_file:
#     top100_json = json.load(json_file)
#
# videoId = []
# for i in range(1):
#     payload = {'fields': 'items/id/videoId', 'part': 'snippet', 'key': "AIzaSyC6vRToiVbHqwEL_hWEtSrbaHHU_nd-EYU",
#                'q': str(top100_json['entries'][i]['artist']) + '-' + str(
#                    top100_json['entries'][i]['title']) + ' audio', 'maxResults': 1}
#     l = requests.Session().get('https://www.googleapis.com/youtube/v3/search', params=payload)
#     print(l)
#     print(l.content)
#     resp_dict = json.loads(l.content)
#     print(resp_dict)
#     videoId.append(resp_dict['items'][0]['id']['videoId'])
#     print(videoId)
#     top100_json['entries'][i]['videoId'] = str(videoId[i])
#
# with open("./melon_top_100.json", 'w', encoding="utf-8") as make_file:
#     json.dump(top100_json, make_file, ensure_ascii=False, indent="\t")
