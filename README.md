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


