// Create a class for the element
class UciButton extends HTMLButtonElement {
    constructor() {
        // Always call super first in constructor
        super();
        const linkElem = document.createElement('link');
        this.className = 'btn btn-primary';
    }

    // connectedCallback() {
    //     this.addEventListener('click', e => {
    //         alert('jim');
    //     })
    // }
}

// Define the new element
customElements.define('uci-button', UciButton, {extends: 'button'});