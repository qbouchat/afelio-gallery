/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  AfelioGalleryOptions,
} from './utils/interface/afelio-gallery-options.interface';

export namespace Components {
  interface AfelioGallery {
    'galleryOptions': AfelioGalleryOptions;
    'images': string[];
  }
  interface ModalComponent {
    'galleryOptions': AfelioGalleryOptions;
    'imagesLink': string[];
    'indexImageShowed': number;
  }
}

declare global {


  interface HTMLAfelioGalleryElement extends Components.AfelioGallery, HTMLStencilElement {}
  var HTMLAfelioGalleryElement: {
    prototype: HTMLAfelioGalleryElement;
    new (): HTMLAfelioGalleryElement;
  };

  interface HTMLModalComponentElement extends Components.ModalComponent, HTMLStencilElement {}
  var HTMLModalComponentElement: {
    prototype: HTMLModalComponentElement;
    new (): HTMLModalComponentElement;
  };
  interface HTMLElementTagNameMap {
    'afelio-gallery': HTMLAfelioGalleryElement;
    'modal-component': HTMLModalComponentElement;
  }
}

declare namespace LocalJSX {
  interface AfelioGallery extends JSXBase.HTMLAttributes<HTMLAfelioGalleryElement> {
    'galleryOptions'?: AfelioGalleryOptions;
    'images'?: string[];
    'onCustomActionFired'?: (event: CustomEvent<any>) => void;
    'onDeleteImage'?: (event: CustomEvent<any>) => void;
  }
  interface ModalComponent extends JSXBase.HTMLAttributes<HTMLModalComponentElement> {
    'galleryOptions'?: AfelioGalleryOptions;
    'imagesLink'?: string[];
    'indexImageShowed'?: number;
    'onCustomActionFired'?: (event: CustomEvent<any>) => void;
    'onDeleteImage'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'afelio-gallery': AfelioGallery;
    'modal-component': ModalComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


