# Personal Website Spec

## Introduction

We'll be creating a personal website so you can get familiar with web development & have a place where you can host your projects, resume, blogs, etc.

## Tech Stack

- [Vite](https://vite.dev/) *- frontend build tool*
- [React](https://react.dev/) *- frontend framework*
- [Tailwind](https://tailwindcss.com/) *- CSS framework*
- [Vercel](https://vercel.com/) *- hosting / deployment*

## Frontend

### Stage 1 - Create your Project

1. Create a new repository on Github
2. Create a new vite project
3. Add tailwind as a dependency to your project
4. Remove existing HTML and create a an h1 tag with your name & a paragraph with a brief blurb about yourself.
5. Push changes to your repository

### Stage 2 - Deploy your Project!
1. [Deploying To Vercel](https://vercel.com/docs/deployments)

### Stage 3 - Styling Your Homepage

1. Create a simple homepage that lists your name & a quick blurb about yourself.
2. Remove existing CSS files and create a new file called `index.css` in your `src` directory.
3. Add tailwind to your project as a dependency.
4. Use tailwind to vertically and horizontally center your name and blurb.
5. Push your change to your repository.

### Stage 4 - Additional Pages & Routing

1. Create 2 new components About Me & Projects.
2. Add [React Router](https://reactrouter.com/start/declarative/installation) to your project which will be used to route users to different pages on your site.
3. Create a menu bar that will allow users to navigate to your different pages (Home, About Me, Projects) using a [shadcn](https://ui.shadcn.com/) component.
4. Confirm you can navigate between pages and push your changes.

### Stage 5 - Keep going!

1. Add new pages to your site, refine your components & page layout as you see fit, and create whatever else you need to make your personal website a good reflection of your skills and interests.

## Backend 

Next we will create a "Contact Me" form so that people viewing your site can contact you via email.

### Stage 1 - Create a Firebase Backend
1. Create a Firebase account & Firebase project.
2. Install the [Firebase SDK](https://firebase.google.com/docs/web/setup?_gl=1*1h9ot3x*_up*MQ..&gclid=CjwKCAiAoNbIBhB5EiwAZFbYGEX9-MOKqzgzkQLYpG_g_cZntGrqPbwGBC02zjh1-KHqNvEtbv1cvBoCKsIQAvD_BwE&gclsrc=aw.ds) in your project & the Firebase CLI.

### Stage 2 - Create a Firestore Database
1. Follow the [Firestore Quickstart](https://firebase.google.com/docs/firestore/quickstart) guide to create a Firestore database.

### Stage 3 - Create a Contact Form
1. Using Shadcn components create a form that allows users to enter their name, email, and a message.
2. Have the form submit the data to your Firestore database.

### Stage 4 - Create an Admin Page
1. Create a login form that allows you to sign in as an admin user. *Reference: [Firebase Authentication](https://firebase.google.com/docs/auth)*
2. Create a new page that allows you to view the responses of the contact form that are stored in your Firestore Database & is only visible to a logged in user with admin privileges.

## Useful Links

### References
- [Vite](https://vite.dev/) *- frontend build tool*
- [React](https://react.dev/) *- frontend framework*
- [Tailwind](https://tailwindcss.com/) *- CSS framework*
- [Vercel](https://vercel.com/) *- hosting / deployment*
- [ShadCN](https://ui.shadcn.com/) *- Component Library*
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Learn CSS Grid For Layouts](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [React useEffect Hook](https://react.dev/reference/react/useEffect)
- [React useState Hook](https://react.dev/reference/react/useState)

### Some example personal websites for inspiration
Here are a couple examples you can use for inspiration. If you don't want to be a designer then you don't have to be. You can keep your page professional and simple if you'd like.
- [https://stantyan.com/#](https://stantyan.com/#)
- [https://arhaan-dev.vercel.app/](https://arhaan-dev.vercel.app/)
- [https://www.erenaygun.com/](https://www.erenaygun.com/)
- [https://ironclad.sh/](https://ironclad.sh/) 
- [https://daverupert.com/](https://daverupert.com/)
- [https://www.taniarascia.com/](https://www.taniarascia.com/)
