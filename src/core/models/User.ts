export default class User {
  avatar: string;
  banner: string;
  profile: string;
  userName: string;
  displayName: string;
  static build(user: any) {
    let _user = new User();
    _user.avatar = user.avatar_url;
    _user.banner = user.banner_url;
    _user.profile = user.profile_url;
    _user.userName = user.username;
    _user.displayName = user.display_name;
    return _user;
  }
}