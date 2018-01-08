import User from './User';
import Image from './Image';

export default class Giphy {
  id: string;
  title: string;
  type: string;
  slug: string;
  url: string;
  user: User;
  image: Image;
  static build(data: any) {
    let _giphy = new Giphy();
    _giphy.id = data.id;
    _giphy.title = data.title || '#NA';
    _giphy.type = data.type;
    _giphy.slug = data.slug;
    _giphy.url = data.url;
    _giphy.user = data.user && User.build(data.user);
    _giphy.image = Image.build(data.images);
    return _giphy;
  }
}