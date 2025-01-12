// let service_id = "service_dfr45ir";
// let public_key = "fX7VUM-DLLJLOWNu_";
// let template_id = "template_7dlkzpp";
// (function(){
//     emailjs.init({
//       publicKey: public_key,
//     });
//  })();

// function sendForm (){
//       let email = document.getElementById("email").value;
//       let message = document.getElementById("message").value;
//       let name = document.getElementById("name").value;
//     var templateParams = {
//         to_name: 'Zubair',
//         client_email:email,
//         message: message,
//         from_name:name
//       };

//  console.log('running',emailjs)
// emailjs.send(service_id,template_id,templateParams).then(
//     (response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('SUCCESS! EMAIL SEND')
//       location.reload();
//       console.log(email)
//     },
//     (error) => {
//       console.log('FAILED...', error);
//       alert("FAILED TO SEND EMAIL")
//     },
//   );

// }
