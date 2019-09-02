/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface AfelioGallery {
    'closeIconUrl': string;
    'images': string[];
    'nextIconUrl': string;
    'previousIconUrl': string;
    'rotateIconUrl': string;
  }
  interface ModalComponent {
    'closeIconUrl': string;
    'imagesLink': string[];
    'indexImageShowed': number;
    'nextIconUrl': string;
    'previousIconUrl': string;
    'rotateIconUrl': string;
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
    'closeIconUrl'?: string;
    'images'?: string[];
    'nextIconUrl'?: string;
    'previousIconUrl'?: string;
    'rotateIconUrl'?: string;
  }
  interface ModalComponent extends JSXBase.HTMLAttributes<HTMLModalComponentElement> {
    'closeIconUrl'?: string;
    'imagesLink'?: string[];
    'indexImageShowed'?: number;
    'nextIconUrl'?: string;
    'previousIconUrl'?: string;
    'rotateIconUrl'?: string;
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

