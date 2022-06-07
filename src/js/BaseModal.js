// Create a class for the element
class BaseModal extends HTMLDivElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        // const shadow = this.attachShadow({mode: 'open'});

        this.className = 'modal';
        this.id = 'custom-modal';
        this.tabIndex = -1;

        const modalDialog = document.createElement('div');
        modalDialog.setAttribute('class', 'modal-dialog');

        this.appendChild(modalDialog);

        const modalContent = document.createElement('div');
        modalContent.setAttribute('class', 'modal-content');

        modalDialog.appendChild(modalContent);

        const modalHeader = document.createElement('div');
        modalHeader.setAttribute('class', 'modal-header');

        modalContent.appendChild(modalHeader);

        const modalTitle = document.createElement('h5');
        modalTitle.setAttribute('class', 'modal-title');
        modalTitle.innerHTML = 'Modal title';

        modalHeader.appendChild(modalTitle);

        const modalCloseButton = document.createElement('button');
        modalCloseButton.className = 'btn-close';
        modalCloseButton.type = 'button';
        modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
        modalCloseButton.setAttribute('aria-label', 'Close');

        modalHeader.appendChild(modalCloseButton);

        const modalBody = document.createElement('div');
        modalBody.setAttribute('class', 'modal-body');

        modalContent.appendChild(modalBody);

        const modalBodyText = document.createElement('p');
        modalBodyText.setAttribute('class', 'modal-body-text');
        modalBodyText.innerHTML = 'lksdjflkjsdf';

        modalBody.appendChild(modalBodyText);

        const modalBodyInput = document.createElement('input');
        modalBodyInput.className = 'form-control';
        modalBodyInput.id = 'uci-modal-input';

        modalBody.appendChild(modalBodyInput);

        const modalFooter = document.createElement('div');
        modalFooter.className = 'modal-footer';

        modalContent.appendChild(modalFooter);

        const modalFooterCloseButton = document.createElement('button');
        modalFooterCloseButton.className = 'btn btn-secondary';
        modalFooterCloseButton.setAttribute('data-bs-dismiss', 'modal');
        modalFooterCloseButton.textContent = 'Close';

        const modalFooterSaveButton = document.createElement('button');
        modalFooterSaveButton.className = 'btn btn-primary';
        modalFooterSaveButton.textContent = 'Save';

        modalFooter.appendChild(modalFooterCloseButton);
        modalFooter.appendChild(modalFooterSaveButton);

        // Take attribute content and put it inside the info span
        // const text = this.getAttribute('data-text');
        // info.textContent = text;

    }
}

// Define the new element
customElements.define('base-modal', BaseModal, {extends: 'div'});