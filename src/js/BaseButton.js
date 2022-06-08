import '@ungap/custom-elements';
import {StaticVariables} from './StaticVariables';

export class BaseButton extends HTMLButtonElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    setButtonClass(buttonType) {
        const userDefinedClass = ((this.getAttribute('class') !== null && this.getAttribute('class') !== '')
            ? ' ' + this.getAttribute('class')
            : '');
        switch (buttonType) {
            case StaticVariables.ButtonTypePrimary:
                this.className = StaticVariables.ButtonCssPrimary + userDefinedClass;
                break;
            case StaticVariables.ButtonTypeSecondary:
            case StaticVariables.ButtonTypeOutlinePrimary:
                this.className = StaticVariables.ButtonCssSecondary + userDefinedClass;
                break;
            case StaticVariables.ButtonTypePrimarySmall:
                this.className = StaticVariables.ButtonCssPrimarySmall + userDefinedClass;
                break;
            case StaticVariables.ButtonTypeSecondarySmall:
                this.className = StaticVariables.ButtonCssSecondarySmall + userDefinedClass;
                break;
            default:
                this.className = StaticVariables.ButtonTypePrimary + userDefinedClass;
        }
    }
}