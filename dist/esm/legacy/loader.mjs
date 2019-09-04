import { a as patchEsm, b as bootstrapLazy } from './chunk-6d993826.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["afelio-gallery_2", [[0, "afelio-gallery", { "images": [16], "galleryOptions": [16] }], [0, "modal-component", { "imagesLink": [16], "indexImageShowed": [2, "index-image-showed"], "galleryOptions": [16], "currentRotation": [32], "showActions": [32], "images": [32] }]]]], options);
    });
};
export { defineCustomElements };
