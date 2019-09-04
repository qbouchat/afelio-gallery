import { EventEmitter } from '../../stencil.core';
import { AfelioGalleryOptions } from '../../utils/interface/afelio-gallery-options.interface';
export declare class MyComponent {
    modal: HTMLModalComponentElement;
    deleteImage: EventEmitter;
    defaultGalleryOptions: {
        previousIconUrl: string;
        nextIconUrl: string;
        rotateIconUrl: string;
        closeIconUrl: string;
        deleteIconUrl: string;
        enableDelete: boolean;
        enableVisualDelete: boolean;
        enableRotate: boolean;
        enableBackdropClickClose: boolean;
        actions: any[];
    };
    images: string[];
    galleryOptions: AfelioGalleryOptions;
    changeImages(): void;
    private showImage;
    render(): any;
}
