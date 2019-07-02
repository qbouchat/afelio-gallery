import { a as patchEsm, b as bootstrapLazy } from './chunk-322a657b.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["afelio-gallery_2",[[0,"afelio-gallery",{"images":[16]}],[0,"modal-component",{"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"currentRotation":[32]}]]]], options);
  });
};

export { defineCustomElements };
