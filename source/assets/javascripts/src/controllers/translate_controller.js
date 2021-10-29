import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [
    "name",
    "subtitle",
    "Info",
    "Projects",
    "pheader",
    "Contact",
    "about",
    "hey",
    "aboutme",
    "pro",
    "checkbox",
    "mehead",
    "Socials",
  ];

  connect() {

  }

  japanese() {
    this.nameTarget.innerText = "鈴木龍一郎";
    this.subtitleTarget.innerText = "よろしくお願いします！";
    this.meheadTarget.innerText = "自己紹介";
    this.InfoTarget.innerText = "自己紹介";
    this.ProjectsTarget.innerText = "プロジェクト";
    this.ProjectsTarget.classList.add("japanese");
    this.pheaderTarget.innerText = "プロジェクト";
    this.ContactTarget.innerText = "連絡先";
    this.ContactTarget.classList.add("japanese");
    this.SocialsTarget.innerText = "ソーシャルメディア";
    this.heyTarget.innerText = "こんにちは！";
    this.aboutmeTarget.innerText =　"フルスタックエンジニアの鈴木龍一郎です。文系の学部に通っていますが、基本的にずっとプログラミングの勉強をしています。大学3年のときに、Le Wagon Tokyoで9週間のフルタイム・コーディング・ブートキャンプに参加し、卒業後はそこでTAもやっています。現在は、TAに加えて、2つの会社でフルスタックエンジニアとしてフリーランスをしています。使用言語は、Ruby, PHP, JS, フレームワークはRails, Vue, あとは社内フレームワークを使って開発しています。日本語と英語のバイリンガルです🇯🇵🇬🇧";
    this.InfoTarget.classList.add("japanese");
  }

  english() {
    this.nameTarget.innerText = "Ryuichiro Suzuki";
    this.subtitleTarget.innerText = "or many people call me Scooter";
    this.meheadTarget.innerText = "About me";
    this.InfoTarget.innerText = "Info";
    this.ProjectsTarget.innerText = "Projects";
    this.ProjectsTarget.classList.remove("japanese");
    this.ContactTarget.classList.remove("japanese");
    this.InfoTarget.classList.remove("japanese");
    this.pheaderTarget.innerText = "Projects";
    this.ContactTarget.innerText = "Contact";
    this.SocialsTarget.innerText = "Socials";
    this.heyTarget.innerText = "hey👋 I'm Scooter 🛵";
    this.aboutmeTarget.innerText =　"I am a full-stack web developer and very passionate about technology and computer science. I participated in 9 week full-time coding bootcamp at Le Wagon Tokyo and graduated in March 2021. Since then, I am learning new concepts everyday to become a better developer. I am currently freelancing in two different companies as a fullstack developer using Rails, Vue, PHP, and many other tools. I am a Japanese / English bilingual 🇯🇵🇬🇧";
  }

  toggle() {
    if (this.checkboxTarget.checked) {
      this.japanese();
    } else {
      this.english();
    }
  }
}
