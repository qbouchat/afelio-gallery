import { r as registerInstance, h } from './chunk-acd22472.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // IMAGES ARRAY
        this.images = [];
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
        return (h("div", null, h("ul", { class: "afelio__gallery__pictures" }, this.images.map((image, index) => h("li", { class: "afelio__gallery__pictures__item" }, h("img", { src: image, onClick: () => this.showImage(index) }))))));
    }
    static get style() { return ".afelio__gallery__pictures {\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.afelio__gallery__pictures .afelio__gallery__pictures__item {\n  margin-right: 10px;\n}\n.afelio__gallery__pictures .afelio__gallery__pictures__item img {\n  display: block;\n  height: 100px;\n  width: auto;\n  cursor: pointer;\n}\n.afelio__gallery__pictures .afelio__gallery__pictures__item:last-child {\n  margin-right: 0;\n}"; }
}

export { MyComponent as afelio_gallery };
