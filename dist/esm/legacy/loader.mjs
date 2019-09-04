import { a as patchEsm, b as bootstrapLazy } from './chunk-7bfd0333.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["afelio-gallery_2", [[0, "afelio-gallery", { "images": [16], "previousIconUrl": [1, "previous-icon-url"], "nextIconUrl": [1, "next-icon-url"], "rotateIconUrl": [1, "rotate-icon-url"], "closeIconUrl": [1, "close-icon-url"], "deleteIconUrl": [1, "delete-icon-url"], "enableDelete": [4, "enable-delete"], "enableVisualDelete": [4, "enable-visual-delete"], "enableRotate": [4, "enable-rotate"], "enableBackdropClickClose": [4, "enable-backdrop-click-close"], "actions": [16] }], [0, "modal-component", { "enableDelete": [4, "enable-delete"], "enableVisualDelete": [4, "enable-visual-delete"], "enableRotate": [4, "enable-rotate"], "enableBackdropClickClose": [4, "enable-backdrop-click-close"], "previousIconUrl": [1, "previous-icon-url"], "nextIconUrl": [1, "next-icon-url"], "rotateIconUrl": [1, "rotate-icon-url"], "closeIconUrl": [1, "close-icon-url"], "deleteIconUrl": [1, "delete-icon-url"], "imagesLink": [16], "indexImageShowed": [2, "index-image-showed"], "actions": [16], "currentRotation": [32], "showActions": [32], "images": [32] }]]]], options);
    });
};
export { defineCustomElements };
