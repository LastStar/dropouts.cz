$(function() {
  var page = document.location
  var sel = $("#pages")

  sel.val(page.pathname);



  sel.bind("change", function() {
    document.location = $(this).val()
  })
});
