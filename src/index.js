import "./assets/scss/main.scss";

window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    let sidebar = require('./js/sidebar'),
        todo = require('./js/todo');

    sidebar();
    todo();

});