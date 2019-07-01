import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'my-component',
	styleUrl: 'my-component.scss',
	shadow: true
})
export class MyComponent {

	@Prop() images: string[] = [
		'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
		'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg',
		'https://pixel.nymag.com/imgs/daily/vulture/2019/03/13/13-captain-marvel-flerken-cat.w700.h700.jpg'
	];


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
