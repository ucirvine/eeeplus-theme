import {BaseModal} from './BaseModal';

export class UciRegularModal extends BaseModal {
    constructor() {
        super();
    }
}

// Define the new element
customElements.define('uci-regular-modal', UciRegularModal, {extends: 'div'});