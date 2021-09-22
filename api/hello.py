from flask import Flask
from flask import request
from pprint import pprint
from bson import json_util
from flask.wrappers import Request
import pymongo
import random


from pymongo import collection
app = Flask(__name__)

client = pymongo.MongoClient("mongodb connection string", ssl=True,ssl_cert_reqs='CERT_NONE')
db = client.factsbook
collaction=db['facts']


@app.route('/space')
def fact_about_space():

    ran=random.randint(1,70)
    return db.facts.find_one({'_id':str(ran),'fact_type':'space'})
    

@app.route('/ocean')
def fact_about_ocean():

    ran=random.randint(71,140)
    return db.facts.find_one({'_id':str(ran),'fact_type':'ocean'})


@app.route('/human')
def fact_about_human():

    ran=random.randint(141,210)
    return db.facts.find_one({'_id':str(ran),'fact_type':'human'})

@app.route('/music')
def fact_about_music():

    ran=random.randint(211,280)
    return db.facts.find_one({'_id':str(ran),'fact_type':'music'})

@app.route('/cars')
def fact_about_cars():

    ran=random.randint(281,350)
    return db.facts.find_one({'_id':str(ran),'fact_type':'cars'})


@app.route('/checkcount',methods=['GET'])
def checkcount():
    c1=db.facts.find({"fact_type":"space","fact_type":"ocean","fact_type":"human"}).count()
    formData=request.get_json()
    print(request.get_json())
    print(c1)
    return {"checkcount" : "success"}


@app.route('/addfacts',methods=['POST'])
def addfacts():
    b1=db.facts.find({}).count()
    id=str(b1 + 1)
    formData=request.get_json()
    db.facts.insert_one({'_id':id,'fact_type':formData['fact_type'],'fact_body':formData['fact_body']}) 
    print(request.get_json())
    return {"add" : "success"}


@app.route('/deletefacts',methods=['POST'])
def deletefacts():
    print(request.get_json())
    formData=request.get_json()
    db.facts.delete_one({'_id':formData['id']})
    print(formData['id'])
    print(type(formData['id']))
    return {"delete":"success"}


@app.route('/updatefacts',methods=['POST'])
def updatefacts():
    formData=request.get_json()
    db.facts.find_one_and_update({'_id':formData['id']},{"$set":{'fact_body':formData['fact_body']}})
    print(request.get_json())
    return {"update":"success"}

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)






