import requests
import json
from django.core.serializers import serialize



word = "word"
params = {
    "format": "jsons"
}
response = requests.get("https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + word + "?key=5887e7e6-989a-441a-8f13-2be340a0cd99", params=params)

data = json.dumps(response, default=str)
print(data)
