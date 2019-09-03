import { Action } from '../../models/action.model';
export declare class MyComponent {
    images: string[];
    previousIconUrl: string;
    nextIconUrl: string;
    rotateIconUrl: string;
    closeIconUrl: string;
    deleteIconUrl: string;
    enableDelete: boolean;
    enableVisualDelete: boolean;
    enableRotate: boolean;
    enableBackdropClickClose: boolean;
    actions: Action[];
    private showImage;
    render(): any;
}
