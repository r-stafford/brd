"""
API Module.

Main api module containing all API endpoints
for the flask api.

Please use this module to write all api
endpoints for your application. Feel free
to add any dependencies that you would
like, just remember to update the requirements.txt ;)

You may use the built-in development webserver
that Flask provides to host your api.

Please properly document and format your
code according to Google's python style
guide (https://google.github.io/styleguide/pyguide.html).

You may use a SQL database, or an in-memory variable
to store the interview_sample_data_01.csv data.

NOTE: This module is not responsible
for serving your javacript web application.
In order to serve your web app, you can use
the built-in development webserver most
javascript frameworks provide, or you can use nginx
to create a webserver that will host your javascript
web application.
"""
from flask import Flask
from flask_restful import Resource, Api
import csv

app= Flask(__name__)
api = Api(app)

class Employees(Resource):
    def get(self):
        with open(interview_sample_data_01.csv) as csvfile:
            reader = csv.DictReader(csvfile)
            return {'employees': [i[0] for i in reader]} #
            #return {'employees': [for row in reader]} # Fetches first column that is Employee ID

api.add_resource(Employees, '/employees') # Route_1

if __name__ == '__main__':

    app.run(
        debug=True,
        host='0.0.0.0'
    )
