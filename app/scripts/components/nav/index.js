export class Nav {
    constructor(element) {
        this.element = element;
        this.header = document.querySelector('.js-header');
        this.toggleButton = this.element.querySelector('.js-nav-toggle');
        this.navigationItems = this.element.querySelector('.js-nav-items');
        this.classNames = {
            navOpen: 'c-nav__items--open',
            headerNavOpen: 'c-header--nav-open'
        };

        this.init();
    }

    init() {
        this.handleMenu();
    }

    handleMenu() {
        this.toggleButton.addEventListener('click', () => {
            this.navigationItems.classList.toggle(this.classNames.navOpen);
            this.header.classList.toggle(this.classNames.headerNavOpen);
        })
    }
}