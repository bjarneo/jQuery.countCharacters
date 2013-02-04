jQuery.countCharacters
======================

jQuery count characters from input/textarea so on. Just like Twitters tweet function.

How to
======================

Pretty straigt forward:

Select textarea, or input field with the selector jQuery('#t') #t == id

jQuery('#t').countCharacters({
    maxLength: 25,
    countNode: '#c',
    trim: true
});

Parameters:
maxLength - Set this to how many characters you allow the user to type
countNode - the id/class of div/span you want the count down number placed
trim - if you want to trim the text for whitespace, tabs or newline.

You don't need to set countNode or trim. Just maxLength.

For DEMO: http://jsfiddle.net/YVn8A/1/