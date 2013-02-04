/*! jQuery Count Characters - v1.0.0
* https://github.com/bjarneo/jQuery.countCharacters
* http://www.workbench.no/blog/
* Copyright (c) 2013 Bjarne Øverli; Licensed MIT */
(function ($) {
    $.fn.countCharacters = function (params) {
        if (params.countNode) {
            $(params.countNode).html(params.maxLength);
        }
        this.keydown(function (e) {
            var t = $(this),
                txt = t.val(),
                txtLen = txt.length,
                regX = /[ \t\r\n]+/g;

            // Trim for newline, tab and whitespace 
            if (params.trim) {
                txt = txt.replace(regX, '');
                txtLen = txt.length;
            }

            // If counter is set, count down.
            if (params.maxLength && params.countNode) {
                $(params.countNode).html(params.maxLength - txtLen);
            }

            // Prevent user to write after params.maxLength reached  
            if (params.maxLength && txtLen >= params.maxLength) {
                // Use this hack so we can use backspace
                if (e.which < 0x20) {
                    return;
                }
                e.preventDefault();
            }
        });
        return this;
    }
})(jQuery);