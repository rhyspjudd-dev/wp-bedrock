console.log('Assets are compiling!');

import navmanager from "./mods/nav.js";
import searchmanager from "./mods/search.js";

document.addEventListener('DOMContentLoaded', function() {
    navmanager.addClasstoTopLevelSubMenu();
    navmanager.hoverTransitions();
    //searchmanager.search();
    searchmanager.togglesearchvisabiltiy();
});