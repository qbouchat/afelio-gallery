import { Component, Prop, h } from '@stencil/core';

@Component({
	tag: 'afelio-gallery',
	styleUrl: 'afelio-gallery.scss',
	shadow: false
})
export class MyComponent {

	// IMAGES ARRAY
	@Prop() images: string[] = [
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/53ae6c31020211.563d08cd76fee.jpg',
		'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/813a4031020211.563d08cd78414.jpg',
	];

	///////
	//
	//  ICONS SOURCES PROPS
	//
	///////
	@Prop() previousIconUrl: string = 'assets/images/SVG/previous.svg';
	@Prop() nextIconUrl: string = 'assets/images/SVG/next.svg';
	@Prop() rotateIconUrl: string = 'assets/images/SVG/rotate.svg';
	@Prop() closeIconUrl: string = 'assets/images/SVG/close.svg';

	///////
	//
	//  BOOLEAN PROP
	//
	///////
	@Prop() enableRotate: boolean = true;
	@Prop() backropClickClose: boolean = true;

	private showImage(indexImage: number) {
		const el = document.createElement('modal-component');
		el.imagesLink = this.images;
		el.indexImageShowed = indexImage;
		el.previousIconUrl = this.previousIconUrl;
		el.nextIconUrl = this.nextIconUrl;
		el.rotateIconUrl = this.rotateIconUrl;
		el.closeIconUrl = this.closeIconUrl;
		el.enableRotate = this.enableRotate;
		el.backropClickClose = this.backropClickClose;
		document.body.appendChild(el);
	}

	render() {
		return (
			<div>
				<ul class="afelio__gallery__pictures">
					{this.images.map((image, index) =>
						<li class="afelio__gallery__pictures__item">
							<img src={image} onClick={() => this.showImage(index)} />
						</li>
					)}
				</ul>
			</div>
		);
	}
}
