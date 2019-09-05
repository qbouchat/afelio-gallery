import { p as patchBrowser, g as globals, b as bootstrapLazy } from './chunk-ade7c7d9.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["modal-component",[[0,"modal-component",{"imagesLink":[16],"indexImageShowed":[2,"index-image-showed"],"galleryOptions":[16],"currentRotation":[32],"showActions":[32],"images":[32]},[[4,"keydown","handleKeyDown"]]]]],["afelio-gallery",[[0,"afelio-gallery",{"images":[16],"galleryOptions":[16]}]]]], { resourcesUrl });
});
