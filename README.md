# caesars-ciphers
A Caesar cipher is one of the most simplest and most widely encryption techniques used in cryptography.  It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter with some fixed number of positions along the alphabet.

## UX

**Getting Started**

In the text field, enter text (e.g. Hello World).  In the shift field, select the shift (between 0 and 26).  Check the decode box to decode or uncheck decode to encode.

**User Stories**

- As a user, if I enter the shift that is not between 0 and 26, I get the error message `Shift must be between 0 and 26`.
- As a user, if I enter `Byffi` with a shift of 20 and the decode box is checked, I expect the message to be `Hello`.
- As a user, if I enter `Zqd` with a shift of 1 and the decode box is not checked, I expect the message to be `Are`.
- As a user, if I enter `oann` with a shift of 9 and the decode box is checked, I expect the message to be `free`.
- As a user, if I click on the `Clear` button, I expect the information to be cleared.

## Features

Allows the user to enter text and shift.  Selection of encode or decode.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.2 and jQuery 3.7.1.

## Testing

To preview, use the command `python3 -m http.server` and press `Enter`.

Once the project is deployed, use the official W3C Validator for HTML and (Jigsaw) Validator for CSS.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/caesars-cipher) at the main branch.

## Credits

### Acknowledgements

= [freeCodeCamp](https://www.freecodecamp.org)
