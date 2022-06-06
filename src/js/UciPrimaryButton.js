import {BaseButton} from './BaseButton';

/**
 * Create a class for the element
 * This is a UciPrimaryButton
 */
class UciPrimaryButton extends BaseButton {
    constructor() {
        // Always call super first in constructor
        super();

        this.addEventListener('click', e => {
            alert('test');
        })
    }

    /**
     * This is called when the item appears in the DOM (pretty sure)
     */
    connectedCallback() {
        this.setButtonClass(BaseButton.ButtonTypePrimary);
    }

    /**
     * This is called when values change, but it can spin into a loop
     * so be careful. Also, it will only process the items in the observedAttributes
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
    }

    /**
     * The observed attributes will be recognized by the attributeChangedCallback
     * @returns {string[]}
     */
    static get observedAttributes() {
        return ['class', 'open'];
    }

}

/**
 * Define the new element
 * When placing on a page, you will define as <button is="uci-button"></button>
 */
customElements.define('uci-primary-button', UciPrimaryButton, {extends: 'button'});