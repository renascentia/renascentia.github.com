# Sample.com Quick Guide

## Requirements

  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  * [compass](http://compass-style.org/): `gem install compass`
  * [bower](http://bower.io): `npm install bower -g`

## CSS FILES

All the css is compiled though compass, so don't edit any .css file, you will have to edit the .scss file instead and run the compass compiler. Read more about compass here http://compass-style.org/

Then when you're working on the scss, just run the following command to compile the css:

```bash
bundle exec compass watch
```

## Imports
For all the pages you will need to import the global.css.

/*** JS FILES ***/

I'm using Foundation framework for the JS, using it for the retina images and modal. For IE compatibility you will require the rem.js and placeholders.js.

If you know grunt, I would recommend merging all js and creating a single one for production.

/*** A/B TEST ***/

If you would like to test the button color just include the class="orange" on your html, the default color is blue.


If you would like to change any color on the website, you can easily do so on the global variables files(scss/framework/components/_global.scss)

/*** SEO ***/

I've used all the necessary html tags for SEO, now you need to make sure you target your keywords properly. If you still have access to bright marketing files. I would recommend taking a look and check our top keywords and ad groups, then create your SEO strategy from that. If you need more help with seo just let me know.

/*** QUESTIONS ***/

Just skype me or email me at hello@rodrigoparra.com


## Upgrading

If you'd like to upgrade to a newer version of Foundation down the road just run:

```bash
bower update
```
