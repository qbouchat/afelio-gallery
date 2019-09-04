import { EventEmitter } from '../../stencil.core';
import { Image } from '../../models/images.model';
import { AfelioGalleryOptions } from '../../utils/interface/afelio-gallery-options.interface';
export declare class ModalComponent {
    modal: HTMLElement;
    modalContent: HTMLElement;
    deleteImage: EventEmitter;
    imagesLink: string[];
    indexImageShowed: number;
    galleryOptions: AfelioGalleryOptions;
    currentRotation: number;
    showActions: boolean;
    images: Image[];
    changeImages(images: string[], oldImages: string[]): void;
    componentWillLoad(): void;
    private previous;
    private next;
    private handleClickModal;
    private close;
    private rotate;
    private delete;
    private generateActionsListButton;
    private showActionsList;
    render(): any;
}
