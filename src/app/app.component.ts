import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) {}
  name = "Angular " + VERSION.major;

  judul = "";
  isi = "";

  openlist() {
    this.router.navigate(["/hal2"]);
  }
  openfav(){
    this.router.navigate(["/hal3"]);
  }
  savedata(){
    
  }
}
