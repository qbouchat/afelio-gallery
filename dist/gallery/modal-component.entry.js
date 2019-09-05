import { r as registerInstance, c as createEvent, h, d as getElement } from './chunk-ade7c7d9.js';

class Image {
    constructor(url) {
        this.url = url;
        this.rotation = 0;
    }
}

class ModalComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.showActions = false;
        this.deleteImage = createEvent(this, "deleteImage", 7);
    }
    changeImages(newImages, oldImages) {
        console.log(newImages, oldImages);
        this.indexImageShowed = this.findCloserIndexAvailable(newImages);
        this.images = newImages.map((img) => new Image(img));
    }
    handleKeyDown(ev) {
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
        if (this.galleryOptions.enableBackdropClickClose && (event.target === event.currentTarget || event.target === this.modalContent)) {
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
    delete() {
        const urlToRemove = this.imagesLink.find(link => link === this.images[this.indexImageShowed].url);
        const indexToRemove = this.imagesLink.findIndex(link => link === urlToRemove);
        const imageToDelete = { index: indexToRemove, imageUrl: urlToRemove };
        if (this.galleryOptions.enableVisualDelete) {
            if (this.images.length > 1) {
                this.images.splice(this.indexImageShowed, 1);
                this.indexImageShowed = this.indexImageShowed === this.images.length ? this.indexImageShowed - 1 : this.indexImageShowed;
                this.currentRotation = this.images[this.indexImageShowed].rotation;
                this.images = [...this.images];
            }
            else {
                this.close();
            }
        }
        this.deleteImage.emit(imageToDelete);
    }
    findCloserIndexAvailable(images) {
        let closerIndex = this.indexImageShowed;
        while ((!images[closerIndex]) && (closerIndex !== 0)) {
            closerIndex--;
        }
        return closerIndex;
    }
    generateActionsListButton() {
        if (this.galleryOptions.actions && this.galleryOptions.actions.length > 0) {
            return (h("div", { class: "afelio__gallery__actions__list-container" }, h("button", { class: "afelio__gallery__more__actions", onClick: this.showActionsList.bind(this) }), this.showActions &&
                h("ul", { class: "afelio__gallery__more__actions" }, this.galleryOptions.actions.map((action) => {
                    return (h("li", null, action.name));
                }))));
        }
    }
    showActionsList() {
        this.showActions = !this.showActions;
    }
    render() {
        return (h("div", { class: "afelio__gallery__modal", onClick: (event) => this.handleClickModal(event) }, h("div", { class: "afelio__gallery__header" }, this.galleryOptions.enableRotate && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__rotate", style: { 'background-image': `url('${this.galleryOptions.rotateIconUrl}')` }, onClick: this.rotate.bind(this) }), this.galleryOptions.enableDelete && h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__delete", style: { 'background-image': `url('${this.galleryOptions.deleteIconUrl}')` }, onClick: this.delete.bind(this) }), h("button", { class: "afelio__gallery__header__btn afelio__gallery__btn__close", style: { 'background-image': `url('${this.galleryOptions.closeIconUrl}')` }, onClick: this.close.bind(this) }), this.generateActionsListButton()), h("div", { class: "afelio__gallery__modal__content", ref: (el) => this.modalContent = el }, this.images.map((img, index) => {
            if (img === this.images[this.indexImageShowed]) {
                return (h("img", { key: index, src: this.images[this.indexImageShowed].url, style: { 'transform': `rotate(${this.currentRotation}deg)` } }));
            }
        })), this.indexImageShowed !== 0 && h("button", { class: "afelio__gallery__btn__previous", style: { 'background-image': `url('${this.galleryOptions.previousIconUrl}')` }, onClick: this.previous.bind(this) }), this.indexImageShowed !== this.images.length - 1 && h("button", { class: "afelio__gallery__btn__next", style: { 'background-image': `url('${this.galleryOptions.nextIconUrl}')` }, onClick: this.next.bind(this) })));
    }
    get modal() { return getElement(this); }
    static get watchers() { return {
        "imagesLink": ["changeImages"]
    }; }
    static get style() { return ".afelio__gallery__modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.afelio__gallery__modal .afelio__gallery__header {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n}\n.afelio__gallery__modal .afelio__gallery__header .afelio__gallery__header__btn {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  margin-left: 10px;\n  padding: 0;\n  border: none;\n  background: transparent;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.afelio__gallery__modal .afelio__gallery__modal__content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: fixed;\n  top: 10%;\n  right: 10%;\n  bottom: 10%;\n  left: 10%;\n}\n.afelio__gallery__modal .afelio__gallery__modal__content img {\n  max-width: 100%;\n  max-height: 100%;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n.afelio__gallery__modal .afelio__gallery__btn__rotate, .afelio__gallery__modal .afelio__gallery__btn__delete, .afelio__gallery__modal .afelio__gallery__btn__previous, .afelio__gallery__modal .afelio__gallery__btn__next, .afelio__gallery__modal .afelio__gallery__btn__close {\n  background-color: transparent;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  outline: none;\n}\n.afelio__gallery__modal .afelio__gallery__btn__previous, .afelio__gallery__modal .afelio__gallery__btn__next {\n  position: fixed;\n  top: 50%;\n  width: 50px;\n  height: 50px;\n  border: none;\n  border-radius: 50%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.afelio__gallery__modal .afelio__gallery__btn__previous {\n  left: 20px;\n}\n.afelio__gallery__modal .afelio__gallery__btn__next {\n  right: 20px;\n}"; }
}

export { ModalComponent as modal_component };
