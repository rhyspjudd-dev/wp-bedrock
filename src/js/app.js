console.log('Assets are compiling!');

import navmanager from "./mods/nav.js";

document.addEventListener('DOMContentLoaded', function() {
    navmanager.addClasstoTopLevelSubMenu();
    navmanager.hoverTransitions();
});