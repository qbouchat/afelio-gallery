import { Action } from "../../models/action.model";
export interface AfelioGalleryOptions {
    previousIconUrl?: string;
    nextIconUrl?: string;
    rotateIconUrl?: string;
    closeIconUrl?: string;
    deleteIconUrl?: string;
    enableDelete?: boolean;
    enableVisualDelete?: boolean;
    enableRotate?: boolean;
    enableBackdropClickClose?: boolean;
    actions?: Action[];
}
