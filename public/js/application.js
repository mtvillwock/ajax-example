$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('.notes-container').on('submit', function() {
    console.log("submit clicked");
    event.preventDefault();
    debugger;

    var formData = $(event.target).serialize();
    var formFields = $(event.target).children();
    $(formFields[0]).val("");
    formFields[1].value = "";

    $.ajax({
      url: event.target.action, // http://localhost:9393/notes
      type: event.target.method, // 'post'
      data: { formData: formData }
    })
  });
});

