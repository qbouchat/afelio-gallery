'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-d6318124.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["afelio-gallery_2.cjs",[[0,"afelio-gallery",{"images":[16]}],[0,"modal-component",{"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"currentRotation":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
