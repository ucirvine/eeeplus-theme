require('@ungap/custom-elements');
import '@ungap/custom-elements';
import {UciPrimaryButton} from "./UciPrimaryButton";
import {UciSecondaryButton} from "./UciSecondaryButton";
import {StaticVariables} from './StaticVariables';

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
    modalFooterCloseButton = new UciSecondaryButton();
    modalFooterSaveButton = new UciPrimaryButton();

    constructor() {
        // Always call super first in constructor
        super();

        // the modal div which is this
        this.className = 'modal';
        this.tabIndex = -1;

        // the modal-dialog layer
        this.modalDialog.className = 'modal-dialog';
        this.appendChild(this.modalDialog);

        // the modal-content layer
        this.modalContent.className = 'modal-content';
        this.modalDialog.appendChild(this.modalContent);

        // the modal-header
        this.modalHeader.className = 'modal-header';
        this.modalContent.appendChild(this.modalHeader);

        // the modal-title
        this.modalTitle.className = 'modal-title';
        this.modalHeader.appendChild(this.modalTitle);

        // the modal close button top right X
        this.modalCloseButton.className = 'btn-close';
        this.modalCloseButton.type = 'button';
        this.modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
        this.modalCloseButton.setAttribute('aria-label', 'Close');
        this.modalHeader.appendChild(this.modalCloseButton);

        // the modal-body
        this.modalBody.className = 'modal-body';
        this.modalContent.appendChild(this.modalBody);

        // the modal-body-text
        // the connected call back checks for data-body-text to populate text info
        this.modalBodyText.className = 'modal-body-text';
        this.modalBody.appendChild(this.modalBodyText);

        // the modal-input with the id uci-modal-input for easy javascript access
        this.modalBodyInput.className = 'form-control';
        this.modalBodyInput.id = 'uci-modal-input';
        this.modalBodyInput.hidden = true;
        this.modalBody.appendChild(this.modalBodyInput);

        // the modal-footer
        this.modalFooter.className = 'modal-footer';
        this.modalContent.appendChild(this.modalFooter);

        // the modal-footer-button to close modal
        this.modalFooterCloseButton.className = 'btn btn-secondary';
        this.modalFooterCloseButton.setAttribute('data-bs-dismiss', 'modal');
        this.modalFooterCloseButton.textContent = 'Close';

        // the modal-footer-save button to execute stuff
        // uci-modal-footer-save-button is the id for javascript access
        this.modalFooterSaveButton.className = 'btn btn-primary';
        this.modalFooterSaveButton.textContent = 'Save';
        this.modalFooterSaveButton.id = 'uci-modal-footer-save-button'

        this.modalFooter.appendChild(this.modalFooterCloseButton);
        this.modalFooter.appendChild(this.modalFooterSaveButton);
    }
    /**
     * This is called when the item appears in the DOM (pretty sure)
     */
    connectedCallback() {
        this.modalBodyText.textContent = this.getAttribute('data-modal-body-text');
        this.modalTitle.textContent = this.getAttribute('data-modal-title');
        const showInput = this.getAttribute('data-modal-show-input');
        if (showInput === "true") {
            this.modalBodyInput.hidden = false;
        } else {
            this.modalBodyInput.hidden = true;
        }
    }
}

/**
 * Define the new element
 * When placing on a page, you will define as <button is="uci-button"></button>
 */
customElements.define('base-modal', BaseModal, {extends: 'div'});