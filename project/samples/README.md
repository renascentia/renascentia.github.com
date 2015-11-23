# Samples.com - Documentation

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`


## IMAGE SIZES

Featured Image
`width: 720px; height: 440px;`

Product Image 
`width: 610px; height: 474px;`

## CSS FILES

All the css is compiled though compass, so don't edit any .css file, you will have to edit the .scss file instead and run the compass compiler. Read more about compass here http://compass-style.org/

Then when you're working on the scss, just run the following command to compile the css:

```bash
bundle exec compass watch
```

## Imports

/*** JS FILES ***/

I'm using Foundation framework for the JS, and for the search it's custom JS that you can view inside js/app.js. 

For IE compatibility you will need to import the necessary js that you see inside the <head> tag.

/*** CSS FILES ***/

For all the pages you will need to import the css/app.css.

## STYLES

If you would like to change any color on the website, you can easily do so on the global variables files(bower_components/foundation/scss/foundation/components/_global.scss)

/*** BUTTONS ***/

You can include the button class inside an <a> and the <button> tags.
- Blue: `class="button blue"`
- Green: `class="button green"`
- Purple: `class="button purple"`

You can include those inside any text tag to change the text color.
- Blue: `class="color-blue"`
- Green: `class="color-green"`
- Purple: `class="color-purple"`

/*** TOP NAV ***/

The nav bar default style is dark grey, if you want to change the color you will need to add an extra class to the div `contain-to-grid`. Remember to change the logo image as well.
- Default/ Dark: `<div class="contain-to-grid">` / logo.png
- Blue Nav: `<div class="contain-to-grid top-bar-blue">` / logo-blue.png
- Green Nav: `<div class="contain-to-grid top-bar-green">"` / logo-green.png
- Purple Nav: `<div class="contain-to-grid top-bar-purple">` / logo-purple.png

## QUESTIONS

Just email me at hello@rodrigoparra.com

## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```
