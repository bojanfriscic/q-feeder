class Builder {
    constructor(components) {
        this.components = components;
        this.init();
    }

    init() {
        if (this.components.length > 0) {
            document.onreadystatechange = () => {
                if (document.readyState === 'interactive') {
                    this.components.forEach(component => {
                        const elementList = document.querySelectorAll(component.selector);

                        if (elementList.length === 1) {
                            new component.classRef(elementList[0]);
                        } else if (elementList.length > 1) {
                            elementList.forEach(element => {
                                new component.classRef(element);
                            });
                        }
                    });
                }
            }
        }
    }
}

export const Website = { Builder };