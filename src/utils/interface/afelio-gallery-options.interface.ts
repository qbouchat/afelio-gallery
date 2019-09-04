import { Action } from "../../models/action.model";

export interface AfelioGalleryOptions {

	///////
	//
	//  ICONS SOURCES PROPS
	//
	///////
	previousIconUrl?: string;
	nextIconUrl?: string;
	rotateIconUrl?: string;
	closeIconUrl?: string;
	deleteIconUrl?: string;

	///////
	//
	//  BOOLEAN PROP
	//
	///////
	enableDelete?: boolean;
	enableVisualDelete?: boolean;
	enableRotate?: boolean;
	enableBackdropClickClose?: boolean;

	// CUSTOM ACTIONS
	actions?: Action[];
}
