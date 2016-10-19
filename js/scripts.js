$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var usernameInput = $("input#user-name").val();
    var addressInput = $("input#address").val();

    $(".user-name").text(usernameInput);
    $(".address").text(addressInput);

    $("#letter").show();

    event.preventDefault();
  })
});
