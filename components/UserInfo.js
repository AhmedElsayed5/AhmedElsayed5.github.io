export default class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._nameInput = document.querySelector(nameSelector);
    this._jobInput = document.querySelector(jobSelector);
    this._profileName = document.querySelector(".profile__title");
    this._profileJob = document.querySelector(".profile__description");
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }
  setUserInfo(name, job) {
    this._profileName.textContent = name;
    this._profileJob.textContent = job;
  }
}
