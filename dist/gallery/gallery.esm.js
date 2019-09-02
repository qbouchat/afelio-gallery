import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-d85ca9fa.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["modal-component",[[0,"modal-component",{"previousIconUrl":[1,"previous-icon-url"],"nextIconUrl":[1,"next-icon-url"],"rotateIconUrl":[1,"rotate-icon-url"],"closeIconUrl":[1,"close-icon-url"],"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"currentRotation":[32]}]]],["afelio-gallery",[[0,"afelio-gallery",{"images":[16],"previousIconUrl":[1,"previous-icon-url"],"nextIconUrl":[1,"next-icon-url"],"rotateIconUrl":[1,"rotate-icon-url"],"closeIconUrl":[1,"close-icon-url"]}]]]], { resourcesUrl });
});
