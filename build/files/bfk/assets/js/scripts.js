/* jshint esversion: 6 */
document.addEventListener('DOMContentLoaded', function () {

    /*** Phone masks
    ****************************************/
    (function () {
        'use strict';

        let els = qq('.mask-phone');

        for (let item of els) {
            Inputmask({
                mask: "+7 (999) 999-99-99",
                placeholder: "_",
                clearMaskOnLostFocus: (containsClass(item, 'show-mask-placeholder')) ? false : true,
                clearIncomplete: true //проверка на заполненность 
            }).mask(item);
        }
    })();

    /*** Remote modals
    ****************************************/
    (function () {
        'use strict';

        let btn = qq('.show-acs-modal'),
            close = qq('.close-acs-modal'),
            showModalClass = 'slide-in-top',
            hideModalClass = 'slide-out-top';

        for (let item of btn) {
            item.addEventListener('click', changeModal);
        }

        function changeModal(e) {
            e.preventDefault();

            let toModal = this.getAttribute('data-target-acs-modal'),
                modal = q('#' + toModal);

            addClass(modal, 'acs-modal-on')

            rc(modal.childNodes[1], hideModalClass);
            addClass(modal.childNodes[1], showModalClass);
        }

        for (let item of close) {
            item.addEventListener('click', function () {
                let container = searchParent(this, 'acs-modal-dialog');
                rc(container, showModalClass)
                addClass(container, hideModalClass)
                setTimeout(hideModal, 100, container.parentNode)
            });
        }

        document.addEventListener('click', (e) => {
            let modal;

            if (e.target.className === 'acs-modal acs-modal-on') {
                modal = q('.acs-modal-on');
                rc(modal.childNodes[1], showModalClass);
                addClass(modal.childNodes[1], hideModalClass);
                setTimeout(hideModal, 100, modal);
            }
        });

        function hideModal(el) {
            rc(el, 'acs-modal-on')
        }
    })();

    /*** Select city
    ****************************************/
    (function () {
        let selectCity = q('.header-city__name');
        let status = false;

        // Event click for select City
        selectCity.addEventListener('click', toggleCityList);

        // Handler Event click for select City
        function toggleCityList(e) {
            toggleClass(this, 'open');
            status = (status === true) ? false : true;
        }

        // Hanler for click outside the area for select City
        // Hide selector
        document.addEventListener('click', e => {
            let target = e.target;

            if (searchParent(target, 'header-city__name') === null && status) {
                rc(selectCity, 'open')
                status = false;
            }
        })
    })();



    

    (function () {
        let btn = q('.mobile-burger'),
            nav = q('.mobile-nav');

        btn.addEventListener('click', () => {
            toggleClass(nav, 'open');
            toggleClass(btn, 'open');

            // fixed body for open nav
            if (containsClass(nav, 'open')) {
                document.body.style.position = 'fixed';
                document.body.style.top = `-${window.scrollY}px`;
            } else {
                let scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            }
        });
    })();

    let tab = document.querySelectorAll('.tab-header'),
    tabContent = document.querySelectorAll('.tab-content');

    tab.forEach(function(tab, i) {
    tab.addEventListener('click', function() {
        hideTab();
        this.classList.add('tab-header_show');
        tabContent[i].classList.add('tab-content_show');
    });
    });

    function hideTab() {
    tab.forEach((item) => {
        item.classList.remove('tab-header_show');
    });
    tabContent.forEach((item) => {
        item.classList.remove('tab-content_show');
    });
    }

    

    function q(el) {
        return document.querySelector(el);
    }

    function qq(els) {
        return document.querySelectorAll(els);
    }

    function containsClass(el, searchClass = 'active') {
        return el.classList.contains(searchClass);
    }

    function rc(el, removeClass = 'active') {
        el.classList.remove(removeClass);
    }

    function addClass(el, addClass = 'active') {
        el.classList.add(addClass);
    }

    function toggleClass(el, toggleClass = 'active') {
        return el.classList.toggle(toggleClass);
    }

    function searchParent(el, cls) {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el;
    }
});