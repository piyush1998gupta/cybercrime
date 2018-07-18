
 (function(){
    emailjs.init("user_Dg3SIYNbmgxer93CsRzxA");
})();


var templateParams = {
    name: 'James',
    notes: 'Check this out!',
    email : 'piyush101gupta@gmail.com'
};
emailjs.send('gmail', 'aisi_hi', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });