import "./assets/scss/main.scss";

window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let sidebar = require('./js/sidebar'),
        todo = require('./js/todo'),
        scroll = require('./js/scroll');

    sidebar();
    todo();
    scroll();

});