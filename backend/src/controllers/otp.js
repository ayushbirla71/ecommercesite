const plivo = require('plivo').RestAPI({
    authId: '<your AUTH ID>',
    authToken: '<your AUTH TOKEN>',  
  })
  
  
  function getParmas(phone, otp) {
    return {
      'src': 'xx-xxxx',
      'dst' : '91'+ phone,
      'text' : "Your OTP for verification is " + otp,
      'url' : "https://intense-brook-8241.herokuapp.com/report/",
      'method' : "GET"
    }
  }
  
  function sendOTP(phone) {
    var otp;
    // Generate your OTP here
    
    plivo.make_call(getParmas(phone, otp), function(status, response) {
      console.log('Status:' + status)
      console.log('Reponse:' + response)
    })
  }
  
  sendOTP('Your Number here');