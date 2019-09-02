import { Component, h, Prop, Element, State } from '@stencil/core';
import { Image } from '../../models/images.model';


@Component({
    tag: 'modal-component',
	styleUrl: 'modal-component.scss',
	shadow: false
})
export class ModalComponent {

	@Element() modal: HTMLElement;
	modalContent: HTMLElement

	@Prop() previousIconUrl: string;
	@Prop() nextIconUrl: string;
	@Prop() rotateIconUrl: string;
	@Prop() closeIconUrl: string;

	@Prop() imagesLink: string[];
	@Prop() indexImageShowed: number;
	@State() currentRotation: number;

	images: Image[];

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
		if (event.target === event.currentTarget || event.target === this.modalContent) {
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

    render() {
        return (
            <div class="modal" onClick={(event) => this.handleClickModal(event)}>
				<div class="header">
					<button class="header__btn btn__rotate" style={{'background-image': `url(${this.rotateIconUrl})`}} onClick={this.rotate.bind(this)}></button>
					<button class="header__btn btn__close" style={{'background-image': `url(${this.closeIconUrl})`}} onClick={this.close.bind(this)}></button>
				</div>

				<div class="modal__content" ref={(el) => this.modalContent = el as HTMLInputElement}>
					{this.images.map((img, index) => {
						if (img === this.images[this.indexImageShowed]) {
							return (<img key={index} src={this.images[this.indexImageShowed].url} style={{'transform': `rotate(${this.currentRotation}deg)`}} />)
						}
					})}
				</div>

				<button class="btn__previous" style={{'background-image': `url(${this.previousIconUrl})`}} onClick={this.previous.bind(this)}></button>
				<button class="btn__next" style={{'background-image': `url(${this.nextIconUrl})`}} onClick={this.next.bind(this)}></button>
            </div>
        );
    }
}
