import '@ungap/custom-elements';

export class BaseButton extends HTMLButtonElement {
    static ButtonTypePrimary = 'primary';
    static ButtonTypeSecondary = 'secondary';
    static ButtonTypeOutlinePrimary = 'outline-primary';

    static ButtonCssPrimary = 'btn btn-primary';
    static ButtonCssSecondary = 'btn btn-secondary';

    constructor() {
        // Always call super first in constructor
        super();
    }

    setButtonClass(buttonType) {
        const userDefinedClass = ((this.getAttribute('class') !== null && this.getAttribute('class') !== '')
            ? ' ' + this.getAttribute('class')
            : '');
        switch (buttonType) {
            case BaseButton.ButtonTypePrimary:
                this.className = BaseButton.ButtonCssPrimary + userDefinedClass;
                break;
            case BaseButton.ButtonTypeSecondary:
            case BaseButton.ButtonTypeOutlinePrimary:
                this.className = BaseButton.ButtonCssSecondary + userDefinedClass;
                break;
            default:
                this.className = BaseButton.ButtonTypePrimary + userDefinedClass;
        }
    }
}