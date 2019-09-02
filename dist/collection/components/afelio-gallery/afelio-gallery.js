import { h } from '@stencil/core';
export class MyComponent {
    constructor() {
        this.images = [
            'http://poizo.eu/assets/SVG/blorb.svg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06198253956937.59480e2e53bc9.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/84ab7153956937.59480e2e54f29.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/52eab553956937.59480e2e54187.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db530b53956937.59480e2e544f5.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ec53a253956937.59480e2e532b6.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/387b3953956937.59480e2e553fe.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7a0cc153956937.59480e2e549d5.jpg',
        ];
        this.previousIconUrl = 'assets/images/SVG/previous.svg';
        this.nextIconUrl = 'assets/images/SVG/next.svg';
        this.rotateIconUrl = 'assets/images/SVG/rotate.svg';
        this.closeIconUrl = 'assets/images/SVG/close.svg';
    }
    showImage(indexImage) {
        const el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        el.previousIconUrl = this.previousIconUrl;
        el.nextIconUrl = this.nextIconUrl;
        el.rotateIconUrl = this.rotateIconUrl;
        el.closeIconUrl = this.closeIconUrl;
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
            "defaultValue": "[\n\t\t'http://poizo.eu/assets/SVG/blorb.svg',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06198253956937.59480e2e53bc9.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/84ab7153956937.59480e2e54f29.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/52eab553956937.59480e2e54187.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db530b53956937.59480e2e544f5.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ec53a253956937.59480e2e532b6.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/387b3953956937.59480e2e553fe.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7a0cc153956937.59480e2e549d5.jpg',\n\t\t]"
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
            "reflect": false,
            "defaultValue": "'assets/images/SVG/previous.svg'"
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
            "reflect": false,
            "defaultValue": "'assets/images/SVG/next.svg'"
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
            "reflect": false,
            "defaultValue": "'assets/images/SVG/rotate.svg'"
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
            "reflect": false,
            "defaultValue": "'assets/images/SVG/close.svg'"
        }
    }; }
}
