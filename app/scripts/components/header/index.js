import {
    debounce
} from '../../utils/debounce';

export const modifier = 0.4;

export class Header {
    constructor(element) {
        this.element = element;
        this.classNames = {
            headerDark: 'c-header--dark'
        };

        this.init();
    }

    init() {
        this.bindEventListeners();
    }

    bindEventListeners() {
        const efficient = debounce(() => {
            this.toggleHeaderStyle(window.scrollY);
        }, 100);

        window.addEventListener('scroll', efficient);
    }

    toggleHeaderStyle(scrollY) {
        if (scrollY > window.innerHeight * modifier) {
            this.element.classList.add(this.classNames.headerDark);
        } else if (scrollY < window.innerHeight * modifier) {
            this.element.classList.remove(this.classNames.headerDark);
        }
    }
}