import { r as registerInstance, h, g as getElement } from './chunk-322a657b.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.images = [];
    }
    MyComponent.prototype.showImage = function (indexImage) {
        var el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        document.body.appendChild(el);
    };
    MyComponent.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("ul", { class: "gallery__pictures" }, this.images.map(function (image, index) { return h("li", { class: "gallery__pictures__item" }, h("img", { src: image, onClick: function () { return _this.showImage(index); } })); }))));
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ".gallery__pictures{display:-ms-flexbox;display:flex;list-style:none;padding:0;margin:0}.gallery__pictures .gallery__pictures__item{margin-right:10px}.gallery__pictures .gallery__pictures__item img{display:block;height:100px;width:auto;cursor:pointer}.gallery__pictures .gallery__pictures__item:last-child{margin-right:0}"; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
var Image = /** @class */ (function () {
    function Image(url) {
        this.url = url;
        this.rotation = 0;
    }
    return Image;
}());
var ModalComponent = /** @class */ (function () {
    function ModalComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    ModalComponent.prototype.componentWillLoad = function () {
        this.images = this.imagesLink.map(function (img) { return new Image(img); });
    };
    ModalComponent.prototype.previous = function () {
        var newIndex = this.indexImageShowed - 1;
        if (newIndex < 0) {
            newIndex = this.images.length - 1;
        }
        this.indexImageShowed = newIndex;
        this.currentRotation = this.images[this.indexImageShowed].rotation;
    };
    ModalComponent.prototype.next = function () {
        var newIndex = this.indexImageShowed + 1;
        if (newIndex >= this.images.length) {
            newIndex = 0;
        }
        this.indexImageShowed = newIndex;
        this.currentRotation = this.images[this.indexImageShowed].rotation;
    };
    ModalComponent.prototype.handleClickModal = function (event) {
        if (event.target === event.currentTarget || event.target === this.modalContent) {
            this.close();
        }
    };
    ModalComponent.prototype.close = function () {
        this.modal.remove();
    };
    ModalComponent.prototype.rotate = function () {
        var rotation = this.images[this.indexImageShowed].rotation + 90;
        this.images[this.indexImageShowed].rotation = rotation;
        this.currentRotation = rotation;
    };
    ModalComponent.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "modal", onClick: function (event) { return _this.handleClickModal(event); } }, h("div", { class: "header" }, h("button", { class: "header__btn btn__rotate", onClick: this.rotate.bind(this) }), h("button", { class: "header__btn btn__close", onClick: this.close.bind(this) })), h("div", { class: "modal__content", ref: function (el) { return _this.modalContent = el; } }, this.images.map(function (img, index) {
            if (img === _this.images[_this.indexImageShowed]) {
                return (h("img", { key: index, src: _this.images[_this.indexImageShowed].url, style: { 'transform': "rotate(" + _this.currentRotation + "deg)" } }));
            }
        })), h("button", { class: "btn__previous", onClick: this.previous.bind(this) }), h("button", { class: "btn__next", onClick: this.next.bind(this) })));
    };
    Object.defineProperty(ModalComponent.prototype, "modal", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent, "style", {
        get: function () { return ".modal{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.modal .header{position:fixed;top:10px;right:10px}.modal .header .header__btn{position:relative;width:30px;height:30px;margin-left:10px;padding:0;border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.modal .header .btn__rotate{background:#fff}.modal .header .btn__close:after,.modal .header .btn__close:before{content:\"\";display:block;position:absolute;top:50%;width:30px;height:6px;border-radius:3px;background:#fff;-webkit-transform-origin:center;transform-origin:center}.modal .header .btn__close:before{-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}.modal .header .btn__close:after{-webkit-transform:translateY(-50%) rotate(-45deg);transform:translateY(-50%) rotate(-45deg)}.modal .modal__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:10%;right:10%;bottom:10%;left:10%}.modal .modal__content img{max-width:100%;max-height:100%;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.modal .btn__next,.modal .btn__previous{position:fixed;top:50%;width:50px;height:50px;border:none;border-radius:50%;background:#fff;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.modal .btn__previous{left:20px}.modal .btn__next{right:20px}"; },
        enumerable: true,
        configurable: true
    });
    return ModalComponent;
}());
export { MyComponent as afelio_gallery, ModalComponent as modal_component };
