// Create a class for the element
import {BaseButton} from "./BaseButton";

export class BaseModal extends HTMLDivElement {
    modalDialog = document.createElement('div');
    modalContent = document.createElement('div');
    modalHeader = document.createElement('div');
    modalTitle = document.createElement('h5');
    modalCloseButton = document.createElement('button');
    modalBody = document.createElement('div');
    modalBodyText = document.createElement('p');
    modalBodyInput = document.createElement('input');
    modalFooter = document.createElement('div');
    modalFooterCloseButton = document.createElement('button');
    modalFooterSaveButton = document.createElement('button');

    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        // const shadow = this.attachShadow({mode: 'open'});

        this.className = 'modal';
        this.tabIndex = -1;

        this.modalDialog.className = 'modal-dialog';

        this.appendChild(this.modalDialog);

        this.modalContent.className = 'modal-content';

        this.modalDialog.appendChild(this.modalContent);

        this.modalHeader.className = 'modal-header';

        this.modalContent.appendChild(this.modalHeader);

        this.modalTitle.className = 'modal-title';

        this.modalHeader.appendChild(this.modalTitle);

        this.modalCloseButton.className = 'btn-close';
        this.modalCloseButton.type = 'button';
        this.modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
        this.modalCloseButton.setAttribute('aria-label', 'Close');

        this.modalHeader.appendChild(this.modalCloseButton);

        this.modalBody.className = 'modal-body';

        this.modalContent.appendChild(this.modalBody);

        this.modalBodyText.className = 'modal-body-text';

        this.modalBody.appendChild(this.modalBodyText);

        this.modalBodyInput.className = 'form-control';
        this.modalBodyInput.id = 'uci-modal-input';

        this.modalBody.appendChild(this.modalBodyInput);

        this.modalFooter.className = 'modal-footer';

        this.modalContent.appendChild(this.modalFooter);

        this.modalFooterCloseButton.className = 'btn btn-secondary';
        this.modalFooterCloseButton.setAttribute('data-bs-dismiss', 'modal');
        this.modalFooterCloseButton.textContent = 'Close';

        this.modalFooterSaveButton.className = 'btn btn-primary';
        this.modalFooterSaveButton.textContent = 'Save';

        this.modalFooter.appendChild(this.modalFooterCloseButton);
        this.modalFooter.appendChild(this.modalFooterSaveButton);

        // Take attribute content and put it inside the info span
        // const text = this.getAttribute('data-text');
        // info.textContent = text;
    }
    /**
     * This is called when the item appears in the DOM (pretty sure)
     */
    connectedCallback() {
        this.modalBodyText.textContent = this.getAttribute('data-body-text');
    }
}

// Define the new element
customElements.define('base-modal', BaseModal, {extends: 'div'});