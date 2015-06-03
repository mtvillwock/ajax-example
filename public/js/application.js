$(document).ready(bindEvents);

function bindEvents() {
  $('.notes-container').on('submit', addNote);
}

function addNote(e) {
  e.preventDefault();
  // this e is the event passed in from the event listener

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

    debugger;
    $.ajax(options)
    .done(function(response) {
      console.log("done :", response);
    })
    .fail(function(response) {
      console.log("fail :", response);
    });


  }
