import { Image } from '../../models/images.model';
export declare class ModalComponent {
    modal: HTMLElement;
    modalContent: HTMLElement;
    previousIconUrl: string;
    nextIconUrl: string;
    rotateIconUrl: string;
    closeIconUrl: string;
    imagesLink: string[];
    indexImageShowed: number;
    currentRotation: number;
    images: Image[];
    componentWillLoad(): void;
    private previous;
    private next;
    private handleClickModal;
    private close;
    private rotate;
    render(): any;
}
