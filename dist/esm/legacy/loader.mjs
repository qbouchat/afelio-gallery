import { a as patchEsm, b as bootstrapLazy } from './chunk-0119a5ef.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["afelio-gallery_2", [[0, "afelio-gallery", { "images": [16], "previousIconUrl": [1, "previous-icon-url"], "nextIconUrl": [1, "next-icon-url"], "rotateIconUrl": [1, "rotate-icon-url"], "closeIconUrl": [1, "close-icon-url"], "enableRotate": [4, "enable-rotate"], "backropClickClose": [4, "backrop-click-close"] }], [0, "modal-component", { "enableRotate": [4, "enable-rotate"], "backropClickClose": [4, "backrop-click-close"], "previousIconUrl": [1, "previous-icon-url"], "nextIconUrl": [1, "next-icon-url"], "rotateIconUrl": [1, "rotate-icon-url"], "closeIconUrl": [1, "close-icon-url"], "imagesLink": [16], "indexImageShowed": [2, "index-image-showed"], "currentRotation": [32] }]]]], options);
    });
};
export { defineCustomElements };
