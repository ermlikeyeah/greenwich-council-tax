module.exports = function (router) {

  var NotifyClient = require('notifications-node-client').NotifyClient,
      notify = new NotifyClient(process.env.NOTIFYAPIKEY);

// Add your routes here - above the module.exports line

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/Set_Up_A_Direct_Debit/v1/submit_info', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'a97c5ae6-1405-47c4-b67c-50d5c0e49405',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '1ce5a5df-384a-4341-9853-21422641b2d2',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/Set_Up_A_Direct_Debit/v1/confirmation');

});


router.post('/Set_Up_A_Direct_Debit/v1/council_tax_number_check', function (req, res) {

  if (req.session.data['council-tax-account-number']) {

    if( req.session.data['council-tax-account-number'].length < 8 ) {

      res.redirect('council_tax_number_no_number');

    } else {

      res.redirect('address_check');

    }

  } else  {
    res.redirect('council_tax_number_no_number');
  }
});

router.post('/Set_Up_A_Direct_Debit/v1/same_address_check', function (req, res) {

  if (req.session.data['same-address'] == 'yes') {
    res.redirect('DD_plan');
  } else if (req.session.data['same-address'] == 'no') {
    res.redirect('your_address');
  } else {
    res.redirect('same_address_question');
  }

});

router.post('/Set_Up_A_Direct_Debit/v1/address_check_check', function (req, res) {

  if (req.session.data['correct-property'] == 'yes') {
    res.redirect('amount_due');
  } else if (req.session.data['correct-property'] == 'no') {
    res.redirect('council_tax_number');
  } else {
    res.redirect('address_check');
  }

});

}
