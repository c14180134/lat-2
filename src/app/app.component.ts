import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobarnoteService } from "./globarnote.service";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalnote: GlobarnoteService) {}
  name = "Angular " + VERSION.major;

  notes = [];

  judul = "";
  isi = "";

  openlist() {
    this.router.navigate(["/hal2"]);
  }
  openfav() {
    this.router.navigate(["/hal3"]);
  }
  savedata(titel: string, cont: string) {
    // var bentuk= {
    //   "id"     : this.fid,
    //   "id_soal" : "s"+(this.soals.length+1),
    //   "question": "",
    //   "jawaban" : ""
    // }
    this.globalnote.addnotes(this.judul, this.isi);
  }
}
