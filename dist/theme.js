RegularModalHtml=require("./RegularModalHtml"),DangerModalHtml=require("./DangerModalHtml");class BaseModal{constructor(t,o,a){return $(t).html(DangerModalHtml),$(".modal-dialog").addClass(o),$(".modal").addClass(a),this.baseModal=new bootstrap.Modal($(t+" .modal")),this}show(){$(".modal-title").html(this.title).css({color:this.headerTextColor,"background-color":this.headerBackgroundColor}),$(".modal-body-text").html(this.modalBodyText),this.baseModal.show()}setTitle(t){return this.title=t,this}setHeaderTextColor(t){return this.headerTextColor=t,this}setHeaderBackgroundColor(t){return this.headerBackgroundColor=t,this}setModalBodyText(t){return this.modalBodyText=t,this}}const DangerModalHtml='<div class="modal bg-dark" tabindex="-1">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <h5 class="modal-title">Modal title</h5>\n                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n                <p class="modal-body-text">Modal body text goes here.</p>\n                <input id="modal-input" class="form-control">            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n                <button type="button" class="btn btn-primary">Save changes</button>\n            </div>\n        </div>\n    </div>\n</div>';export default DangerModalHtml;const RegularModalHtml='<div class="modal" tabindex="-1">\n    <div class="modal-dialog">\n        <div class="modal-content">\n            <div class="modal-header">\n                <h5 class="modal-title">Modal title</h5>\n                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n            </div>\n            <div class="modal-body">\n                <p class="modal-body-text">Modal body text goes here.</p>\n                <input id="modal-input" class="form-control">            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n                <button type="button" class="btn btn-primary">Save changes</button>\n            </div>\n        </div>\n    </div>\n</div>';export default RegularModalHtml;class UciButton extends HTMLButtonElement{constructor(){super();document.createElement("link");this.className="btn btn-primary"}}customElements.define("uci-button",UciButton,{extends:"button"});export{BaseModal};