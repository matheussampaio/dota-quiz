import json
import urllib
import urllib2

"""
Read data from files, encode data and send to api.
"""
def populate(datapath, url):
    with open(datapath) as f:
        json_object = json.loads(f.read())

    for elem in json_object:
        params = urllib.urlencode(elem, True)

        try:
            print urllib2.urlopen(url, params).read()
        except urllib2.HTTPError as err:
            print 'Error: {0}: {1}'.format(err, err.strerror)

def main():
    populate("items.json", "http://localhost:3000/api/item")
    populate("quiz.json", "http://localhost:3000/api/quiz")

if __name__ == "__main__":
    main()
