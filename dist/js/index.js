(function($){

    var navPanel = $('.navigation'),
        navBtn = $('.navigation__btn'),
        menu = $('.navigation__menu'),
        menuItems = $('.navigation__menu').children(),
        categoriesItems = $('.navigation__categories').find('p'),
        catOpened = $('.category-opened'),
        catFavorites = $('.category-favorites'),
        catAll = $('.category-all'),
        actFavorites = $('.action--favorites'),
        actClose = $('.action--close'),
        actRemove = $('.action--remove');

    navBtn.on('click', function () {
        navPanel.toggleClass('navigation--opened');
    });

    function clearHidden () {
        for (var i = menuItems.length; i--;) {
            menuItems.eq(i).removeClass('hidden');
        }
    }

    function setHidden(typesClass) {
        for (var i = menuItems.length; i--;) {
            if(menuItems.eq(i).hasClass(typesClass)) {
                continue;
            }
            menuItems.eq(i).addClass('hidden');
        }
    }

    function changeBtnsClasses (newClass, oldClass) {
        for (var i = menuItems.length; i--;) {
            menuItems.eq(i).addClass(newClass).removeClass(oldClass);
        }
    }

    function changeActive (catItem) {
        for (var i = categoriesItems.length; i--;) {
            categoriesItems.eq(i).removeClass('active');
        }
        catItem.addClass('active');
    }

    catOpened.on('click', function () {
        changeActive($(this));
        clearHidden();
        setHidden('opened');
        changeBtnsClasses('opened-btns', 'favorites-btns');
    });

    catFavorites.on('click', function () {
        changeActive($(this));
        clearHidden();
        setHidden('favorites');
        changeBtnsClasses('favorites-btns', 'opened-btns');
    });

    catAll.on('click', function () {
        changeActive($(this));
        clearHidden();
        for (var i = menuItems.length; i--;) {
            menuItems.eq(i).removeClass('favorites-btns', 'opened-btns');
        }
    });

    actFavorites.on('click', function () {
        var parent = $(this).parents('li').eq(0);
        parent.toggleClass('favorites');
        if(parent.hasClass('favorites-btns')) {
            parent.addClass('hidden');
        }
    });

    actClose.on('click', function () {
        var parent = $(this).parents('li').eq(0);
        parent.removeClass('opened').addClass('hidden');
    });

    actRemove.on('click', function () {
        var parent = $(this).parents('li').eq(0);
        parent.remove();
    });

    menu.on('click', 'a', function () {
        var parent = $(this).parent();
        parent.addClass('opened');
    })

})(jQuery);