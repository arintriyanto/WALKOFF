import secret

import requests
#import os
#import thehive4py
from thehive4py.api import TheHiveApi
from thehive4py.models import Alert

thehive = TheHiveApi(secret.url, secret.apikey)
cur_id = "eab14463d0555cbe70a2952c49299baf"
field="status"
data = "Ignored"

newdata = {} 
ticket = thehive.get_alert(cur_id)

newdata[field] = "%s%s" % (ticket.json()[field], data[2:-1])

newdata[field] = "Ignored"
print(newdata)


url = "%s/api/alert/%s" % (secret.url, cur_id)
if field == "status":
    if data == "New" or data == "Updated":
        url = "%s/markAsUnread" % url
    elif data == "Ignored": 
        url = "%s/markAsRead" % url

ret = requests.post(
    url,
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer %s' % secret.apikey
    }
)
print(ret.status_code)
print(ret.text)

#def test():
#    ret = thehive.get_alert(cur_id) 
#    newstr = str(ret.json()).replace("\'", "\"")
#    newstr = newstr.replace("True", "true")
#    newstr = newstr.replace("False", "false")
#    return newstr

#print(ticket.json())
#
#alert = Alert(
#    title="",
#    type="",
#    source="",
#    sourceRef="",
#)
#
#ret = thehive.update_alert(
#    cur_id, 
#    alert,
#    fields=[field]
#)
#
#
#print(ret.json())
