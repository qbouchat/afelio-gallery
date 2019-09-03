import { h } from '@stencil/core';
import { Image } from '../../models/images.model';
export class ModalComponent {
    constructor() {
        this.showActions = false;
    }
    changeImages(images, oldImages) {
        console.log(images, oldImages);
        this.currentRotation = 0;
        this.images = images.map((img) => new Image(img));
    }
    componentWillLoad() {
        this.images = this.imagesLink.map((img) => new Image(img));
    }
    previous() {
        let newIndex = this.indexImageShowed - 1;
        if (newIndex < 0) {
            newIndex = this.images.length - 1;
        }
        this.indexImageShowed = newIndex;
        this.currentRotation = this.images[this.indexImageShowed].rotation;
    }
    next() {
        let newIndex = this.indexImageShowed + 1;
        if (newIndex >= this.images.length) {
            newIndex = 0;
        }
        this.indexImageShowed = newIndex;
        this.currentRotation = this.images[this.indexImageShowed].rotation;
    }
    handleClickModal(event) {
        if (this.enableBackdropClickClose && (event.target === event.currentTarget || event.target === this.modalContent)) {
            this.close();
        }
    }
    close() {
        this.modal.remove();
    }
    rotate() {
        let rotation = this.images[this.indexImageShowed].rotation + 90;
        this.images[this.indexImageShowed].rotation = rotation;
        this.currentRotation = rotation;
    }
    delete() {
        const urlToRemove = this.imagesLink.find(link => link === this.images[this.indexImageShowed].url);
        const indexToRemove = this.imagesLink.findIndex(link => link === urlToRemove);
        const imageToDelete = { index: indexToRemove, imageUrl: urlToRemove };
        if (this.enableVisualDelete) {
            if (this.images.length > 1) {
                this.images.splice(this.indexImageShowed, 1);
                this.indexImageShowed = this.indexImageShowed === this.images.length ? this.indexImageShowed - 1 : this.indexImageShowed;
                this.currentRotation = this.images[this.indexImageShowed].rotation;
                this.images = [...this.images];
            }
            else {
                this.close();
            }
        }
        this.deleteImage.emit(imageToDelete);
    }
    generateActionsListButton() {
        return (h("div", { class: "afelio__gallery__actions__list-container" },
            h("button", { class: "afelio__gallery__more__actions", onClick: this.showActionsList.bind(this) }),
            this.showActions &&
                h("ul", { class: "afelio__gallery__more__actions" }, this.actions.map((action) => {
                    return (h("li", null, action.name));
                }))));
    }
    showActionsList() {
        this.showActions = !this.showActions;
    }
    render() {
        return (h("div", { class: "afelio__gallery__modal", onClick: (event) => this.handleClickModal(event) },
            h("div", { class: "afelio__gallery__header" },
                this.enableRotate && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__rotate", style: { 'background-image': `url('${this.rotateIconUrl}')` }, onClick: this.rotate.bind(this) }),
                this.enableDelete && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__delete", style: { 'background-image': `url('${this.deleteIconUrl}')` }, onClick: this.delete.bind(this) }),
                h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__close", style: { 'background-image': `url('${this.closeIconUrl}')` }, onClick: this.close.bind(this) }),
                this.actions.length > 0 && this.generateActionsListButton()),
            h("div", { class: "afelio__gallery__modal__content", ref: (el) => this.modalContent = el }, this.images.map((img, index) => {
                if (img === this.images[this.indexImageShowed]) {
                    return (h("img", { key: index, src: this.images[this.indexImageShowed].url, style: { 'transform': `rotate(${this.currentRotation}deg)` } }));
                }
            })),
            this.indexImageShowed !== 0 && h("button", { class: "afelio__gallery__btn__previous", style: { 'background-image': `url('${this.previousIconUrl}')` }, onClick: this.previous.bind(this) }),
            this.indexImageShowed !== this.images.length - 1 && h("button", { class: "afelio__gallery__btn__next", style: { 'background-image': `url('${this.nextIconUrl}')` }, onClick: this.next.bind(this) })));
    }
    static get is() { return "modal-component"; }
    static get originalStyleUrls() { return {
        "$": ["modal-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal-component.css"]
    }; }
    static get properties() { return {
        "enableDelete": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "enable-delete",
            "reflect": false
        },
        "enableVisualDelete": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "enable-visual-delete",
            "reflect": false
        },
        "enableRotate": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "enable-rotate",
            "reflect": false
        },
        "enableBackdropClickClose": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "enable-backdrop-click-close",
            "reflect": false
        },
        "previousIconUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "previous-icon-url",
            "reflect": false
        },
        "nextIconUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "next-icon-url",
            "reflect": false
        },
        "rotateIconUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rotate-icon-url",
            "reflect": false
        },
        "closeIconUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "close-icon-url",
            "reflect": false
        },
        "deleteIconUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "delete-icon-url",
            "reflect": false
        },
        "imagesLink": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "string[]",
                "resolved": "string[]",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "indexImageShowed": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "index-image-showed",
            "reflect": false
        },
        "actions": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Action[]",
                "resolved": "Action[]",
                "references": {
                    "Action": {
                        "location": "import",
                        "path": "../../models/action.model"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "currentRotation": {},
        "showActions": {},
        "images": {}
    }; }
    static get events() { return [{
            "method": "deleteImage",
            "name": "deleteImage",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "modal"; }
    static get watchers() { return [{
            "propName": "imagesLink",
            "methodName": "changeImages"
        }]; }
}
