# Dancing Things

Dancing Things is a social media app, connecting dancers, choreographers, teachers and dance companies all around the world. After sign up, a new user is created. User can view the news feed, add comments, view and edit his/her profile, view Groups, Photos and Members pages.

## How to install step by step
#### Clone this repository using command: 

```bash
$ git clone bitbucket_url
```

#### All of the following prerequisites must be installed in order to run Dancing Things app:
* npm
* node
* MongoDB (v3.6.*)

### Installation instructions:
* [MongoDB guide](https://docs.mongodb.com/manual/installation/)
* [Node.js + npm](https://nodejs.org/en/download/)

#### In order to set up your local database, run the following command in your pc's root folder: 

```bash
$ mongod
```

#### Intstall all of the dependecies using command inside the /app folder: 

```bash
$ npm install
```

#### After the dependecies are installed you can run the app  with command:
```bash
$ npm start
```

## App urls
* Local app url: http://localhost:3000/
* Heroku app url: https://oddaja-sp.herokuapp.com/homepage

## Sign Up page - Inputs (defined in sign-up-validation.js)
* On Sign Up page, all of the fields need to be filled out. 
* Name needs to be at least 3 characters long.
* Email needs to have in a proper format
* Both passwords on sign up page must match

## Feautured Screens

* ### [Sign Up screen](screenshots/signup.png):
	* User can create an account. He can choose between two roles: tutor and student. Account creation is personalized based on choosen role.
	
* ### [News Feed](screeshots/index.png) and [Student's requests tab](docs/indexTutor.png):
	* Users can view the news, view and comment on the posts. 
	
* ### [User Profile](screeshots/profile.png):
	* Users can see their profile page and edit it, bu clicking on the edit button.

* ### [Edit profile](screeshots/editprofile.png):
	* Users can edit their profile by providing the new information about them and clicking submit.
	
* ### [Members](screeshots/members.png):
	* Users can se the other members of the Dancing Things App.
	
* ### [Groups](screeshots/groups.png):
	* Users can see various groups that exist on this social media app.

* ### [Photos](screeshots/photos.png):
	* Users can see their photo gallery.


## Development guidelines:

* I'm working alone, so I mostly use the master branch. I always check if everything is working brfore pushing some changes to my repository. I follow the standard Git workflow:

* Commit
* Pull -> resolve merge conflicts if any
* Push

## Supported devices
* PC
* iphone X
* Samsung GalaxyS7
* iphone 6
	
