$(document).ready(bindEvents);

function bindEvents() {
  $('.notes-container').on('submit', addNote);
}

    var formData = $(event.target).serialize();
    var formFields = $(event.target).children();
    $(formFields[0]).val("");
    formFields[1].value = "";

    var options = {
      url: event.target.action, // http://localhost:9393/notes
      type: event.target.method, // 'post'
      data: formData // "title=text&content=moretext"
      // this will be accessible in params in your controller with params[:form_data]
    }

    debugger;
    $.ajax(options)
    .done(function(response) {
      console.log("done :", response);
    })
    .fail(function(response) {
      console.log("fail :", response);
    })
  });
});

