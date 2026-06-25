$('#results').html(``);

// Function for Caesar's Cipher
function caesarsCipher(str, shift, decode=false) {
    shift = (decode) ? shift : 26 - shift;
    let decodedMessage = "";

    for (let i=0;i<str.length;i++) {
   if (str[i].charCodeAt(0) >=65 && str[i].charCodeAt(0) <=90) {
     if (str[i].charCodeAt(0) - shift < 65) {
       decodedMessage += String.fromCharCode((str[i].charCodeAt(0)-65+(26-shift)%26)+65) 
     } else {
         decodedMessage += String.fromCharCode(((str[i].charCodeAt(0)-shift-65)%26)+65);
       }
     } else if (str[i].charCodeAt(0) >=97 && str[i].charCodeAt(0) <=122) {
       if (str[i].charCodeAt(0)-shift < 97) {
         decodedMessage += String.fromCharCode((str[i].charCodeAt(0)-97+(26-shift)%26)+97);
       } else {
         decodedMessage += String.fromCharCode(((str[i].charCodeAt(0)-shift-97)%26)+97);
       }
     } else {
       decodedMessage += str[i];
     }
   }
  
  return decodedMessage;
}

// Keyup Event for Text Field
$('#mytext').on('keyup', () => {
  $('#results').html(``);
  const text = $('#mytext').val();
  const shift = $('#shift').val();
  const decode = $('#decode').prop('checked');
  $('#results').append(`Text: ${text} <br>`);
  $('#results').append(`Shift: ${shift} <br>`);
  $('#results').append(`Decode: ${decode} <br>`);
  $('#results').append(`${decode ? "Decrypted" : "Encrypted"} Text: ${decode ? caesarsCipher(text,shift,decode) : caesarsCipher(text,shift)} <br>`);
});

// Keyup Event for Shift Field
$('#shift').on('keyup', () => {
  $('#results').html(``);
  const text = $('#mytext').val();
  const shift = $('#shift').val();
  const decode = $('#decode').prop('checked');
  $('#results').append(`Text: ${text} <br>`);
  $('#results').append(`Shift: ${shift} <br>`);
  $('#results').append(`Decode: ${decode} <br>`);
 $('#results').append(`${decode ? "Decrypted" : "Encrypted"} Text: ${decode ? caesarsCipher(text,shift,decode) : caesarsCipher(text,shift)} <br>`);
});