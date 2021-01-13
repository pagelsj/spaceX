
# ATOS: SpaceX

The SpaceX Website was built using the Angular framework using a very simple UI styling 'framework' that built on top of the Bootstrap Grid Framework.

I also gave myself an 2 hour window to complete the task.

## Building and deploying

### Install and deploy steps

 1. Clone the repository using git-cli.

    `git clone git@github.com:pagelsj/spaceX.git`
2. Install all the needed packages using npm, or yarn.

    `npm install` or `yarn install`
3. The project and all dependencies will now be installed and ready to run.

    `ng serve`

## Assumptions
The website needed to be:
1. Maintainable
2. Make use of re-usable code
3. Extendable
4. Follow the Angular Style-guide

## Interesting parts
1. 3rd party CSS frameworks are precompiled into the style.css file rather than being loaded in the index.html file. Leading to less HTTP requests.
2. Most of the styling is reusable and created in a way that it would be able to be built out into a custom CSS Framework.

## Improvements
1. I would have loved to add unit tests!
2. I would have built the pages using routing. (This was not done however due to lack of complexity within the task. Routing within the application was not needed at this point)
3. Adding the ability to filter the mission launches by name or date of launch.
4. Given more time I would have liked to add state management. (NGRX or NGXS)
