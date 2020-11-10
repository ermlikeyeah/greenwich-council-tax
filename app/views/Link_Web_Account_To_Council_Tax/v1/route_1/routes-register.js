module.exports = function (router) {

console.log('accessed');

router.post('/Register_To_Use_Online/v1/check_delivery_method', function (req, res) {

  if (req.session.data['receive-code'] == 'text') {
    res.redirect('provide_mobile_number');
  } else if (req.session.data['receive-code'] == 'post') {
    res.redirect('provide_postal_address');
  } else {
    res.redirect('code_delivery');
  }

});

}
