'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-1b2bb3ec.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["afelio-gallery_2.cjs",[[0,"afelio-gallery",{"images":[16],"galleryOptions":[16]}],[0,"modal-component",{"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"galleryOptions":[16],"currentRotation":[32],"showActions":[32],"images":[32]},[[4,"keydown","handleKeyDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
