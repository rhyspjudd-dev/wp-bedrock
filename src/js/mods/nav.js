var navmanager = {

    addClasstoTopLevelSubMenu: function () {
        const navitems = document.querySelectorAll('.nav-item');
        navitems.forEach(navitem => {
        const hasCertainChildren = navitem.querySelector('ul.nav-submenu');
            if (hasCertainChildren) {
                navitem.classList.add('has-submenu');
            }
        });
    },

    hoverTransitions: function () {
        const itemHasSubmenu = document.querySelector('.has-submenu');
        itemHasSubmenu.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        itemHasSubmenu.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    }

}

export default navmanager;