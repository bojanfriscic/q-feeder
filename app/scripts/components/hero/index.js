export class Hero {
    constructor(element) {
        this.element = element;
        this.heroCta = this.element.querySelector('.js-hero-cta');
        this.offset = document.querySelector('.js-header').offsetHeight;
        this.target = document.querySelector('.js-about').offsetTop;

        console.dir(this.target);

        this.init();
    }

    init() {
        this.handleCta();
    }

    handleCta() {
        this.heroCta.addEventListener('click', () => {
            window.scrollTo({
                top: this.target - this.offset,
                behavior: 'smooth'
            })
        });
    }
}