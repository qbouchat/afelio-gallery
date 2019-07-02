import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'afelio-gallery',
	styleUrl: 'afelio-gallery.scss',
	shadow: true
})
export class MyComponent {

	@Prop() images: string[] = [];


	private showImage(indexImage: number) {
		const el = document.createElement('modal-component');
		el.imagesLink = this.images;
		el.indexImageShowed = indexImage;
		document.body.appendChild(el);
	}

	render() {
		return (
			<div>
				<ul class="gallery__pictures">
					{this.images.map((image, index) =>
						<li class="gallery__pictures__item">
							<img src={image} onClick={() => this.showImage(index)} />
						</li>
					)}
				</ul>
			</div>
		);
	}
}
