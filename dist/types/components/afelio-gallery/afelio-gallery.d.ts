import { AfelioGalleryOptions } from '../../utils/interface/afelio-gallery-options.interface';
export declare class MyComponent {
    modal: HTMLModalComponentElement;
    images: string[];
    galleryOptions: AfelioGalleryOptions;
    changeImages(images: string[], oldImages: string[]): void;
    private showImage;
    render(): any;
}
