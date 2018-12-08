# Real Estate UI Exercise

## TL; DR

Run the following commands to start the app:

### 1. `npm install` or `yarn`

This will install dependencies

### 2. `npm start` or `yarn start`

This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tech being used

This app is built with:

* create-react-app
* React
* Redux
* Thunk
* axios
* Jest
* ES6 goodness
* SCSS and CSS Modules

## App Design

The application code is divided into various logical components. You will see different folders in the project directory as mentioned below:

### containers

Here you can see the business logic of a component. At the moment, it only has Property container. Container is responsible for calling the action creators, handling of user generated events and passing Redux state to stateless components.

### components

Here you can see the stateless "dumb" components. Mostly you will see view components of an app here. Currently it has components related to rendering the property results and saved properties.

### actions

All the Redux action creators and related tests can be found here. Property action creator uses a fetch helper to request data from network(e.g., REST API). Fetch helper is built with axios.

### reducers

All the Redux reducers and related tests are defined here. Currently it has only one reducer to maintain state for property.

### Style Guide

This folder should contain the brand / theme variables and all the reuseable React UI components. Currently it has simple components for Button, Row and Container using Bootstrap to demonstrate the idea.

### global

It contains global constants for the app.

## What have I done... (so far)

I have built the basic functionality as described below:

* Fetch the data from mock API
* Update Redux state
* Render views
* Handle click events to add or remove a saved property from Redux state
* Redux action creators for state management

Generally speaking, I have created the app architecture in a way to keep it easy to add new features later on.

**Redux** is an important part of application architecture. You will notice that I have kept savedProperty state as an object to keep it easy  to update the state. I am also using timestamp to manage the order of rendering for saved properties.

## What is in progress

I have currently stopped working on it.

## The future

There are a few things I would like to mention. <br>
I have focused on demonstration of my development skills while writing code for this project rather than trying to build a finished product. Hopefully it will help you understand my thought process. We can chat more during our face to face meeting. With respect to code, here are some notes for future:

* Prop types are added to style guide at the moment. These can be added to rest of the app components.
* Fetch helper is really basic one. It can be enhanced to support post requests etc.
* UI is super basic. It can be improved. 
* Unit testing is covering Redux at the moment. More tests can be added througout the app.

