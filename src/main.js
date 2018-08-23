var $ = require("jquery");
require("jquery-ui/ui/widgets/draggable");
require('./main.css');

$(document).ready(function () {
    document.getElementById('app').innerHTML="hello world!";
    $('#draggable').addClass('draggable');
    $("#draggable").draggable();
});




