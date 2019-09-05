import { a as patchEsm, b as bootstrapLazy } from './chunk-d634ed7c.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["afelio-gallery_2",[[0,"afelio-gallery",{"images":[16],"galleryOptions":[16]}],[0,"modal-component",{"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"galleryOptions":[16],"currentRotation":[32],"showActions":[32],"images":[32]},[[4,"keydown","handleKeyDown"]]]]]], options);
  });
};

export { defineCustomElements };
