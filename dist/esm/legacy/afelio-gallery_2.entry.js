import { r as registerInstance, h, g as getElement } from './chunk-0119a5ef.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        // IMAGES ARRAY
        this.images = [];
        ///////
        //
        //  ICONS SOURCES PROPS
        //
        ///////
        this.previousIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(300.000000, 300.000000) rotate(-180.000000) translate(-300.000000, -300.000000) " cx="300" cy="300" r="299"></circle><g id="next" transform="translate(270.500000, 299.500000) rotate(-180.000000) translate(-270.500000, -299.500000) translate(169.000000, 98.000000)" stroke="%235D5D5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="41"><polyline id="arrow-next" transform="translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) " points="198.781251 0.984375 0.015626 199.75 202.816407 402.550781"></polyline></g></g></svg>';
        this.nextIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval"  fill-opacity="0.5" fill="%23FFFFFF" cx="300" cy="300" r="299"></circle><g id="next" transform="translate(228.000000, 99.000000)" stroke="%235D5D5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="41"><polyline id="arrow-next" transform="translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) " points="198.781251 0.984375 0.015626 199.75 202.816407 402.550781"></polyline></g></g></svg>';
        this.rotateIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 839 839" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="rotate" transform="translate(419.500000, 419.500000) scale(-1, 1) translate(-419.500000, -419.500000) "><circle id="Oval-Copy" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(419.500000, 419.500000) rotate(-180.000000) translate(-419.500000, -419.500000) " cx="419.5" cy="419.5" r="419.5"></circle><path d="M165.507668,216.714102 C226.591687,140.249711 319.232976,94.5 419.5,94.5 C598.992544,94.5 744.5,240.007456 744.5,419.5 C744.5,598.992544 598.992544,744.5 419.5,744.5 C408.178163,744.5 399,735.321837 399,724 C399,712.678163 408.178163,703.5 419.5,703.5 C576.348869,703.5 703.5,576.348869 703.5,419.5 C703.5,262.651131 576.348869,135.5 419.5,135.5 C337.235515,135.5 260.892773,170.706177 207.671441,230.312304 L278.452854,253.139956 L114.846529,419.975864 L79.5415975,188.989259 L165.507668,216.714102 Z" id="Oval" fill="%235D5D5D"></path></g></g></svg>';
        this.closeIconUrl = 'data:image/svg+xml;utf8,<svg viewBox="0 0 691 691" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval-Copy-2" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(345.500000, 345.500000) rotate(-180.000000) translate(-345.500000, -345.500000) " cx="345.5" cy="345.5" r="344.5"></circle><path d="M160,159 L532.40625,531.40625" id="Path" stroke="%235D5D5D" stroke-width="41" stroke-linecap="round"></path><path d="M160,159 L532.40625,531.40625" id="Path" stroke="%235D5D5D" stroke-width="41" stroke-linecap="round" transform="translate(346.203125, 345.203125) rotate(-270.000000) translate(-346.203125, -345.203125) "></path></g></svg>';
        ///////
        //
        //  BOOLEAN PROP
        //
        ///////
        this.enableRotate = true;
        this.backropClickClose = true;
    }
    MyComponent.prototype.showImage = function (indexImage) {
        var el = document.createElement('modal-component');
        el.imagesLink = this.images;
        el.indexImageShowed = indexImage;
        el.previousIconUrl = this.previousIconUrl;
        el.nextIconUrl = this.nextIconUrl;
        el.rotateIconUrl = this.rotateIconUrl;
        el.closeIconUrl = this.closeIconUrl;
        el.enableRotate = this.enableRotate;
        el.backropClickClose = this.backropClickClose;
        document.body.appendChild(el);
    };
    MyComponent.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("ul", { class: "afelio__gallery__pictures" }, this.images.map(function (image, index) { return h("li", { class: "afelio__gallery__pictures__item" }, h("img", { src: image, onClick: function () { return _this.showImage(index); } })); }))));
    };
    Object.defineProperty(MyComponent, "style", {
        get: function () { return ".afelio__gallery__pictures{display:-ms-flexbox;display:flex;list-style:none;padding:0;margin:0}.afelio__gallery__pictures .afelio__gallery__pictures__item{margin-right:10px}.afelio__gallery__pictures .afelio__gallery__pictures__item img{display:block;height:100px;width:auto;cursor:pointer}.afelio__gallery__pictures .afelio__gallery__pictures__item:last-child{margin-right:0}"; },
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
        console.log(this.nextIconUrl);
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
        if (this.backropClickClose && (event.target === event.currentTarget || event.target === this.modalContent)) {
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
        return (h("div", { class: "afelio__gallery__modal", onClick: function (event) { return _this.handleClickModal(event); } }, h("div", { class: "afelio__gallery__header" }, this.enableRotate && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__rotate", style: { 'background-image': "url('" + this.rotateIconUrl + "')" }, onClick: this.rotate.bind(this) }), h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__close", style: { 'background-image': "url('" + this.closeIconUrl + "')" }, onClick: this.close.bind(this) })), h("div", { class: "afelio__gallery__modal__content", ref: function (el) { return _this.modalContent = el; } }, this.images.map(function (img, index) {
            if (img === _this.images[_this.indexImageShowed]) {
                return (h("img", { key: index, src: _this.images[_this.indexImageShowed].url, style: { 'transform': "rotate(" + _this.currentRotation + "deg)" } }));
            }
        })), h("button", { class: "afelio__gallery__btn__previous", style: { 'background-image': "url('" + this.previousIconUrl + "')" }, onClick: this.previous.bind(this) }), h("button", { class: "afelio__gallery__btn__next", style: { 'background-image': "url('" + this.nextIconUrl + "')" }, onClick: this.next.bind(this) })));
    };
    Object.defineProperty(ModalComponent.prototype, "modal", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent, "style", {
        get: function () { return ".afelio__gallery__modal{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.afelio__gallery__modal .afelio__gallery__header{position:fixed;top:10px;right:10px}.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__header__btn{position:relative;width:30px;height:30px;margin-left:10px;padding:0;border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.afelio__gallery__modal .afelio__gallery__modal__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:10%;right:10%;bottom:10%;left:10%}.afelio__gallery__modal .afelio__gallery__modal__content img{max-width:100%;max-height:100%;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.afelio__gallery__modal .afelio__gallery__btn__close,.afelio__gallery__modal .afelio__gallery__btn__next,.afelio__gallery__modal .afelio__gallery__btn__previous,.afelio__gallery__modal .afelio__gallery__btn__rotate{background-color:transparent;background-position:50%;background-repeat:no-repeat;background-size:contain;cursor:pointer;outline:none}.afelio__gallery__modal .afelio__gallery__btn__next,.afelio__gallery__modal .afelio__gallery__btn__previous{position:fixed;top:50%;width:50px;height:50px;border:none;border-radius:50%;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.afelio__gallery__modal .afelio__gallery__btn__previous{left:20px}.afelio__gallery__modal .afelio__gallery__btn__next{right:20px}"; },
        enumerable: true,
        configurable: true
    });
    return ModalComponent;
}());
export { MyComponent as afelio_gallery, ModalComponent as modal_component };
