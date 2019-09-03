import { h } from '@stencil/core';
export class MyComponent {
    constructor() {
        // IMAGES ARRAY
        this.images = [
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db530b53956937.59480e2e544f5.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06198253956937.59480e2e53bc9.png',
            'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7a0cc153956937.59480e2e549d5.jpg'
        ];
        ///////
        //
        //  ICONS SOURCES PROPS
        //
        ///////
        this.previousIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(300.000000, 300.000000) rotate(-180.000000) translate(-300.000000, -300.000000) " cx="300" cy="300" r="299"></circle><g id="next" transform="translate(270.500000, 299.500000) rotate(-180.000000) translate(-270.500000, -299.500000) translate(169.000000, 98.000000)" stroke="%235D5D5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="41"><polyline id="arrow-next" transform="translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) " points="198.781251 0.984375 0.015626 199.75 202.816407 402.550781"></polyline></g></g></svg>';
        this.nextIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval"  fill-opacity="0.5" fill="%23FFFFFF" cx="300" cy="300" r="299"></circle><g id="next" transform="translate(228.000000, 99.000000)" stroke="%235D5D5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="41"><polyline id="arrow-next" transform="translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) " points="198.781251 0.984375 0.015626 199.75 202.816407 402.550781"></polyline></g></g></svg>';
        this.rotateIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 839 839" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="rotate" transform="translate(419.500000, 419.500000) scale(-1, 1) translate(-419.500000, -419.500000) "><circle id="Oval-Copy" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(419.500000, 419.500000) rotate(-180.000000) translate(-419.500000, -419.500000) " cx="419.5" cy="419.5" r="419.5"></circle><path d="M165.507668,216.714102 C226.591687,140.249711 319.232976,94.5 419.5,94.5 C598.992544,94.5 744.5,240.007456 744.5,419.5 C744.5,598.992544 598.992544,744.5 419.5,744.5 C408.178163,744.5 399,735.321837 399,724 C399,712.678163 408.178163,703.5 419.5,703.5 C576.348869,703.5 703.5,576.348869 703.5,419.5 C703.5,262.651131 576.348869,135.5 419.5,135.5 C337.235515,135.5 260.892773,170.706177 207.671441,230.312304 L278.452854,253.139956 L114.846529,419.975864 L79.5415975,188.989259 L165.507668,216.714102 Z" id="Oval" fill="%235D5D5D"></path></g></g></svg>';
        this.closeIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 691 691" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval-Copy-2" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(345.500000, 345.500000) rotate(-180.000000) translate(-345.500000, -345.500000) " cx="345.5" cy="345.5" r="344.5"></circle><path d="M160,159 L532.40625,531.40625" id="Path" stroke="%235D5D5D" stroke-width="41" stroke-linecap="round"></path><path d="M160,159 L532.40625,531.40625" id="Path" stroke="%235D5D5D" stroke-width="41" stroke-linecap="round" transform="translate(346.203125, 345.203125) rotate(-270.000000) translate(-346.203125, -345.203125) "></path></g></svg>';
        this.deleteIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Styleguide" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/supprimer_secondary" transform="translate(6.000000, 3.000000)"><circle id="Oval" fill-opacity="0.5" fill="%23FFFFFF" cx="5" cy="8" r="11"></circle><path d="M-0.368932039,2.93461194 L11.4397379,2.93283582 L11.4412524,14.4419627 C11.4415049,15.2790224 10.7600777,15.9639701 9.9274466,15.9639701 L1.14676699,15.9653657 C0.314009709,15.9654925 -0.367291262,15.2806716 -0.367543689,14.4437388 L-0.368932039,2.93461194 Z M9.35973786,14.4524925 L9.35797087,4.02857463 L8.29840777,4.02857463 L8.29992233,14.4526194 L9.35973786,14.4524925 Z M6.06682524,14.453 L6.06531068,4.02895522 L5.00562136,4.02908209 L5.00700971,14.4532537 L6.06682524,14.453 Z M2.77391262,14.4535075 L2.77265049,4.02946269 L1.71283495,4.02946269 L1.71434951,14.4536343 L2.77391262,14.4535075 Z" id="Combined-Shape" fill="%235D5D5D"></path><path d="M11.9782913,1.34485821 C11.9782913,0.962358209 11.7002427,0.649253731 11.3602233,0.649253731 L-0.381932039,0.650776119 C-0.721825243,0.650776119 -1,0.964007463 -1,1.34663433 L-0.999621359,2.35838806 L11.9785437,2.35661194 L11.9782913,1.34485821" id="Fill-8" fill="%235D5D5D"></path><path d="M4.02166019,-0.230052239 L7.01860194,-0.23030597 L7.01885437,0.319149254 L8.1278932,0.318895522 L8.12764078,-0.289552239 C8.12764078,-0.680298507 7.80970874,-1 7.42109709,-1 L3.61903883,-0.999365672 C3.23067961,-0.999365672 2.91262136,-0.679791045 2.91262136,-0.289044776 L2.91287379,0.319783582 L4.02191262,0.319656716 L4.02166019,-0.230052239" id="Fill-9" fill="%235D5D5D"></path></g></g></svg>';
        ///////
        //
        //  BOOLEAN PROP
        //
        ///////
        this.enableDelete = true;
        this.enableVisualDelete = true;
        this.enableRotate = true;
        this.enableBackdropClickClose = true;
        this.actions = [];
    }
    showImage(indexImage) {
        const el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        el.previousIconUrl = this.previousIconUrl;
        el.nextIconUrl = this.nextIconUrl;
        el.rotateIconUrl = this.rotateIconUrl;
        el.deleteIconUrl = this.deleteIconUrl;
        el.closeIconUrl = this.closeIconUrl;
        el.enableRotate = this.enableRotate;
        el.enableBackdropClickClose = this.enableBackdropClickClose;
        el.enableDelete = this.enableDelete;
        el.enableVisualDelete = this.enableVisualDelete;
        el.actions = this.actions;
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
            "defaultValue": "[\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db530b53956937.59480e2e544f5.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06198253956937.59480e2e53bc9.png',\n\t\t'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7a0cc153956937.59480e2e549d5.jpg'\n\t]"
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
            "defaultValue": "'data:image/svg+xml;utf8,<svg viewBox=\"0 0 600 600\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><circle id=\"Oval\" stroke=\"%235D5D5D\" fill-opacity=\"0.5\" fill=\"%23FFFFFF\" transform=\"translate(300.000000, 300.000000) rotate(-180.000000) translate(-300.000000, -300.000000) \" cx=\"300\" cy=\"300\" r=\"299\"></circle><g id=\"next\" transform=\"translate(270.500000, 299.500000) rotate(-180.000000) translate(-270.500000, -299.500000) translate(169.000000, 98.000000)\" stroke=\"%235D5D5D\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"41\"><polyline id=\"arrow-next\" transform=\"translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) \" points=\"198.781251 0.984375 0.015626 199.75 202.816407 402.550781\"></polyline></g></g></svg>'"
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
            "defaultValue": "'data:image/svg+xml;utf8,<svg viewBox=\"0 0 600 600\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><circle id=\"Oval\"  fill-opacity=\"0.5\" fill=\"%23FFFFFF\" cx=\"300\" cy=\"300\" r=\"299\"></circle><g id=\"next\" transform=\"translate(228.000000, 99.000000)\" stroke=\"%235D5D5D\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"41\"><polyline id=\"arrow-next\" transform=\"translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) \" points=\"198.781251 0.984375 0.015626 199.75 202.816407 402.550781\"></polyline></g></g></svg>'"
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
            "defaultValue": "'data:image/svg+xml;utf8,<svg viewBox=\"0 0 839 839\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"rotate\" transform=\"translate(419.500000, 419.500000) scale(-1, 1) translate(-419.500000, -419.500000) \"><circle id=\"Oval-Copy\" fill-opacity=\"0.5\" fill=\"%23FFFFFF\" transform=\"translate(419.500000, 419.500000) rotate(-180.000000) translate(-419.500000, -419.500000) \" cx=\"419.5\" cy=\"419.5\" r=\"419.5\"></circle><path d=\"M165.507668,216.714102 C226.591687,140.249711 319.232976,94.5 419.5,94.5 C598.992544,94.5 744.5,240.007456 744.5,419.5 C744.5,598.992544 598.992544,744.5 419.5,744.5 C408.178163,744.5 399,735.321837 399,724 C399,712.678163 408.178163,703.5 419.5,703.5 C576.348869,703.5 703.5,576.348869 703.5,419.5 C703.5,262.651131 576.348869,135.5 419.5,135.5 C337.235515,135.5 260.892773,170.706177 207.671441,230.312304 L278.452854,253.139956 L114.846529,419.975864 L79.5415975,188.989259 L165.507668,216.714102 Z\" id=\"Oval\" fill=\"%235D5D5D\"></path></g></g></svg>'"
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
            "defaultValue": "'data:image/svg+xml;utf8,<svg viewBox=\"0 0 691 691\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><circle id=\"Oval-Copy-2\" stroke=\"%235D5D5D\" fill-opacity=\"0.5\" fill=\"%23FFFFFF\" transform=\"translate(345.500000, 345.500000) rotate(-180.000000) translate(-345.500000, -345.500000) \" cx=\"345.5\" cy=\"345.5\" r=\"344.5\"></circle><path d=\"M160,159 L532.40625,531.40625\" id=\"Path\" stroke=\"%235D5D5D\" stroke-width=\"41\" stroke-linecap=\"round\"></path><path d=\"M160,159 L532.40625,531.40625\" id=\"Path\" stroke=\"%235D5D5D\" stroke-width=\"41\" stroke-linecap=\"round\" transform=\"translate(346.203125, 345.203125) rotate(-270.000000) translate(-346.203125, -345.203125) \"></path></g></svg>'"
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
            "reflect": false,
            "defaultValue": "'data:image/svg+xml;utf8,<svg viewBox=\"0 0 22 22\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"Styleguide\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"icon/supprimer_secondary\" transform=\"translate(6.000000, 3.000000)\"><circle id=\"Oval\" fill-opacity=\"0.5\" fill=\"%23FFFFFF\" cx=\"5\" cy=\"8\" r=\"11\"></circle><path d=\"M-0.368932039,2.93461194 L11.4397379,2.93283582 L11.4412524,14.4419627 C11.4415049,15.2790224 10.7600777,15.9639701 9.9274466,15.9639701 L1.14676699,15.9653657 C0.314009709,15.9654925 -0.367291262,15.2806716 -0.367543689,14.4437388 L-0.368932039,2.93461194 Z M9.35973786,14.4524925 L9.35797087,4.02857463 L8.29840777,4.02857463 L8.29992233,14.4526194 L9.35973786,14.4524925 Z M6.06682524,14.453 L6.06531068,4.02895522 L5.00562136,4.02908209 L5.00700971,14.4532537 L6.06682524,14.453 Z M2.77391262,14.4535075 L2.77265049,4.02946269 L1.71283495,4.02946269 L1.71434951,14.4536343 L2.77391262,14.4535075 Z\" id=\"Combined-Shape\" fill=\"%235D5D5D\"></path><path d=\"M11.9782913,1.34485821 C11.9782913,0.962358209 11.7002427,0.649253731 11.3602233,0.649253731 L-0.381932039,0.650776119 C-0.721825243,0.650776119 -1,0.964007463 -1,1.34663433 L-0.999621359,2.35838806 L11.9785437,2.35661194 L11.9782913,1.34485821\" id=\"Fill-8\" fill=\"%235D5D5D\"></path><path d=\"M4.02166019,-0.230052239 L7.01860194,-0.23030597 L7.01885437,0.319149254 L8.1278932,0.318895522 L8.12764078,-0.289552239 C8.12764078,-0.680298507 7.80970874,-1 7.42109709,-1 L3.61903883,-0.999365672 C3.23067961,-0.999365672 2.91262136,-0.679791045 2.91262136,-0.289044776 L2.91287379,0.319783582 L4.02191262,0.319656716 L4.02166019,-0.230052239\" id=\"Fill-9\" fill=\"%235D5D5D\"></path></g></g></svg>'"
        },
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
            "reflect": false,
            "defaultValue": "true"
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
            "reflect": false,
            "defaultValue": "true"
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
            "reflect": false,
            "defaultValue": "true"
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
            },
            "defaultValue": "[]"
        }
    }; }
}
