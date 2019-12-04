# README

# Project FlyByNight

FlyByNight was an app idea i had for a simple travel itinerary planner. Many travellers may or may not have done extensive research into the places they are visiting.
FlyByNight(FBN) is a simple app that helps users keep track of places that they have come across through browsing as well as provide a mini platform for users to share their experiences and hidden gems that they have come across in their travels.


## Wireframe

![Wireframe](https://github.com/datguyrhy/flyByNight/blob/master/ERD-and-Wireframe/FBN-WireFrame.png)

## ERD
![ERD](https://github.com/datguyrhy/flyByNight/blob/master/ERD-and-Wireframe/FBN-ERD.png)

## Built With

* [Ruby on Rails](http://rubyonrails.org/) - The web framework used
* [postgresSQL](https://www.postgresql.org) - Dependency Management
* [bootstrap](https://getbootstrap.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

you will need the following to run this app

```
- Ruby on Rails
- postgresSQL
- yarn

```
download/clone the repo by accessing your CLI and entering the following

```
git clone https://github.com/datguyrhy/flyByNight.git
```

### Installing

After downloading the repo you will need to point the CLI terminal to your cloned repo and

install the modules and dependencies by entering the following into your terminal.

```
bundle install
```

In case you run into file version issues use yarn to rectify them

```
yarn install --check-files
```




## Part 1 - Database / Schema / Models

This will create the tables and seed them within your psql database

### Create the database
Within this repo run the following to create the database
```
rails db:create
```
 **exact**

### Create a schema

This will automatically create the tables and schema.

```
rails db:migrate
```

then

```
rails db:seed
```

#Now that you have the tables seeded, you will need to start the app.

to run the app locally enter in the open 2 CLI windows

1.for the rails server
```
rails server
```

2.for react development(required)
```
./bin/webpack-dev-server
```
this will start the app which can be accessed by entering the following into your chrome browser

```
127.0.0.1:3000/ or localhost:3000/
```

This should bring you to the landing page.


## Running the app

There is a registration and login feature but this app.

You can view the Recommendations Index but once u choose to start planning you will be prompted to sign up or login.



## Acknowledgments

* Thank you to Akira, Kenny and Wilfred for helping us out when we had bugs we could not fix.
