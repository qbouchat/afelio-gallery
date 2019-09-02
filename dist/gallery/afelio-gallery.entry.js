import { r as registerInstance, h } from './chunk-d85ca9fa.js';

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", null, h("ul", { class: "gallery__pictures" }, this.images.map((image, index) => h("li", { class: "gallery__pictures__item" }, h("img", { src: image, onClick: () => this.showImage(index) }))))));
    }
    static get style() { return ".gallery__pictures {\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.gallery__pictures .gallery__pictures__item {\n  margin-right: 10px;\n}\n.gallery__pictures .gallery__pictures__item img {\n  display: block;\n  height: 100px;\n  width: auto;\n  cursor: pointer;\n}\n.gallery__pictures .gallery__pictures__item:last-child {\n  margin-right: 0;\n}"; }
}

export { MyComponent as afelio_gallery };
