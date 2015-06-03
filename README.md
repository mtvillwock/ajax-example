# AJAX Example

## Status

In progress. First AJAX call written and broken out across branches. Need to add screenshots and video links.

### Purpose

Provide a branch-by-branch look at setting up an AJAX call. The branches go in relatively the same order as the steps below, although the code got refactored as it went, so some of the code snippets below are closer to the "finished" product than the code in the corresponding branch.

### Steps:
1) Set up event listener - use a bindEvents function to attach all your listeners to the DOM when the document is ready. Example:

```javascript
$(document).ready(bindEvents);
function bindEvents() {
  $('.aClass').on('anEvent', aFunction);
  $('.someClass').on('someEvent', someFunction);
}
```

2) Prevent default - keep browser from navigating away from current page, e.g., clicking a link defaults to a ```get``` route and clicking a ```submit``` button defaults to a ```post``` route.

```javascript
function someAction(e) {
  e.preventDefault();
}
```

Pass in ```e``` to your event listener's callback. Using just ```event.preventDefault();``` should be avoided because the ```event``` object is the value from the ```window.event``` property, which is global, and therefore is not something you want to be referencing carelessly. Since the listener will pass the ```event``` object as the first argument of the callback you provide it, ```e``` will be the ```event```, but it will now be constrained to the scope of your callback function instead of referencing something global.

To see an example of this, paste this into your browser console:

```javascript
var anEventThatHappened;
document.addEventListener('keyup', function(e) {
  anEventThatHappened = e;
  console.log("e is: ", e);
  console.log("event is: ", event);
  console.log("e === event?", e === event);
}
```

3) Debugger - play around in the console and find needed DOM elements and attributes. You can also use breakpoints in the browser console, which is a nice alternative as well because then you don't have to move your debugger around in the text editor. Play around with both and see what works for you.

4) AJAX call - you can structure this a handful of different ways. However, it should contain a url, a type/method, and data. You can also do some more complex things like extracting the options object or storing the request as a variable. Example:

```javascript
var options = {
  url: 'http://localhost:9393/notes',
  type: 'post',
  data: formData
};
var request = $.ajax(options);
```

5) Callbacks - provide a ```.done``` and ```fail``` callback for your AJAX request to perform after it gets its response from the server. Provide both so that you can handle errors from the server. Also, use done/fail, because success/error are being deprecated.

```javascript
request.done(function(response) {console.log("done: ", response); });
request.fail(function(response) {console.log("fail: ", response); });
```

Here is a Stack Overflow answer with more information about this: [jQuery.ajax handling continue responses: “success:” vs “.done”?](http://stackoverflow.com/questions/8840257/jquery-ajax-handling-continue-responses-success-vs-done).

### Quickstart

1.  `git clone <repo url>`
2.  `bundle install`
3.  `rake db:create`, `rake db:migrate`
4.  `shotgun config.ru`