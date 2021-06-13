import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ['name', 'subtitle']

  connect() {

  }

  test() {
    this.nameTarget.innerText = "鈴木龍一郎";
    this.subtitleTarget.innerText = "よろしくお願いします！";
  }
}
