import { r as registerInstance, c as createEvent, h, g as getElement } from './chunk-d634ed7c.js';
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
        this.defaultGalleryOptions = {
            //  ICONS SOURCES PROPS
            previousIconUrl: 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(300.000000, 300.000000) rotate(-180.000000) translate(-300.000000, -300.000000) " cx="300" cy="300" r="299"></circle><g id="next" transform="translate(270.500000, 299.500000) rotate(-180.000000) translate(-270.500000, -299.500000) translate(169.000000, 98.000000)" stroke="%235D5D5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="41"><polyline id="arrow-next" transform="translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) " points="198.781251 0.984375 0.015626 199.75 202.816407 402.550781"></polyline></g></g></svg>',
            nextIconUrl: 'data:image/svg+xml;utf8,<svg viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval"  fill-opacity="0.5" fill="%23FFFFFF" cx="300" cy="300" r="299"></circle><g id="next" transform="translate(228.000000, 99.000000)" stroke="%235D5D5D" stroke-linecap="round" stroke-linejoin="round" stroke-width="41"><polyline id="arrow-next" transform="translate(101.416016, 201.767578) rotate(-180.000000) translate(-101.416016, -201.767578) " points="198.781251 0.984375 0.015626 199.75 202.816407 402.550781"></polyline></g></g></svg>',
            rotateIconUrl: 'data:image/svg+xml;utf8,<svg viewBox="0 0 839 839" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="rotate" transform="translate(419.500000, 419.500000) scale(-1, 1) translate(-419.500000, -419.500000) "><circle id="Oval-Copy" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(419.500000, 419.500000) rotate(-180.000000) translate(-419.500000, -419.500000) " cx="419.5" cy="419.5" r="419.5"></circle><path d="M165.507668,216.714102 C226.591687,140.249711 319.232976,94.5 419.5,94.5 C598.992544,94.5 744.5,240.007456 744.5,419.5 C744.5,598.992544 598.992544,744.5 419.5,744.5 C408.178163,744.5 399,735.321837 399,724 C399,712.678163 408.178163,703.5 419.5,703.5 C576.348869,703.5 703.5,576.348869 703.5,419.5 C703.5,262.651131 576.348869,135.5 419.5,135.5 C337.235515,135.5 260.892773,170.706177 207.671441,230.312304 L278.452854,253.139956 L114.846529,419.975864 L79.5415975,188.989259 L165.507668,216.714102 Z" id="Oval" fill="%235D5D5D"></path></g></g></svg>',
            closeIconUrl: 'data:image/svg+xml;utf8,<svg viewBox="0 0 691 691" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval-Copy-2" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(345.500000, 345.500000) rotate(-180.000000) translate(-345.500000, -345.500000) " cx="345.5" cy="345.5" r="344.5"></circle><path d="M160,159 L532.40625,531.40625" id="Path" stroke="%235D5D5D" stroke-width="41" stroke-linecap="round"></path><path d="M160,159 L532.40625,531.40625" id="Path" stroke="%235D5D5D" stroke-width="41" stroke-linecap="round" transform="translate(346.203125, 345.203125) rotate(-270.000000) translate(-346.203125, -345.203125) "></path></g></svg>',
            deleteIconUrl: 'data:image/svg+xml;utf8,<svg viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Styleguide" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/supprimer_secondary" transform="translate(6.000000, 3.000000)"><circle id="Oval" fill-opacity="0.5" fill="%23FFFFFF" cx="5" cy="8" r="11"></circle><path d="M-0.368932039,2.93461194 L11.4397379,2.93283582 L11.4412524,14.4419627 C11.4415049,15.2790224 10.7600777,15.9639701 9.9274466,15.9639701 L1.14676699,15.9653657 C0.314009709,15.9654925 -0.367291262,15.2806716 -0.367543689,14.4437388 L-0.368932039,2.93461194 Z M9.35973786,14.4524925 L9.35797087,4.02857463 L8.29840777,4.02857463 L8.29992233,14.4526194 L9.35973786,14.4524925 Z M6.06682524,14.453 L6.06531068,4.02895522 L5.00562136,4.02908209 L5.00700971,14.4532537 L6.06682524,14.453 Z M2.77391262,14.4535075 L2.77265049,4.02946269 L1.71283495,4.02946269 L1.71434951,14.4536343 L2.77391262,14.4535075 Z" id="Combined-Shape" fill="%235D5D5D"></path><path d="M11.9782913,1.34485821 C11.9782913,0.962358209 11.7002427,0.649253731 11.3602233,0.649253731 L-0.381932039,0.650776119 C-0.721825243,0.650776119 -1,0.964007463 -1,1.34663433 L-0.999621359,2.35838806 L11.9785437,2.35661194 L11.9782913,1.34485821" id="Fill-8" fill="%235D5D5D"></path><path d="M4.02166019,-0.230052239 L7.01860194,-0.23030597 L7.01885437,0.319149254 L8.1278932,0.318895522 L8.12764078,-0.289552239 C8.12764078,-0.680298507 7.80970874,-1 7.42109709,-1 L3.61903883,-0.999365672 C3.23067961,-0.999365672 2.91262136,-0.679791045 2.91262136,-0.289044776 L2.91287379,0.319783582 L4.02191262,0.319656716 L4.02166019,-0.230052239" id="Fill-9" fill="%235D5D5D"></path></g></g></svg>',
            moreActionsIconUrl: 'data:image/svg+xml;utf8,<svg viewBox="0 0 691 691" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="Oval-Copy-2" stroke="%235D5D5D" fill-opacity="0.5" fill="%23FFFFFF" transform="translate(345.500000, 345.500000) rotate(-180.000000) translate(-345.500000, -345.500000) " cx="345.5" cy="345.5" r="344.5"></circle><circle id="Oval" stroke="%23979797" fill="%235D5D5D" cx="346" cy="108" r="85"></circle><circle id="Oval-Copy" stroke="%23979797" fill="%235D5D5D" cx="346" cy="344" r="85"></circle><circle id="Oval-Copy-2" stroke="%23979797" fill="%235D5D5D" cx="346" cy="580" r="85"></circle></g></svg>',
            //  BOOLEAN PROP
            enableDelete: false,
            enableVisualDelete: false,
            enableRotate: false,
            enableBackdropClickClose: true,
            actions: [
                { name: 'CustomAction', icon: 'data:image/svg+xml;utf8,<svg viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Styleguide" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="icon/supprimer_secondary" transform="translate(6.000000, 3.000000)"><circle id="Oval" fill-opacity="0.5" fill="%23FFFFFF" cx="5" cy="8" r="11"></circle><path d="M-0.368932039,2.93461194 L11.4397379,2.93283582 L11.4412524,14.4419627 C11.4415049,15.2790224 10.7600777,15.9639701 9.9274466,15.9639701 L1.14676699,15.9653657 C0.314009709,15.9654925 -0.367291262,15.2806716 -0.367543689,14.4437388 L-0.368932039,2.93461194 Z M9.35973786,14.4524925 L9.35797087,4.02857463 L8.29840777,4.02857463 L8.29992233,14.4526194 L9.35973786,14.4524925 Z M6.06682524,14.453 L6.06531068,4.02895522 L5.00562136,4.02908209 L5.00700971,14.4532537 L6.06682524,14.453 Z M2.77391262,14.4535075 L2.77265049,4.02946269 L1.71283495,4.02946269 L1.71434951,14.4536343 L2.77391262,14.4535075 Z" id="Combined-Shape" fill="%235D5D5D"></path><path d="M11.9782913,1.34485821 C11.9782913,0.962358209 11.7002427,0.649253731 11.3602233,0.649253731 L-0.381932039,0.650776119 C-0.721825243,0.650776119 -1,0.964007463 -1,1.34663433 L-0.999621359,2.35838806 L11.9785437,2.35661194 L11.9782913,1.34485821" id="Fill-8" fill="%235D5D5D"></path><path d="M4.02166019,-0.230052239 L7.01860194,-0.23030597 L7.01885437,0.319149254 L8.1278932,0.318895522 L8.12764078,-0.289552239 C8.12764078,-0.680298507 7.80970874,-1 7.42109709,-1 L3.61903883,-0.999365672 C3.23067961,-0.999365672 2.91262136,-0.679791045 2.91262136,-0.289044776 L2.91287379,0.319783582 L4.02191262,0.319656716 L4.02166019,-0.230052239" id="Fill-9" fill="%235D5D5D"></path></g></g></svg>' }
            ]
        };
        // IMAGES ARRAY
        this.images = [
            'https://cdn.pixabay.com/photo/2015/04/04/19/13/one-706897_640.jpg',
            'https://media.alienwarearena.com/media/2-10.png',
            'data:image/jpeg;base64,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',
            'https://cdn3.coloritou.com/dessins/coloriage/numero-4.png',
            'https://cdn.psychologytoday.com/sites/default/files/blogs/75174/2014/07/154215-157998.jpg'
        ];
        this.deleteImage = createEvent(this, "deleteImage", 7);
        this.customActionFired = createEvent(this, "customActionFired", 7);
    }
    MyComponent.prototype.changeImages = function () {
        this.modal.imagesLink = this.images;
    };
    MyComponent.prototype.showImage = function (indexImage) {
        var _this = this;
        this.galleryOptions = Object.assign({}, this.defaultGalleryOptions, this.galleryOptions);
        this.modal = document.createElement('modal-component');
        this.modal.imagesLink = this.images;
        this.modal.indexImageShowed = indexImage;
        this.modal.galleryOptions = this.galleryOptions;
        this.modal.addEventListener('deleteImage', function (e) {
            _this.deleteImage.emit(e.detail);
        });
        this.modal.addEventListener('customActionFired', function (e) {
            _this.customActionFired.emit(e.detail);
        });
        document.body.appendChild(this.modal);
    };
    MyComponent.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("ul", { class: "afelio__gallery__pictures" }, this.images.map(function (image, index) { return h("li", { class: "afelio__gallery__pictures__item" }, h("img", { src: image, onClick: function () { return _this.showImage(index); } })); }))));
    };
    Object.defineProperty(MyComponent, "watchers", {
        get: function () {
            return {
                "images": ["changeImages"]
            };
        },
        enumerable: true,
        configurable: true
    });
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
        this.showActions = false;
        this.deleteImage = createEvent(this, "deleteImage", 7);
        this.customActionFired = createEvent(this, "customActionFired", 7);
    }
    ModalComponent.prototype.changeImages = function (newImages) {
        this.indexImageShowed = this.findCloserIndexAvailable(newImages);
        this.images = newImages.map(function (img) { return new Image(img); });
    };
    ModalComponent.prototype.handleKeyDown = function (ev) {
        switch (ev.key) {
            case 'ArrowRight':
                if (this.indexImageShowed < this.images.length - 1) {
                    this.next();
                }
                break;
            case 'ArrowLeft':
                if (this.indexImageShowed > 0) {
                    this.previous();
                }
                break;
            case 'Escape':
                this.close();
                break;
            default:
                break;
        }
    };
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
        if (this.galleryOptions.enableBackdropClickClose && (event.target === event.currentTarget || event.target === this.modalContent)) {
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
    ModalComponent.prototype.delete = function () {
        var _this = this;
        var urlToRemove = this.imagesLink.find(function (link) { return link === _this.images[_this.indexImageShowed].url; });
        var indexToRemove = this.imagesLink.findIndex(function (link) { return link === urlToRemove; });
        var imageToDelete = { index: indexToRemove, imageUrl: urlToRemove };
        if (this.galleryOptions.enableVisualDelete) {
            if (this.images.length > 1) {
                this.images.splice(this.indexImageShowed, 1);
                this.indexImageShowed = this.indexImageShowed === this.images.length ? this.indexImageShowed - 1 : this.indexImageShowed;
                this.currentRotation = this.images[this.indexImageShowed].rotation;
                this.images = this.images.slice();
            }
            else {
                this.close();
            }
        }
        this.deleteImage.emit(imageToDelete);
    };
    ModalComponent.prototype.findCloserIndexAvailable = function (images) {
        var closerIndex = this.indexImageShowed;
        while ((!images[closerIndex]) && (closerIndex !== 0)) {
            closerIndex--;
        }
        return closerIndex;
    };
    ModalComponent.prototype.customActionEmit = function (action) {
        var _this = this;
        var index = this.imagesLink.find(function (url) { return url === _this.images[_this.indexImageShowed].url; });
        this.customActionFired.emit(Object.assign({}, action, { imageIndex: index }));
    };
    ModalComponent.prototype.generateActionsListButton = function () {
        var _this = this;
        if (this.galleryOptions.actions && this.galleryOptions.actions.length > 0) {
            return (h("div", { class: "afelio__gallery__actions__list-container" }, h("button", { class: "afelio__gallery__header__btn afelio__gallery__more__actions__btn", style: { 'background-image': "url('" + this.galleryOptions.moreActionsIconUrl + "')" }, onClick: this.showActionsList.bind(this) }), this.showActions &&
                h("ul", { class: "afelio__gallery__more__actions__list" }, this.galleryOptions.actions.map(function (action) {
                    return (h("li", { class: "afelio__gallery__more__actions__item", onClick: function () { return _this.customActionEmit(action); } }, h("button", null, action.icon && h("span", { class: "afelio__gallery__header__btn btn__more-action-icon", style: { 'background-image': "url('" + action.icon + "')" } }), action.name)));
                }))));
        }
    };
    ModalComponent.prototype.showActionsList = function () {
        this.showActions = !this.showActions;
    };
    ModalComponent.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "afelio__gallery__modal", onClick: function (event) { return _this.handleClickModal(event); } }, h("div", { class: "afelio__gallery__header" }, this.galleryOptions.enableRotate && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__rotate", style: { 'background-image': "url('" + this.galleryOptions.rotateIconUrl + "')" }, onClick: this.rotate.bind(this) }), this.galleryOptions.enableDelete && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__delete", style: { 'background-image': "url('" + this.galleryOptions.deleteIconUrl + "')" }, onClick: this.delete.bind(this) }), h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__close", style: { 'background-image': "url('" + this.galleryOptions.closeIconUrl + "')" }, onClick: this.close.bind(this) }), this.generateActionsListButton()), h("div", { class: "afelio__gallery__modal__content", ref: function (el) { return _this.modalContent = el; } }, this.images.map(function (img, index) {
            if (img === _this.images[_this.indexImageShowed]) {
                return (h("img", { key: index, src: _this.images[_this.indexImageShowed].url, style: { 'transform': "rotate(" + _this.currentRotation + "deg)" } }));
            }
        })), this.indexImageShowed !== 0 && h("button", { class: "afelio__gallery__btn__previous", style: { 'background-image': "url('" + this.galleryOptions.previousIconUrl + "')" }, onClick: this.previous.bind(this) }), this.indexImageShowed !== this.images.length - 1 && h("button", { class: "afelio__gallery__btn__next", style: { 'background-image': "url('" + this.galleryOptions.nextIconUrl + "')" }, onClick: this.next.bind(this) })));
    };
    Object.defineProperty(ModalComponent.prototype, "modal", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent, "watchers", {
        get: function () {
            return {
                "imagesLink": ["changeImages"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalComponent, "style", {
        get: function () { return ".afelio__gallery__modal{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.afelio__gallery__modal .afelio__gallery__header{position:fixed;top:10px;right:10px;display:-ms-flexbox;display:flex}.afelio__gallery__modal .afelio__gallery__header:first-child{margin-left:0}.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__header__btn{position:relative;width:30px;height:30px;margin-left:10px;padding:0;border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__actions__list-container{position:relative}.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__actions__list-container .afelio__gallery__more__actions__list{position:absolute;right:0;list-style-type:none}.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__actions__list-container .afelio__gallery__more__actions__list .afelio__gallery__more__actions__item button{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;cursor:pointer}.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__actions__list-container .afelio__gallery__more__actions__list .afelio__gallery__more__actions__item button .btn__more-action-icon{display:block;margin-right:8px}.afelio__gallery__modal .afelio__gallery__modal__content{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:fixed;top:10%;right:10%;bottom:10%;left:10%}.afelio__gallery__modal .afelio__gallery__modal__content img{max-width:100%;max-height:100%;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform .3s ease-in-out;transition:-webkit-transform .3s ease-in-out;transition:transform .3s ease-in-out;transition:transform .3s ease-in-out,-webkit-transform .3s ease-in-out}.afelio__gallery__modal .afelio__gallery__btn__close,.afelio__gallery__modal .afelio__gallery__btn__delete,.afelio__gallery__modal .afelio__gallery__btn__next,.afelio__gallery__modal .afelio__gallery__btn__previous,.afelio__gallery__modal .afelio__gallery__btn__rotate,.afelio__gallery__modal .afelio__gallery__more__actions__btn,.afelio__gallery__modal .btn__more-action-icon{background-color:transparent;background-position:50%;background-repeat:no-repeat;background-size:contain;cursor:pointer;outline:none}.afelio__gallery__modal .afelio__gallery__btn__next,.afelio__gallery__modal .afelio__gallery__btn__previous{position:fixed;top:50%;width:50px;height:50px;border:none;border-radius:50%;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.afelio__gallery__modal .afelio__gallery__btn__previous{left:20px}.afelio__gallery__modal .afelio__gallery__btn__next{right:20px}"; },
        enumerable: true,
        configurable: true
    });
    return ModalComponent;
}());
export { MyComponent as afelio_gallery, ModalComponent as modal_component };
