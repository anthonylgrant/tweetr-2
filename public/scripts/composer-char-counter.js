
$(function() {
  console.log( "ready!" );

  $( ".new-tweet form textarea" ).on( "keypress", function() {
    let $this = $(this)
    let yo = "yoyoyoyo"
    console.log($this.val().length);
    console.log(yo);
  });

});
