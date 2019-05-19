import json

with open("test", "r") as tmp:
    input_data = tmp.read()

    input_data = str(input_data).replace("\'", "\"")
    input_data = input_data.replace("True", "true")
    input_data = input_data.replace("False", "false")
    input_data = input_data.replace("None", "\"\"")

    input_data = json.loads(input_data)
    print(input_data)
    

#import secret
#import requests
#import json
#import re
#
#
#string = "Apache Tomcat HTTP PUT Arbitrary File Upload Vulnerability (CVE-2017-12617) - Source: 192.168.131.10"
#
#def re_submatch(pattern, input_string):
#    ret = re.search(pattern, input_string)
#    if ret:
#        return ret.group(1)
#
#    return ""
#
#cve_pattern = ".*(CVE-\d{4}-\d{4,7})"
#ret = re_submatch(cve_pattern, string)
#print(ret)
#exit()
#
##ret = requests.get("%s/api/search/%s" % (secret.url, cve))
##print(ret.status_code)
##print(ret.text)
#
## Check for item exists module 
## Within item, check whether an item:value exists
#
## Function 1: Run search towards X, return object finished
## Function 2: data["searches"] = name = x, return object
## Function 3: prevobject["items"]["item"] == field
## Function 4: do some comparison (str, int, w/e)
#
## Return object
#def run_search(input_string):
#    ret = requests.get("%s/api/search/%s" % (secret.url, input_string))
#    while(1):
#        if ret.json()["done"]:
#            newstr = str(ret.json()).replace("\'", "\"")
#            newstr = newstr.replace("True", "true")
#            newstr = newstr.replace("False", "false")
#            return newstr
#
#        time.sleep(1)
#
#ret = run_search("cve-2017-12617")
#data = json.loads(ret)
#print(ret)
#
#exit()
#
## Requires json object of NSA search
## Searches for a specific search in NSA (e.g. CVE)
#def find_search_object(input_object, search_type):
#    input_object = json.loads(input_object)
#    for item in input_object["searches"]:
#        if item["name"] == search_type:
#            return item
#
#    return {}
#
## Requires json object of NSA search
## 
#def find_result_item(input_object, search_type):
#    for subitem in input_object["items"]:
#        if subitem["item"] == search_type:
#            return subitem
#
#    return {}
#
## This is about how the flow should be
## source_ip = "192.168.1.1"
##input_string = "CVE-2017-12617"
##data = run_search(input_string)
#
#search_object = find_search_object(data, "Qualys CVE")
#print(search_object)
#ret = find_result_item(search_object, "total")
#print(ret)
#if int(ret["value"]) == 0:
#    print("NOTHING")
#    exit()
#
#ret = find_result_item(search_object, "All IPs")
#if len(ret) > 0:
#    print(ret)
#else:
#    print("NOTHING :O")
#
## data: 
## {"searches": "Qualys.." 
