$(() => {
  console.log("Hello");

  $('.new-tweet form textarea').on('keyup', function(e) {
    var $this = $(this),
        $counter = $this.parent().children('span'),
        max = 140,
        textlength = $this.val().length;
    $counter.text(`${max - textlength}`);
    console.log(event);
    if (textlength > max) {
    var new_text = $this.val().substr(0, max);
      $this.val(new_text);
    }
    if ($counter.text() == 0){
      $counter.addClass('alert')
      console.log("YO THIS IS WORKING");
    } else {
      $counter.removeClass('alert')
    }
  })
})
