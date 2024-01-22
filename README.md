## Movie Project

This is a coding challenge done by Mahmood shah on 20th and 21st Jan 2024.

This project is a front-end task focused on retrieving movie information. Initially, you'll notice only a search bar. When you start typing, suggestions appear automatically, I used debouncing here. Pressing the enter key after searching will display a collection of movies. Each movie is presented in a simple, stylish card that shows only basic details. Clicking on a movie card reveals more information in a drawer. If you click on a movie's image, it will open in a new tab using the link provided for the movie's poster.

I have used Material UI library in order to give it a clean and elegant touch as well maintaining the best practices.

### Installation Instructions
* `npm install --legacy-peer-deps`
* `npm run dev`

Note: Since the `@testing-library/react-hooks` requires a peer dependency of `@types/react` version `^16.9.0` or `^17.0.0`, but in this project we are using `@types/react@18.2.48`, therefore we must use `--legacy-peer-deps`. I could have spent a bit more time to write a unit test without using this particular library, but I wanted to manage it with limited time.

### Testing
* `npm run test`

### Minimum requirements
* Node 18.x
* NPM 9.x

### Contacts
* https://mahmood.io