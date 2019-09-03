import { r as registerInstance, h, c as getElement } from './chunk-acd22472.js';

class Image {
    constructor(url) {
        this.url = url;
        this.rotation = 0;
    }
}

class ModalComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        if (this.backropClickClose && (event.target === event.currentTarget || event.target === this.modalContent)) {
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
        return (h("div", { class: "afelio__gallery__modal", onClick: (event) => this.handleClickModal(event) }, h("div", { class: "afelio__gallery__header" }, this.enableRotate && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__rotate", style: { 'background-image': `url(${this.rotateIconUrl})` }, onClick: this.rotate.bind(this) }), h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__close", style: { 'background-image': `url(${this.closeIconUrl})` }, onClick: this.close.bind(this) })), h("div", { class: "afelio__gallery__modal__content", ref: (el) => this.modalContent = el }, this.images.map((img, index) => {
            if (img === this.images[this.indexImageShowed]) {
                return (h("img", { key: index, src: this.images[this.indexImageShowed].url, style: { 'transform': `rotate(${this.currentRotation}deg)` } }));
            }
        })), h("button", { class: "afelio__gallery__btn__previous", style: { 'background-image': `url(${this.previousIconUrl})` }, onClick: this.previous.bind(this) }), h("button", { class: "afelio__gallery__btn__next", style: { 'background-image': `url(${this.nextIconUrl})` }, onClick: this.next.bind(this) })));
    }
    get modal() { return getElement(this); }
    static get style() { return ".afelio__gallery__modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.afelio__gallery__modal .afelio__gallery__header {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n}\n.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__header__btn {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.afelio__gallery__modal .afelio__gallery__modal__content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: fixed;\n  top: 10%;\n  right: 10%;\n  bottom: 10%;\n  left: 10%;\n}\n.afelio__gallery__modal .afelio__gallery__modal__content img {\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n.afelio__gallery__modal .afelio__gallery__btn__rotate, .afelio__gallery__modal .afelio__gallery__btn__previous, .afelio__gallery__modal .afelio__gallery__btn__next, .afelio__gallery__modal .afelio__gallery__btn__close {\n  background-color: transparent;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n.afelio__gallery__modal .afelio__gallery__btn__previous, .afelio__gallery__modal .afelio__gallery__btn__next {\n  position: fixed;\n  top: 50%;\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 50%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.afelio__gallery__modal .afelio__gallery__btn__previous {\n  left: 20px;\n}\n.afelio__gallery__modal .afelio__gallery__btn__next {\n  right: 20px;\n}"; }
}

export { ModalComponent as modal_component };
