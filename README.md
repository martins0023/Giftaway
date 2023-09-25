# Giftaway
A mobile app for users to give and receive a thrash
<b>Overview</b>
Giftaway thrash is an app that lets you give out your unwanted used items to users that are interested or need to make use of it.
Accessing the app, a user needs to create an account before they can create or have a thrash giveaway. Once a user has signed up from the registration page, a list of all of the giveaways that are available are shown on the Home page which is the feed for all thrash that has been posted by a user.
Here are the different features that are available and will be available in future development of the app:
•	Create a Giveaway: Essentially a user will be able to create a post concerning the type of thrash they want to give with a title, description and an image to show what they’re giving out.
•	Access a Giveaway: Each users would be able to access the giveaway they want to receive on click and interact with the user giving out the thrash. 
•	Chat with a user: Users would be able to chat with each other based on who their choice of preference is on selecting the type of thrash they want to receive, users would be able to interact with each other with ease without any other 3rd party social media intermediary. 
•	Verification Tick: A user should have a verification tick on each of their profile for more user trustworthiness in interacting with each other.
 
Understanding of different screens available
•	Splash Screen
•	Login Screen
•	Register Screen
•	Home Screen
•	Profile Screen
•	About Screen
•	Giveaway Screen




# Splash screen 
it will come for the first 5 second starting the application and then will disappear after that On the same screen, we will have an image and ActivityIndicator component. We will use a setTimeout function to manage the screen visibility. This setTimeout will call a function after 5 seconds which will check for the login session in AsyncStorage to store the session.

## Overview
Giftaway thrash is an app that lets you give out your unwanted used items to users that are interested or need to make use of it.
Accessing the app, a user needs to create an account before they can create or have a thrash giveaway. Once a user has signed up from the registration page, a list of all of the giveaways that are available are shown on the Home page which is the feed for all thrash that has been posted by a user.
Here are the different features that are available and will be available in future development of the app:
•	Create a Giveaway: Essentially a user will be able to create a post concerning the type of thrash they want to give with a title, description and an image to show what they’re giving out.
•	Access a Giveaway: Each users would be able to access the giveaway they want to receive on click and interact with the user giving out the thrash. 
•	Chat with a user: Users would be able to chat with each other based on who their choice of preference is on selecting the type of thrash they want to receive, users would be able to interact with each other with ease without any other 3rd party social media intermediary. 
•	Verification Tick: A user should have a verification tick on each of their profile for more user trustworthiness in interacting with each other.
 
# Understanding of different screens available
•	Splash Screen
•	Login Screen
•	Register Screen
•	Home Screen
•	Profile Screen
•	About Screen
•	Giveaway Screen




# Splash screen 
it will come for the first 5 second starting the application and then will disappear after that On the same screen, we will have an image and ActivityIndicator component. We will use a setTimeout function to manage the screen visibility. This setTimeout will call a function after 5 seconds which will check for the login session in AsyncStorage to store the session.
![PRONOUNS](https://github.com/martins0023/Giftaway/assets/69491293/8e37397d-28d3-44d3-bc7b-932e72e994df)


# Welcome screen 
the welcoming screen comes after the splash  screen timer has expired, the welcoming page serves as a redirection for the splash screen expiration. 
![get started](https://github.com/martins0023/Giftaway/assets/69491293/fcf22fb4-0da8-4178-9571-d57a2f0ca801)

# Pronoun screen 
the pronoun screen comes right after the welcome screen where the user choose the type of gender they are
![qPRONOUNS](https://github.com/martins0023/Giftaway/assets/69491293/de277e76-6241-4f04-b2f5-0e1067fc7d87)

# Interest screen 
users are allowed to select their interests for the type of feeds they want to be receiving
![INTEREST DEFAULT](https://github.com/martins0023/Giftaway/assets/69491293/9510c433-138e-4254-ae7e-7e65a32ef8e2)

# Create account 
the register screen has several inputs for collecting user info (with basic empty field checks) and a button trigger to the login page.
![CREATE ACCOUNT](https://github.com/martins0023/Giftaway/assets/69491293/3f223583-0e77-4fad-8151-e33581119183)

# Login screen 
the login screen has 2 inputs for the user Email and Password (with basic empty field checks) and a button trigger to the register page
![CREATE ACCOUNT 2](https://github.com/martins0023/Giftaway/assets/69491293/db1c457f-a863-4f93-913c-a78f0e5518a2)

# Home screen 
It is the landing screen after login or from the Register Screen directly just in case the user has already logged in. This is the feed screen that consists of all newly and all available Thrash Giveaways a user wants and where every user can see each giveaway they’re interested to take or have.  It also has a filter bar for each any user interests. The NavBar also comes in once the app icon is clicked on the top left bar. In the feed page there’s also the countdown for when the giveaway posted will be over.
![HOME](https://github.com/martins0023/Giftaway/assets/69491293/f849c38a-8a00-4549-a029-bd900d0c1cce)

# Upload Giveaway 
screen a user gets to upload and give details about the type of thrash they're giving out.
![Add photos](https://github.com/martins0023/Giftaway/assets/69491293/b979d8d4-12a5-4388-b07e-12e1ef749eff)

## Description and countdown tab pages
![Description page](https://github.com/martins0023/Giftaway/assets/69491293/c9ea7f5d-3497-4d5e-9968-1329d3a74387)
![Countdown](https://github.com/martins0023/Giftaway/assets/69491293/a63037fb-6197-4b96-b9eb-eadba7a8f64a)

Automatically every user uploading each thrash has a set limit of 7days before the giveaway runs out.

#####################################################
## Understanding of Different Navigator used for the Login Signup
To see how we’ve used the different navigators to arrange the above-mentioned screens. We made use of three navigators in this project:
**Stack Navigator was used to navigate between Auth Screens (Login and SignUp) and also for the internal navigation of Home or Setting screen
**Drawer Navigator was used to set up the Home Screen, About screen and Logout Screen.
![image](https://github.com/martins0023/Giftaway/assets/69491293/9a0edec6-2205-4bc3-b42c-25e58d712f82)

**Installation**
# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

 - run
   ```
     npm install or yarn install
   ```





