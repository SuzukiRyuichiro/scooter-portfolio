import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ['name', 'subtitle', 'Info', 'Projects', 'Contact']

  connect() {

  }

  test() {
    this.nameTarget.innerText = "鈴木龍一郎";
    this.subtitleTarget.innerText = "よろしくお願いします！";
    this.InfoTarget.innerText = "自己紹介";
    this.ProjectsTarget.innerText = "プロジェクト";
    this.ContactTarget.innerText = "連絡先";
  }
}
