# Framer Motion with StaggerChildren on React Components

Sorry for the long title, but this is exactly what this project is about. 

- I have a container (ol-list) with React Components 
  as the children. 
- On the container I want to 'stagger the children' 
  with Framer Motion. 

**Since there are no complete examples found on the 
internet, only a bunch of software-snippets, 
I decided to create a complete example.**

## Tech stack in this project
- Typescript (no ts-ignore in this project!!)
- React (18.2.0) + React Router
- Framer Motion (11.0.5)
- Vite (5.1.4)

## Files
How to work through the files to understand what's happening:

### App.tsx
Small and only setting up the Routes

### routes.tsx
I wanted to show the difference between HTML and React components.
Therefore, 2 pages. One in HTML, the other with a React component.

- /html
- /react

### RouteLayout.tsx
A page showing 2 buttons: 
- One going to /html (HtmlList component)
- Another going to /react (ReactList component)

### HtmlList.tsx
Shows a small list, with 'ol' and 'li'

### ReactList.tsx
Shows the same small list, 
but now with an 'ol' and a React component 
(which does the 'li')

See the comments in the code for explanations

# How to run this
- Clone this repo
- ```npm install```
- ```npm run dev```

# Documentation References
- https://www.framer.com/motion/component/#custom-components
