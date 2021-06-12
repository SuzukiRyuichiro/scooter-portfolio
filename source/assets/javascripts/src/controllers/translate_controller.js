import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ['name']

  connect() {

  }

  test() {
    this.nameTarget.innerHTML = "鈴木龍一郎";
  }
}
