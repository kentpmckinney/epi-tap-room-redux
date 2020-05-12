<!-- Category: Epicodus;React;HTML/CSS/JS -->
# Tap Room

Provides the ability to view, add, and edit kegs

https://github.com/kentpmckinney/epi-tap-room

## Previewing this Project

This project is hosted at: https://kentpmckinney.github.io/epi-tap-room

## Working with the Source Code

The following instructions explain how to set up a development environment for this project on MacOS. Steps will differ depending on the operating system.

### Prerequisites

The following software must be installed and properly configured on the target machine. 

```
An updated web browser (Internet Explorer is not compatible)
```
```
Node.js
```
```
Git (optional but recommended)
```

### Setting up a Development Environment

1. Download a copy of the source code from: https://github.com/kentpmckinney/epi-tap-room
   or clone using the repository link: https://github.com/kentpmckinney/epi-tap-room.git
2. Navigate to the folder location of the source files in Finder or in the Terminal
3. Run the command `npm install` to download a local cache of the npm packages used by this application
4. Build the application with the command `npm run build`
5. Start the application with the command `npm run start`

## Running Automated Tests

how to run the automated tests

```
example
```

## Deployment



## Technologies Used

* JavaScript
* HTML
* CSS
* React
* Webpack
* Babel

## Authors

Kent McKinney - [GitHub](https://github.com/kentpmckinney) - [LinkedIn](https://www.linkedin.com/in/kentpmckinney/)

### Copyright &copy; 2020 Kent P. McKinney

## Acknowledgments

https://www.learnhowtoprogram.com/fidgetech-4-react/4-1-react-fundamentals/4-1-5-1-react-fundamentals-independent-project

### Component Diagram:

```
|------------------------------------------|
|                                          |
|     App                                  |
|                                          |
|   |--------------------------------|     |
|   |             Header             |     |
|   |--------------------------------|     |
|                                          |
|   |--------------------------------|     |
|   |      KegList           [New] <-|-----|--- Clicking on New in KegList adds a new Keg to the top of
|   |          -----------           |     |    the list in Edit mode
|   |          | Keg     |           |     |
|   |          -----------           |     |
|   |          | Keg     |           |     |
|   |          --------------------  |     |
|   |          | [Details] [Edit] <--|-----|--- Clicking on Details or Edit in Keg fires event handlers
|   |          |                  |  |     |    in KegList. The event handlers cause different children
|   |          |    Keg           |  |     |    to be passed to <Keg />. <Keg /> is thus reused rather
|   |          |                  |  |     |    than creating separate components
|   |          --------------------  |     |
|   |                                |     |
|   |--------------------------------|     |
|                                          |
|                                          |
|------------------------------------------|

```

### Specifications:

| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| Application created with create-react-app runs properly | √ | √ |
| User can see a list of all available kegs | √ | √ |
| User can see the name, brand, price, alcohol content, gluten status, and vegan status for each keg | √ | √ |
| User can submit a form to add a new keg | √ | √ |
| User can click on a keg to see its detail page | √ | √ |
| User can see how many pints are left in a keg | √ | √ |
| User can click on a button next to the keg whenever a pint is sold | √ | √ |
| Clicking the button to sell a pint decreases the number of pints by 1 out of 124 | √ | √ |
| The number of pints in a keg does not go below zero | √ | √ |
| Application compiles and runs and all required functionality is included | √ | √ |
| Functional and class components are used correctly | √ | √ |
| Application effectively uses local and shared state | √ | √ |
| README includes an accurate representation of the component tree | √ | √ |
| Props are used correctly and always include PropTypes | √ | √ |
| [Optional] User can edit the keg's properties at any time | √ | √ |
| [Optional] User can delete a keg | √ | √ |
| [Optional] Keg shows as out of stock when it's empty | √ | √ |
| [Optional] Kegs with less than 10 pints show 'Almost Empty' | √ | √ |
| [Optional] Keg prices are color-coded for readability | √ | √ |
| [Optional] Application is nicely styled | √ | √ |
