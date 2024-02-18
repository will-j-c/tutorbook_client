# TutorBook Client

A client side app for the TutorBook app which allows a user to browse tutors and assignments, look for tutors and advertise themselves for tutor assignments. 

## App Link

https://tutorbook-app.netlify.app/

Server GitHub - https://github.com/will-j-c/tutorbook_server

## Tech Stack

1. React
2. Tailwind
3. Axios
4. Various Tailwind component libraries (mainly Mamba UI and Hyper UI)
5. Firebase Authentication

## Approach

After completing all the backend planning, I got to work on creating a basic prototype in Figma. This included a colour scheme and mobile views for most of the pages.

I did a test deployment on the weekend before the project was due to make sure that the live frontend and backend could communicate with each other.

## Issues Face

1. Figma is a powerful tool but it isn't exactly beginner friendly. Creating good looking mock ups is an art form in itself. One which I am not great at. 
2. Authentication generally was a bit of a chore. I initially tried to use AuthO but found it quite difficult to use so switched to Firebase. Firebase itself, although easier than AuthO, does have its quirks which still aren't fully ironed our (such as refresh token actions happening in the background).
3. Initially getting the hang of Tailwind was quite troublesome as it is a completely different way of thinking about styling.
4. I hadn't quite realised the scale of the app until I started working on it. I could of done with an extra week to really nail the front end functionality and styling but learning Django sucked up a lot of time.

## Things I Liked

1. Tailwind is great. I am definitely a convert, even if it does look hideous on the page.
2. Using react with Tailwind was a good experience after using MUI in the last project. Writing semantic HTML and then using a powerful styling system gave much finer control

## Things To Do

1. Add reset password and change password functionality to the frontend app
2. Create search functionality on the users and assignments
3. Implement fully realtime chat functionality
4. Implement analytics
5. Implement a subscription model
6. Redo the styling and refactor the code to keep it more DRY
