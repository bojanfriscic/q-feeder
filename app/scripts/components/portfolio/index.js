export class Portfolio {
    constructor(element) {
        this.element = element;
        this.tabButtons = this.element.querySelectorAll('.js-portfolio-button');
        this.activeTabLabel = this.element.querySelector('.js-active-tab-label');
        this.classNames = {
            activeButton: 'c-portfolio__tab-button--active'
        };

        this.init();
    }

    init() {
        this.selectTab(this.tabButtons[0]);
        this.bindEventListeners();
    }

    bindEventListeners() {
        if (this.tabButtons.length > 0) {
            this.tabButtons.forEach(tabButton => {
                tabButton.addEventListener('click', () => {
                    this.resetActiveTab();
                    this.selectTab(tabButton);
                })
            });
        }
    }

    selectTab(tabButton) {
        const tabLabel = tabButton.innerText.toLowerCase();
        const activeText = `${tabLabel.charAt(0).toUpperCase()}${tabLabel.slice(1)}`

        tabButton.classList.add(this.classNames.activeButton);
        this.activeTabLabel.innerText = activeText;
    }

    resetActiveTab() {
        this.tabButtons.forEach(tabButton => {
            tabButton.classList.remove(this.classNames.activeButton);
        });
    }
}