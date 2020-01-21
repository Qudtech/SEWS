// #slidebar menu
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
//#eyes show
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
// #seach input
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// #trDelete
$(document).on('click', "#trDelete", function(){
  $(this).closest('tr').remove();
})
$(document).on('click', "#trDelete", function(){
  $(this).closest('tr').remove();
})

$('tr').on("click", function(){
  var m = $(this).closest('tr').val();
  console.log(m);
})
// $(document).on('mouseenter', 'tr', function(){
//   (this).closest('tr').find('#trDelete').css('display', 'block');
// })









$( function() {
  $( document ).tooltip();
} );







  
