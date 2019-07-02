import { h } from '@stencil/core';
export class MyComponent {
    constructor() {
        this.images = [];
    }
    showImage(indexImage) {
        const el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        document.body.appendChild(el);
    }
    render() {
        return (h("div", null,
            h("ul", { class: "gallery__pictures" }, this.images.map((image, index) => h("li", { class: "gallery__pictures__item" },
                h("img", { src: image, onClick: () => this.showImage(index) }))))));
    }
    static get is() { return "afelio-gallery"; }
    static get originalStyleUrls() { return {
        "$": ["afelio-gallery.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["afelio-gallery.css"]
    }; }
    static get properties() { return {
        "images": {
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
            },
            "defaultValue": "[]"
        }
    }; }
}
