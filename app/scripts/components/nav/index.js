import {
    modifier
} from '../header';

export class Nav {
    constructor(element) {
        this.element = element;
        this.body = document.querySelector('body');
        this.header = document.querySelector('.js-header');
        this.toggleButton = this.element.querySelector('.js-nav-toggle');
        this.navigationItems = this.element.querySelector('.js-nav-items');
        this.classNames = {
            navOpen: 'c-nav__items--open',
            headerNavOpen: 'c-header--dark',
            scrollLock: 'scroll-lock'
        };

        this.init();
    }

    init() {
        this.handleMenu();
    }

    handleMenu() {
        this.toggleButton.addEventListener('click', () => {
            const {
                scrollY,
                innerHeight
            } = window;

            if (scrollY < innerHeight * modifier) {
                this.header.classList.toggle(this.classNames.headerNavOpen);
            }

            this.body.classList.toggle(this.classNames.scrollLock);
            this.navigationItems.classList.toggle(this.classNames.navOpen);
        })
    }
}