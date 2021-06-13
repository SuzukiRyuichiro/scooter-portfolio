import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ['name', 'subtitle', 'Info', 'Projects', 'Contact', 'about', 'hey', 'aboutme', 'pro']

  connect() {
    console.log(this.ProjectsTargets.length);
  }

  test() {
    this.nameTarget.innerText = "鈴木龍一郎";
    this.subtitleTarget.innerText = "よろしくお願いします！";
    this.InfoTargets.forEach((e) => e.innerText = "自己紹介");
    this.ProjectsTargets.forEach((e) => e.innerText = "プロジェクト");
    this.ContactTargets.forEach((e) => e.innerText = "連絡先");
    this.heyTarget.innerText = "こんにちは！";
    this.aboutmeTarget.innerText = "フルスタックエンジニアの鈴木龍一郎です。文系の学部に通っていますが、基本的にずっとプログラミングの勉強をしています。大学3年のときに、Le Wagon Tokyoで9週間のフルタイム・コーディング・ブートキャンプに参加し、卒業後はそこでTAもやっています。私は日本語/英語のバイリンガルです🇯🇵🇬🇧";
  }
}
