// #slidebar menu
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
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

// $(document).on('mouseenter', 'tr', function(){
//   (this).closest('tr').find('#trDelete').css('display', 'block');
// })









$( function() {
  $( document ).tooltip();
} );







  
