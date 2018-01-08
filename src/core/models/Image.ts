export default class Image {
  previewSrc: string;
  originalSrc: string;
  static build(image: any) {
    let _image = new Image();
    _image.previewSrc = image.preview_gif && image.fixed_height_small.url;
    _image.originalSrc = image.original && image.original.url;
    return _image;
  }
}