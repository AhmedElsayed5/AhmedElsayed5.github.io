export default class UserInfo {
  constructor(nameSelector, jobSelector, userAvatar) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
    this._userAvatar = document.querySelector(userAvatar);
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
      avatar: this.getAvatar(),
    };
  }
  setUserInfo({ name, about, avatar }) {
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
    this.setAvatar(avatar);
  }

  setAvatar(value) {
    this._userAvatar.alt = this.getUserInfo().name;
    this._userAvatar.src = value;
  }

  getAvatar() {
    return this._userAvatar.src;
  }
}
