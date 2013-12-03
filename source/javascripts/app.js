$(function() {
  $("#pages").val(document.location.pathname);

  $("#pages").bind("change", function() {
    document.location = $(this).val();
  })
});
