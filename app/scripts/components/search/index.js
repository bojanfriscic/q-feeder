export class Search {
    constructor(element) {
        this.element = element;
        this.body = document.querySelector('body');
        this.searchToggle = this.element.querySelector('.js-search-toggle');
        this.searchBox = this.element.querySelector('.js-search-box');
        this.searchBackdrop = this.element.querySelector('.js-search-backdrop');
        this.searchClose = this.element.querySelector('.js-search-close');
        this.classNames = {
            backdropVisible: 'c-search__backdrop--visible',
            scrollLock: 'scroll-lock'
        };

        this.init();
    }

    init() {
        this.bindEventListeners();
    }

    handleSearchOpen() {
        this.searchBackdrop.classList.add(this.classNames.backdropVisible);
        this.body.classList.add(this.classNames.scrollLock);
    }

    handleSearchClose() {
        this.searchBackdrop.classList.remove(this.classNames.backdropVisible);
        this.body.classList.remove(this.classNames.scrollLock);
    }

    bindEventListeners() {
        this.searchToggle.addEventListener('click', () => {
            this.handleSearchOpen();
        });

        this.searchClose.addEventListener('click', () => {
            this.handleSearchClose();
        });
    }
}