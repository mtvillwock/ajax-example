$(document).ready(bindEvents);
// don't need anonymous function in document ready if you're just invoking bindEvents
function bindEvents() {
    $('.notes-container').on('submit', addNote);
    // listeners pass in their event as the first argument to their callback
    // you don't specify e as an argument here because that would invoke addNote
    // so the listener would try to call the result of addNote being executed as its callback function
    // since addNote doesn't return a function as its result, this would end poorly
}

function addNote(e) {
    // e is the event passed in from the event listener
    e.preventDefault();
    // pass e as an argument to addNote because event listeners
    // pass their event to their callback as the first argument;
    // use e instead of event because event is a property on the global window object

    var formData = $(e.target).serialize();
    var formFields = $(e.target).children();
    $(formFields[0]).val("");
    formFields[1].value = "";

    var options = {
        url: e.target.action, // http://localhost:9393/notes
        type: e.target.method, // 'post'
        data: formData // "title=text&content=moretext"
        // this will be accessible in params in your controller with params[:form_data]
    };

    var request = $.ajax(options)
    request.done(function(response) {
        $('.notes-container').append(response);
    });
    request.fail(function(response) {
        console.log("fail :", response);
    });
}