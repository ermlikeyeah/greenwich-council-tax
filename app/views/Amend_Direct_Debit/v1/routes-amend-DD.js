module.exports = function (router) {

console.log('accessed');

//
// Council tax input check

router.post('/Amend_Direct_Debit/v1/cancel_DD_reason', function (req, res) {


    if( req.session.data['cancel-reason'] == "moving-within" ) {

      res.redirect('cancel_move_within');

    } else if( req.session.data['cancel-reason'] == "moving-outside" ) {

      res.redirect('cancel_move_outside');


    } else if ( req.session.data['cancel-reason'] == "monthly" ) {

      res.redirect('cancel_monthly');


    } else {

      res.redirect('cancel_DD');

    }

});


//
// Postcode check
//

router.post('/Link_Web_Account_To_Council_Tax/v1/route_3/postcode_check', function (req, res) {

  if (req.session.data['property-postcode']) {

      res.redirect('name');

    } else {

      res.redirect('property_postcode_invalid');

    }

});


//
// Name check
//


router.post('/Link_Web_Account_To_Council_Tax/v1/route_3/name_check', function (req, res) {

    var counter = req.session.data['counter'];
    counter = Number(counter)
    counter = counter + 1;
    req.session.data['counter'] = counter;

if (counter > 3) {

    res.redirect('fail');

} else {

  if (req.session.data['first-name'] && req.session.data['last-name']) {

      res.redirect('question');

    } else if (!req.session.data['first-name'] && !req.session.data['last-name']) {

    res.redirect('name_both_error');

  } else if (!req.session.data['first-name'] && req.session.data['last-name']) {

  res.redirect('name_first_error');


  } else if (req.session.data['first-name'] && !req.session.data['last-name']) {

  res.redirect('name_last_error');

    } else {

      res.redirect('name_error');

    }

  }



});


//
// Question check
//

router.post('/Link_Web_Account_To_Council_Tax/v1/route_3/question_check', function (req, res) {

    var counter = req.session.data['counter'];
    counter = Number(counter)
    counter = counter + 1;
    req.session.data['counter'] = counter;

if (counter > 3) {

    res.redirect('fail');

} else {

  if (req.session.data['date-month'] && req.session.data['date-year']) {

      res.redirect('confirmation');


    } else {

      res.redirect('question_error');

    }

  }

});

//
// End bracket - do not delete!
//

}
