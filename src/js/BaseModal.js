import RegularModalHtml from "./RegularModalHtml";
import DangerModalHtml from "./DangerModalHtml";

/**
 * divToImportInto: the div ID to hold the modal
 * modalSize: modal-xl, modal-lg, modal-sm, modal-fullscreen
 * modalStyle: normal, danger, warning
 */
export class BaseModal {
    constructor(divToImportInto, modalSize, modalStyle) {
        $(divToImportInto).html(DangerModalHtml);
        $('.modal-dialog').addClass(modalSize);
        $('.modal').addClass(modalStyle);
        this.baseModal = new bootstrap.Modal($(divToImportInto + ' .modal'));
        return this;
    }

    /**
     * Show the daggum modal
     */
    show() {
        $('.modal-title').html(this.title).css(
            {'color': this.headerTextColor, 'background-color': this.headerBackgroundColor}
        );

        $('.modal-body-text').html(this.modalBodyText);

        this.baseModal.show();
    }

    /**
     * Set the title of the modal
     * @param value
     * @returns {BaseModal}
     */
    setTitle(value) {
        this.title = value;
        return this;
    }

    /**
     * Change the text color of the header
     * @param value
     * @returns {BaseModal}
     */
    setHeaderTextColor(value) {
        this.headerTextColor = value;
        return this;
    }

    /**
     * Change the background color of the header
     * @param value
     * @returns {BaseModal}
     */
    setHeaderBackgroundColor(value) {
        this.headerBackgroundColor = value;
        return this;
    }

    /**
     * Change the modals text in the body
     * @param value
     * @returns {BaseModal}
     */
    setModalBodyText(value) {
        this.modalBodyText = value;
        return this;
    }
}