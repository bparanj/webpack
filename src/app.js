var msg = require("./contents.js");
require("./message.scss");
var $ = require("jquery");

$(function(){
    $("<div id='message'>")
        .text(msg)
        .appendTo("body");
});