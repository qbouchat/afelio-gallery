import { h } from '@stencil/core';
import { Image } from '../../models/images.model';
export class ModalComponent {
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
        if (event.target === event.currentTarget || event.target === this.modalContent) {
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
    render() {
        return (h("div", { class: "modal", onClick: (event) => this.handleClickModal(event) },
            h("div", { class: "header" },
                h("button", { class: "header__btn btn__rotate", onClick: this.rotate.bind(this) }),
                h("button", { class: "header__btn btn__close", onClick: this.close.bind(this) })),
            h("div", { class: "modal__content", ref: (el) => this.modalContent = el }, this.images.map((img, index) => {
                if (img === this.images[this.indexImageShowed]) {
                    return (h("img", { key: index, src: this.images[this.indexImageShowed].url, style: { 'transform': `rotate(${this.currentRotation}deg)` } }));
                }
            })),
            h("button", { class: "btn__previous", onClick: this.previous.bind(this) }),
            h("button", { class: "btn__next", onClick: this.next.bind(this) })));
    }
    static get is() { return "modal-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["modal-component.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal-component.css"]
    }; }
    static get properties() { return {
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
        }
    }; }
    static get states() { return {
        "currentRotation": {}
    }; }
    static get elementRef() { return "modal"; }
}
