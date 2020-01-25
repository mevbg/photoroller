# jQuery PhotoRoller Plugin

A mouseover cycle-through photo gallery (iPhoto-like).

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/) [![GitHub license](https://img.shields.io/badge/license-MIT-yellow.svg)](https://raw.githubusercontent.com/martinmethod/photoroller/prod/LICENSE-MIT) [![Travis](https://img.shields.io/travis/martinmethod/photoroller.svg)](https://travis-ci.org/martinmethod/photoroller) [![David](https://img.shields.io/david/dev/martinmethod/photoroller.svg)](https://david-dm.org/martinmethod/photoroller?type=dev) [![GitHub release](https://img.shields.io/github/release/martinmethod/photoroller.svg)](https://github.com/martinmethod/photoroller/releases/latest) [![npm](https://img.shields.io/npm/v/photoroller.svg)](https://www.npmjs.com/package/photoroller) [![Bower](https://img.shields.io/bower/v/photoroller.svg)](https://github.com/martinmethod/photoroller)

## Description

jQuery PhotoRoller Plugin puts a set of images one behind another and turns that deck of images into a beautiful slideshow. All you need to do is move the mouse cursor horizontally throughout the deck and all images will show sequentially depending on the x-position of the cursor in the container area. Just like the iPhoto thumbnails preview.

## Demo

<a href="https://photoroller.metodiev.dev" target="_blank">photoroller.metodiev.dev</a>

## Getting Started

You can [download the plugin as an archive][zip].

[zip]: https://github.com/martinmethod/photoroller/zipball/prod

Or you can grab it by using **npm**:

```javascript
npm install photoroller
```

Or you can grab it by using **Bower**:

```javascript
bower install photoroller
```

## Installation

Include the script after the jQuery library (unless you package scripts otherwise):

```html
<script src="/path/to/photoroller.min.js"></script>
```

Also include the stylesheet for the plugin:

```html
<link type="text/css" rel="stylesheet" href="/path/to/photoroller.css">
```

## Usage

To start using you need two basic things:

### I. Markup

You can have any markup structure inside of a container which PhotoRoller will be attached to, as long as there are child nodes inside.

So you can have this:

```html
<div id="photoroller">
    <div><img src="photos/image001.jpg"></div>
    <div><img src="photos/image002.jpg"></div>
    <div><img src="photos/image003.jpg"></div>
    <div><img src="photos/image004.jpg"></div>
    <div><img src="photos/image005.jpg"></div>
</div>
```

or this:

```html
<div id="any-id">
    <img src="photos/image001.jpg">
    <img src="photos/image002.jpg">
    <img src="photos/image003.jpg">
    <img src="photos/image004.jpg">
    <img src="photos/image005.jpg">
</div>
```

*The ID is not necessary to be "photoroller" or even to be there. You can select the container by using class name or any other way you like. You'll find out more in the very next lines.*

### II. JavaScript

There are two ways of initializing **PhotoRoller**:

**1.** The first one is by calling it like a method, attached to an object. So, we can use the plugin for the above markup this way:

```javascript
$("#any-id").photoroller(); // returns the target object
```

You can also provide some options. For example, if you want to specify which image to be the first one to show, you can do it by providing its number like this:

```javascript
$("#any-id").photoroller({
    startpoint: 3
});
```

*You can read more about what settings can be provided in the "Options" paragraph.*

---

**2.** The second way of calling **PhotoRoller** is as follows:

```javascript
$.photoroller(); // returns the target object
```

By calling it so, the plugin will look for only one container with an ID "photoroller". If no such, nothing will happen.

Of course, you can also provide a target object by doing so:

```javascript
$.photoroller({
    target: $('selector')
});
```

## Options

### nodes

```javascript
nodes: $('selector')
```

Defines what child nodes to be used. If not provided, the plugin will use all childs.

### startpoint

```javascript
startpoint: 3 // default: 1
```

Defines which image to be the first one to show.

### jump\_back

```javascript
jump_back: true // default: false
```

Defines whether the image should jump back to the startpoint when the mouse leaves the image.

### jumppoint\_click

```javascript
jumppoint_click: false // default: true
```

If jump\_back is active, this option defines whether the image to should jump back to can be set by clicking on the image.

## Browsers compatibility

- Apple Safari
- Google Chrome
- Microsoft Internet Explorer 9+
- Mozilla Firefox
- Opera

## Dependencies

- [jQuery][jq]

[jq]: https://github.com/jquery/jquery.git

## License

Copyright © 2017 Martin Metodiev. Licensed under the MIT license. [See here for more details.][licence]

[licence]: https://raw.github.com/martinmethod/photoroller/prod/LICENSE-MIT
