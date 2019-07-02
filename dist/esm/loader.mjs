import { a as patchEsm, b as bootstrapLazy } from './chunk-e06d23be.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["afelio-gallery_2",[[1,"afelio-gallery",{"images":[16]}],[1,"modal-component",{"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"currentRotation":[32]}]]]], options);
  });
};

export { defineCustomElements };
