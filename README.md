jQuery.countCharacters
======================

jQuery count characters from input/textarea so on. Just like Twitters tweet function.

How to
======================

Pretty straigt forward:
<br />
Select textarea, or input field with the selector jQuery('#t') #t == id
<br />
jQuery('#t').countCharacters({
    maxLength: 25,
    countNode: '#c',
    trim: true
});
<br />
Parameters:<br />
maxLength - Set this to how many characters you allow the user to type<br />
countNode - the id/class of div/span you want the count down number placed<br />
trim - if you want to trim the text for whitespace, tabs or newline.<br />
<br />
You don't need to set countNode or trim. Just maxLength.<br />

For <a href="http://jsfiddle.net/YVn8A/1/">DEMO: jsFiddle</a>