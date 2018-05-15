## Overview
At Blue Ridge Dynamics, Inc. we aim to have a detailed interview process that ensures both the candidate and BRD work well together. Part of the process includes a standard interview session with team members.  In addition, we like to assess your ability to work independently on projects. One way to evaluate this is to allow you to work on a small project before coming into the interview.  This allows you to demonstrate your abilities and facilitates discussion points during the interview.  During the interview session, you will be expected to discuss your project with other team members.
 
## Description

__Implement a multi-user web based application using:__

 * HTML5 
 * ReactJS
 * Python based Flask backend rest api to view and analyze personal demographic data provided in the *interview\_sample\_data\_01.csv*.

## Requirements

__This web application should contain the following:__

* Once the user is logged in, the user's JWT token is valid for 10 minutes.  Once the token is expired, it should log the user out.  If they re-enter the page again, while the token is valid, it should automatically log them in.
* Display a table of the user information included in the interview\_sample\_data\_01.csv file.

* Should display the following charts of the user information:
	* A pie chart showing the percentage male and female
	* A bar chart with subcategories showing the number of users by the following demographics
		* Users 0 - 17 years old
		* Users 18 - 25 years old
		* Users 26 - 40 years old
		* All users older than 40
	* Each visual display should be draggable and resizable (as the visual is resized it should resize the visual display), this position and size should be retained between page loads.

## Submission
Please fork this repository and submit your project by creating a github project and sharing the repo via email.
Please update the README.md with instructions on how to run your application.

## (Optional) Bonus Points!! 
* Dockerize the project by creating a docker-compose.yml file that connects each layer (ui, rest api, db) together that can be ran with a single command.
* Allow the table to be sorted by the column headers
* Allow the results to be returned in a paginated format
* Allow the results to be exported to a csv file)
* A bar chart with subcategories for the email domain (including subdomain such as google.cn vs google.es)
