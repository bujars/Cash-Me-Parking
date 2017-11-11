import json,requests

def getParking(tags, location):
    url = 'https://api.foursquare.com/v2/venues/search'
    q = ''
    for t in tags:
        q += t
        q += '+'

    params = dict(
        client_id='S2IQP1FPW11CICWUQYKB2OM0ITATD3HWLG3PN3OHVJW5TZCH',
        client_secret='GINNM23LCOMLMMBS5YIVGO242FYLWJLA3TGGN4X5OWH3C3V2',
        near=location,
        v='20171015',
        query=q,
        limit=10
        )

 resp = requests.get(url=url, params=params)
    data = json.loads(resp.text)
    #print(data)
    return data


tags = getTags('food.jpg')
resp = getRestaurants(tags, 'New York, NY')
r = resp['response']['parkingSpots']

print('Parking Spot Near Here')
for v in r:
    print(v['name'])
    print(v['location']['formattedAddress'])
