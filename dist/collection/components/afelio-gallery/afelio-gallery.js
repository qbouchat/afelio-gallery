import { h } from '@stencil/core';
export class MyComponent {
    constructor() {
        // IMAGES ARRAY
        this.images = [
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',
        ];
        ///////
        //
        //  ICONS SOURCES PROPS
        //
        ///////
        this.previousIconUrl = 'assets/images/SVG/previous.svg';
        this.nextIconUrl = 'assets/images/SVG/next.svg';
        this.rotateIconUrl = 'assets/images/SVG/rotate.svg';
        this.closeIconUrl = 'assets/images/SVG/close.svg';
        ///////
        //
        //  BOOLEAN PROP
        //
        ///////
        this.enableRotate = true;
        this.backropClickClose = true;
    }
    showImage(indexImage) {
        const el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        el.previousIconUrl = this.previousIconUrl;
        el.nextIconUrl = this.nextIconUrl;
        el.rotateIconUrl = this.rotateIconUrl;
        el.closeIconUrl = this.closeIconUrl;
        el.enableRotate = this.enableRotate;
        el.backropClickClose = this.backropClickClose;
        document.body.appendChild(el);
    }
    render() {
        return (h("div", null,
            h("ul", { class: "afelio__gallery__pictures" }, this.images.map((image, index) => h("li", { class: "afelio__gallery__pictures__item" },
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
            "defaultValue": "[\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',\n\t]"
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
            "reflect": false,
            "defaultValue": "true"
        },
        "backropClickClose": {
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
            "attribute": "backrop-click-close",
            "reflect": false,
            "defaultValue": "true"
        }
    }; }
}
