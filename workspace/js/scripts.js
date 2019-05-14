/*
Menu - Code by Zsolt Király
v1.1.4 - 2018-04-10
*/

'use strict';
var menu = function() {

    function signatura() {
        if (window['console']) {
            const text = {
                black: '%c     ',
                blue: '%c   ',
                author: '%c  Zsolt Király  ',
                github: '%c  https://zsoltkiraly.com/'
            }
    
            const style = {
                black: 'background: #282c34',
                blue: 'background: #61dafb',
                author: 'background: black; color: white',
                github: ''
            }
    
            console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
        }
    }
    
    signatura();

    function desktopArrow(dropDown) {
        var i = 0,
            lenArrow = dropDown.length;
        for (; i < lenArrow; i++) {
            var dropDownArrow = dropDown[i];
            var liArrow = dropDownArrow.parentElement;

            var aArrow = liArrow.querySelector('span');

            aArrow.innerHTML += '<i class="icon-arrow" aria-hidden="true"></i>';
        }
    }

    function mobileMenuHide(hamburger, dropDown, overlay) {

        var i = 0,
            lenUlHide = dropDown.length;
        for (; i < lenUlHide; i++) {
            var dropDownUlHide = dropDown[i];

            if (window.matchMedia('(max-width: 992px)').matches) {
                dropDownUlHide.classList.add('hide');

                if (dropDownUlHide.classList.contains('hide') && dropDownUlHide.classList.contains('show')) {
                    dropDownUlHide.classList.remove('hide');
                }

            } else {
                overlay.setAttribute('class', '');
                dropDownUlHide.setAttribute('class', '');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';

                if (dropDownUlHide.parentElement.classList.contains('active')) {
                    dropDownUlHide.parentElement.classList.remove('active');
                }
            }
        }
    }

    function mobileMenuToggle(dropDown) {
        var i = 0,
            lenToggle = dropDown.length,
            toggleArrays = [];
        for (; i < lenToggle; i++) {

            var dropDownToggle = dropDown[i],
                parentLi = dropDownToggle.parentElement,
                spanToggle = parentLi.querySelector('span'),
                iToggle = spanToggle.querySelector('i');

            toggleArrays.push(dropDownToggle);

            iToggle.addEventListener('click', function() {
                var i = 0,
                    lenArray = toggleArrays.length;
                for (; i < lenArray; i++) {
                    var dropDownToggleArray = toggleArrays[i],
                        parentElement = dropDownToggleArray.parentElement,
                        spanToggleArray = parentElement.querySelector('span'),
                        ulToggleArray = parentElement.querySelector('ul'),
                        iToggleArray = spanToggleArray.querySelector('i');

                    var obj = this;

                    if (window.matchMedia('(max-width: 992px)').matches) {

                        if (obj == iToggleArray) {

                            if (ulToggleArray.classList.contains('hide')) {
                                ulToggleArray.classList.add('show');
                                ulToggleArray.classList.remove('hide');
                                iToggleArray.parentElement.parentElement.classList.add('active');

                            } else {
                                ulToggleArray.classList.add('hide');
                                ulToggleArray.classList.remove('show');
                                iToggleArray.parentElement.parentElement.classList.remove('active');
                            }

                        } else {
                            ulToggleArray.classList.add('hide');
                            ulToggleArray.classList.remove('show');
                            iToggleArray.parentElement.parentElement.classList.remove('active');
                        }
                    }
                }
            }, false);
        }
    }

    function dropDownHeight(dropDown) {
        var i = 0,
            dropDownHeights = dropDown.length;
        for (; i < dropDownHeights; i++) {
            var dropDownUl = dropDown[i];
            var dropDownHeight = dropDownUl.offsetHeight;

            if (window.matchMedia('(max-width: 992px)').matches) {
                if (dropDownHeight > 0) {
                    dropDownUl.setAttribute('style', 'margin-top:-' + dropDownHeight + 'px');
                }
            } else {
                dropDownUl.removeAttribute('style');
            }
        }
    }

    function hamburgerMenu(hamburger, menu, overlay) {
        hamburger.addEventListener('click', function() {
            if (menu.classList.contains('hide')) {
                menu.classList.remove('hide');
                menu.classList.add('show');
                overlay.classList.add('show');
                hamburger.classList.add('active');
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'hidden';

            } else {
                menu.classList.remove('show');
                menu.classList.add('hide');
                overlay.classList.remove('show');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
                document.documentElement.style.overflow = '';
            }
        }, false);
    }

    function getWindowHeight() {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        return windowHeight;
    }

    function setMobileHeight(header) {
        var mobileHeight = getWindowHeight() - header.offsetHeight;
        return mobileHeight;
    }

    function checkPosition(menu, header) {
        if (window.matchMedia('(max-width: 992px)').matches) {
            menu.style.height = setMobileHeight(header) + 'px';
            menu.style.top = (header.offsetHeight - 1) + 'px';
            menu.nextElementSibling.style.marginTop = (header.offsetHeight + 50) + 'px';

        } else {
            menu.nextElementSibling.style.marginTop = '';
            menu.removeAttribute('style');
            menu.classList.remove('show');
            menu.classList.add('hide');
        }
    }

    function close(hamburger, menu, overlay) {

        function closeMenu() {
            menu.classList.remove('show');
            menu.classList.add('hide');
            overlay.classList.remove('show');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        window.addEventListener('click', function(event) {
            if (event.target == overlay) {
                closeMenu();
            }
        }, false);

        overlay.addEventListener('touchstart', function(event) {
            closeMenu();
        }, false);
    }

    function touch(hamburger, menu, overlay) {
            startx = 0,
            dist = 0,
            gap = 30,
            max = 40;

        if(menu) {

            menu.addEventListener('touchstart', function(e) {
                var touchobj = e.changedTouches[0];
                startx = parseInt(touchobj.clientX);
            }, false);

            menu.addEventListener('touchmove', function(e) {
                var touchobj = e.changedTouches[0];
                var dist = parseInt(touchobj.clientX) - startx;

                if(menu.classList.contains('show') && dist < -max) {
                    menu.style.left = dist + 'px';
                }
            }, false);

            menu.addEventListener('touchend', function(e) {
                var touchobj = e.changedTouches[0];
                var dist = parseInt(touchobj.clientX) - startx;

                if(menu.classList.contains('show') && dist < -100) {
                    menu.style.left = '-' + menu.offsetWidth + 'px';
                    menu.classList.remove('show');
                    menu.classList.add('hide');
                    menu.style.left = '';
                    overlay.classList.remove('show');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    hamburger.classList.remove('active');

                } else {
                    menu.style.left = '';
                }
            }, false);
        
            window.addEventListener('touchstart', function(e) {
                var touchobj = e.changedTouches[0];
                startx = parseInt(touchobj.clientX);
            }, false);

            window.addEventListener('touchmove', function(e) {
                var touchobj = e.changedTouches[0];
                var dist = parseInt(touchobj.clientX) - startx;

                if(menu.classList.contains('hide') && dist > 20 && startx < gap && dist <= menu.offsetWidth) {
                    menu.style.left = ((menu.offsetWidth * -1) + dist) + 'px';

                    menu.style.WebkitTransition = 'all 0s';
                    menu.style.transition = 'all 0s';
                }
            }, false);

            window.addEventListener('touchend', function(e) {
                var touchobj = e.changedTouches[0];
                var dist = parseInt(touchobj.clientX) - startx;

                if(menu.classList.contains('hide') && dist > max && startx < gap) {
                    menu.style.left = '-' + menu.offsetWidth + 'px';

                    menu.style.WebkitTransition = '';
                    menu.style.transition = '';

                    menu.classList.add('show');
                    menu.classList.remove('hide');
                    menu.style.left = '';
                    overlay.classList.add('show');
                    hamburger.classList.add('active');

                    document.body.style.overflow = 'hidden';
                    document.documentElement.style.overflow = 'hidden';

                } else {
                    menu.style.left = '';
                    menu.style.WebkitTransition = '';
                    menu.style.transition = '';
                }
            }, false);
        }
    }

    function _DOMOverlay() {
        var newElement = document.createElement('div');
        newElement.setAttribute('id', 'overlay');
        document.body.insertBefore(newElement, document.body.firstChild);
    }

    function app() {
        _DOMOverlay();

        var hamburger = document.querySelector('header i.bars'),
            menu = document.querySelector('menu#menu'),
            header = document.querySelector('header'),
            dropDown = document.querySelectorAll('menu nav.nav ul li ul'),
            overlay = document.querySelector('#overlay');

        close(hamburger, menu, overlay);
        hamburgerMenu(hamburger, menu, overlay);
        desktopArrow(dropDown);
        mobileMenuToggle(dropDown);
        checkPosition(menu, header);
        mobileMenuHide(hamburger, dropDown, overlay);
        dropDownHeight(dropDown);
        touch(hamburger, menu, overlay);

        window.addEventListener('resize', function() {
            checkPosition(menu, header);
            mobileMenuHide(hamburger, dropDown, overlay);
            dropDownHeight(dropDown);
        });

        hamburger.addEventListener('click', function() {
            checkPosition(menu, header);
            dropDownHeight(dropDown);
        });
    }


    return {
        app: app
    }

}();

window.addEventListener('load', function() {
    menu.app();
}, false);