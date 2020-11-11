module.exports = function (router) {

console.log('accessed');

//
// Council tax input check

router.post('/Link_Web_Account_To_Council_Tax/v1/route_3/council_tax_number_check', function (req, res) {

  if (req.session.data['council-tax-account-number']) {

    if( req.session.data['council-tax-account-number'].length < 8 ) {

      res.redirect('council_tax_number_no_number');

    } else {

      res.redirect('property_postcode');

    }

  } else  {
    res.redirect('council_tax_number_no_number');
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
