# Gulp Boilerplate
A minimalistic and light-weight Gulp Boilerplate to quick start your multi-language project from scratch.

Made with :heart: by [Glenn Reyes](//glennreyes.com)


## Features
- [**ES2015 Babel**](https://babeljs.io/) transpiler that allows you writing JS Code in ES2015/ES6 style.
- [**Browserify**](http://browserify.org/) for bundling all your JS components together.
- [**Sass**](http://sass-lang.com/): CSS pre-processor with [Autoprefixer](https://autoprefixer.github.io/)
- [**Browsersync**](https://browsersync.io/) with Livereload
- [**Critical**](https://github.com/addyosmani/critical) extracts the CSS from your critical path (above-the-fold) to HTML for better performance and experience
- [**Handlebars**](http://handlebarsjs.com/) templates that organizes the HTML snippets
- **Multi-language Support** inspired by i18n

## Installation
Install Node & [Bower](http://bower.io/) packages:
```
npm install && bower install
```
If you don't need any Bower packages, you will have to turn off the font task.

## Basic Usage

### Serve and watch
To start Browsersync and Livereload, simply:
```
npm start
```

### Production build
To create a static build just run following command on your CLI:
```
npm run build
```
All built files should be in the ```dist``` folder afterwards.

### Gulp
Your global gulp command is working as well, assuming it's in your machine already. If not, try ```npm install -g gulp```and run any task like ```gulp styles```, ```gulp critical```or ```gulp``` as needed.

### Multi-language
The language files are located in the ```src/data/lang``` folder and each language share the ```global.json``` in their parent folder.
You can access to the properties on the handlebars templates by doing ```{{title}}```.

## License
This project is licensed under the MIT license, Copyright (c) 2016 Glenn Reyes. For more information check [```LICENSE```](LICENSE)
