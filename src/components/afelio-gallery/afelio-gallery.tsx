import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'afelio-gallery',
	styleUrl: 'afelio-gallery.scss',
	shadow: false
})
export class MyComponent {

	@Prop() images: string[] = [
		'http://poizo.eu/assets/SVG/blorb.svg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/06198253956937.59480e2e53bc9.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/84ab7153956937.59480e2e54f29.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/52eab553956937.59480e2e54187.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/db530b53956937.59480e2e544f5.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ec53a253956937.59480e2e532b6.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/387b3953956937.59480e2e553fe.png',
		'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7a0cc153956937.59480e2e549d5.jpg',
		];

	@Prop() previousIconUrl: string = 'assets/images/SVG/previous.svg';
	@Prop() nextIconUrl: string = 'assets/images/SVG/next.svg';
	@Prop() rotateIconUrl: string = 'assets/images/SVG/rotate.svg';
	@Prop() closeIconUrl: string = 'assets/images/SVG/close.svg';

	private showImage(indexImage: number) {
		const el = document.createElement('modal-component');
		el.imagesLink = this.images;
		el.indexImageShowed = indexImage;
		el.previousIconUrl = this.previousIconUrl;
		el.nextIconUrl = this.nextIconUrl;
		el.rotateIconUrl = this.rotateIconUrl;
		el.closeIconUrl = this.closeIconUrl;
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
