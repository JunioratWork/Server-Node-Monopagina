const { Router } = require("express");
const router = Router();

/* Init payment form */
router.post('/init', function(req, res, next) {
  var order = req.body;

  // TO DO: check that order is valid  

  // Call CreatePayment web service to create the form token
  request.post({
    url: "https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment",
    headers: {
      'Authorization': 'Basic NTE0NDczNzg6dGVzdHBhc3N3b3JkXzZBZnN6cktnVVVNbXd1eGtZTTU0b0s3RlJKdU1JVEE5NHloYlFORmtuZGswMw==',
      'Content-Type': 'application/json'
    },
    json: order
  }, function(error, response, body) {
    if (body.status === 'SUCCESS')
    {
      // Send back the form token to the client side
      res.send(body.answer.formToken);
    }
    else
    {
      // Do your own error handling  
      console.error(body);
      res.status(500).send('error');
    }
  });
});