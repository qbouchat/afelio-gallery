import { Component, h, Prop, Element, State, Watch, Event, EventEmitter } from '@stencil/core';
import { Image } from '../../models/images.model';
import { AfelioGalleryOptions } from '../../utils/interface/afelio-gallery-options.interface';


@Component({
    tag: 'modal-component',
	styleUrl: 'modal-component.scss',
	shadow: false
})
export class ModalComponent {

	@Element() modal: HTMLElement;
	modalContent: HTMLElement

	@Event({
		eventName: 'deleteImage',
		composed: true,
		cancelable: true,
		bubbles: true,
	  }) deleteImage: EventEmitter;

	@Prop() imagesLink: string[];
	@Prop() indexImageShowed: number;
	@Prop() galleryOptions: AfelioGalleryOptions;

	@State() currentRotation: number;
	@State() showActions: boolean = false;

	@State() images: Image[];

	@Watch('imagesLink')
	changeImages(images: string[], oldImages: string[]) {
		console.log(images, oldImages);
		this.currentRotation = 0;
		this.images = images.map((img) => new Image(img));
	}

	componentWillLoad() {
		this.images = this.imagesLink.map((img) => new Image(img));
	}

	private previous() {
		let newIndex = this.indexImageShowed - 1;
		if (newIndex < 0) {
			newIndex = this.images.length - 1;
		}
		this.indexImageShowed = newIndex;
		this.currentRotation = this.images[this.indexImageShowed].rotation;
	}

	private next() {
		let newIndex = this.indexImageShowed + 1;
		if (newIndex >= this.images.length) {
			newIndex = 0;
		}
		this.indexImageShowed = newIndex;
		this.currentRotation = this.images[this.indexImageShowed].rotation;
	}

	private handleClickModal(event: MouseEvent) {
		if (this.galleryOptions.enableBackdropClickClose && (event.target === event.currentTarget || event.target === this.modalContent)) {
			this.close();
		}
	}

	private close() {
		this.modal.remove();
	}

	private rotate() {
		let rotation = this.images[this.indexImageShowed].rotation + 90;
		this.images[this.indexImageShowed].rotation = rotation;
		this.currentRotation = rotation;
	}

	private delete() {
		const urlToRemove = this.imagesLink.find(link => link === this.images[this.indexImageShowed].url);
		const indexToRemove = this.imagesLink.findIndex(link => link === urlToRemove )
		const imageToDelete = {index: indexToRemove, imageUrl: urlToRemove };
		if (this.galleryOptions.enableVisualDelete) {
			if (this.images.length > 1) {
				this.images.splice(this.indexImageShowed, 1);
				this.indexImageShowed = this.indexImageShowed === this.images.length ? this.indexImageShowed - 1 : this.indexImageShowed ;
				this.currentRotation = this.images[this.indexImageShowed].rotation;
				this.images = [...this.images];
			} else {
				this.close();
			}
		}
		this.deleteImage.emit(imageToDelete);
	}

	private generateActionsListButton() {
		return (
			<div class="afelio__gallery__actions__list-container">
				<button class="afelio__gallery__more__actions" onClick={this.showActionsList.bind(this)}></button>
				{this.showActions &&
					<ul class="afelio__gallery__more__actions">
						{
						this.galleryOptions.actions.map((action) => {
							return (<li>{action.name}</li>);
						})
						}
					</ul>
			}
			</div>
		);
	}

	private showActionsList() {
		this.showActions = !this.showActions;
	}

    render() {
        return (
            <div class="afelio__gallery__modal" onClick={(event) => this.handleClickModal(event)}>
				<div class="afelio__gallery__header">
					{this.galleryOptions.enableRotate && <button class="afelio__gallery__header__btn afelio__gallery__btn__rotate" style={{'background-image': `url('${this.galleryOptions.rotateIconUrl}')`}} onClick={this.rotate.bind(this)}></button>}
					{this.galleryOptions.enableDelete && <button class="afelio__gallery__header__btn afelio__gallery__btn__delete" style={{'background-image': `url('${this.galleryOptions.deleteIconUrl}')`}} onClick={this.delete.bind(this)}></button>}
					<button class="afelio__gallery__header__btn afelio__gallery__btn__close" style={{'background-image': `url('${this.galleryOptions.closeIconUrl}')`}} onClick={this.close.bind(this)}></button>
					{this.galleryOptions.actions && this.galleryOptions.actions.length > 0 && this.generateActionsListButton()}
				</div>

				<div class="afelio__gallery__modal__content" ref={(el) => this.modalContent = el as HTMLInputElement}>
					{this.images.map((img, index) => {
						if (img === this.images[this.indexImageShowed]) {
							return (<img key={index} src={this.images[this.indexImageShowed].url} style={{'transform': `rotate(${this.currentRotation}deg)`}} />)
						}
					})}
				</div>

				{this.indexImageShowed !== 0 && <button class="afelio__gallery__btn__previous" style={{'background-image': `url('${this.galleryOptions.previousIconUrl}')`}} onClick={this.previous.bind(this)}></button>}
				{this.indexImageShowed !== this.images.length - 1 && <button class="afelio__gallery__btn__next" style={{'background-image': `url('${this.galleryOptions.nextIconUrl}')`}} onClick={this.next.bind(this)}></button>}
            </div>
        );
    }
}
