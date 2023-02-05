import requests
import json

word = "word"
params = {
    "format": "jsons"
}
response = requests.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=5887e7e6-989a-441a-8f13-2be340a0cd99", params=params)

json_response = response.json()['shortdef']
y = json.loads(json_response)
print(y)
