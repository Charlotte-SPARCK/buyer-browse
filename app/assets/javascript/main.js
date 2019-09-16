$('#foundation-match').click(function() {
    $('input[name=foundation-capabilities]').prop('checked', true);

    var div = $('div');

    if (div.hasClass('.solution-two')) {
      $('.solution-two').show();
    }
    else {
      $('.solution-one').hide();
      $('.solution-three').hide();
      $('.solution-four').hide();
      $('.solution-five').hide();
      $("input[name=non-foundation-capabilities]").attr('disabled','disabled');

      $("input[id=citizen-capabilities-1]").removeAttr('disabled').prop('checked', true);
      $("input[id=prescribing-and-dispensing-capabilities-1]").removeAttr('disabled').prop('checked', true);
      $("input[id=clinical-capabilities-2]").removeAttr('disabled').prop('checked', true);
      $("input[id=clinical-capabilities-10]").removeAttr('disabled').prop('checked', true);
      $("input[id=practise-management-capabilities-3]").removeAttr('disabled').prop('checked', true);
    }
});

// $('input').click(function() {
//     var value = $(this).val();
//
//     if (value == "prescribing") {
//       $('.solution-one').hide();
//       $('.solution-two').hide();
//       $('.solution-three').hide();
//       $('.solution-four').show();
//       $('.solution-five').hide();
//       $('.no-results').css('display', 'none');
//     }
//     else {
//       $('.solution-one').hide();
//       $('.solution-two').hide();
//       $('.solution-three').hide();
//       $('.solution-four').hide();
//       $('.solution-five').hide();
//       $('.no-results').css('display', 'block');
//     }
// });

// $('#apply-filters').click(function() {
//     var val = [];
//     $(':checkbox:checked').each(function(i){
//       val[i] = $(this).val();
//
//       if (val == "prescribing"){
//           $('.solution-one').hide();
//           $('.solution-two').hide();
//           $('.solution-three').hide();
//           $('.solution-four').show();
//           $('.solution-five').hide();
//           $('.no-results').css('display', 'none');
//       }
//       else if (val == "prescribing,patient-information-maintenance,recording-consultations"){
//         $('.solution-one').show();
//         $('.solution-two').hide();
//         $('.solution-three').hide();
//         $('.solution-four').hide();
//         $('.solution-five').hide();
//         $('.no-results').css('display', 'none');
//       }
//       else {
//         $('.solution-one').hide();
//         $('.solution-two').hide();
//         $('.solution-three').hide();
//         $('.solution-four').hide();
//         $('.solution-five').hide();
//         $('.no-results').css('display', 'block');
//       }
//     });
// });
