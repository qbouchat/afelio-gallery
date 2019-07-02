'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-d6318124.js');

class MyComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.images = [];
    }
    showImage(indexImage) {
        const el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        document.body.appendChild(el);
    }
    render() {
        return (__chunk_1.h("div", null, __chunk_1.h("ul", { class: "gallery__pictures" }, this.images.map((image, index) => __chunk_1.h("li", { class: "gallery__pictures__item" }, __chunk_1.h("img", { src: image, onClick: () => this.showImage(index) }))))));
    }
    static get style() { return ".gallery__pictures{display:-ms-flexbox;display:flex;list-style:none;padding:0;margin:0}.gallery__pictures .gallery__pictures__item{margin-right:10px}.gallery__pictures .gallery__pictures__item img{display:block;height:100px;width:auto;cursor:pointer}.gallery__pictures .gallery__pictures__item:last-child{margin-right:0}"; }
}

class Image {
    constructor(url) {
        this.url = url;
        this.rotation = 0;
    }
}

class ModalComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
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
        return (__chunk_1.h("div", { class: "modal", onClick: (event) => this.handleClickModal(event) }, __chunk_1.h("div", { class: "header" }, __chunk_1.h("button", { class: "header__btn btn__rotate", onClick: this.rotate.bind(this) }), __chunk_1.h("button", { class: "header__btn btn__close", onClick: this.close.bind(this) })), __chunk_1.h("div", { class: "modal__content", ref: (el) => this.modalContent = el }, this.images.map((img, index) => {
            if (img === this.images[this.indexImageShowed]) {
                return (__chunk_1.h("img", { key: index, src: this.images[this.indexImageShowed].url, style: { 'transform': `rotate(${this.currentRotation}deg)` } }));
            }
        })), __chunk_1.h("button", { class: "btn__previous", onClick: this.previous.bind(this) }), __chunk_1.h("button", { class: "btn__next", onClick: this.next.bind(this) })));
    }
    get modal() { return __chunk_1.getElement(this); }
    static get style() { return ".modal{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.modal .header{position:fixed;top:10px;right:10px}.modal .header .header__btn{position:relative;width:30px;height:30px;margin-left:10px;padding:0;border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.modal .header .btn__rotate{background:#fff}.modal .header .btn__close:after,.modal .header .btn__close:before{content:\"\";display:block;position:absolute;top:50%;width:30px;height:6px;border-radius:3px;background:#fff;-webkit-transform-origin:center;transform-origin:center}.modal .header .btn__close:before{-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}.modal .header .btn__close:after{-webkit-transform:translateY(-50%) rotate(-45deg);transform:translateY(-50%) rotate(-45deg)}.modal .modal__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:10%;right:10%;bottom:10%;left:10%}.modal .modal__content img{max-width:100%;max-height:100%;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.modal .btn__next,.modal .btn__previous{position:fixed;top:50%;width:50px;height:50px;border:none;border-radius:50%;background:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.modal .btn__previous{left:20px}.modal .btn__next{right:20px}"; }
}

exports.afelio_gallery = MyComponent;
exports.modal_component = ModalComponent;
