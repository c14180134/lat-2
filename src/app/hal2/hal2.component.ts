import { Component, OnInit } from "@angular/core";
import { GlobarnoteService } from "../globarnote.service";

@Component({
  selector: "app-hal2",
  templateUrl: "./hal2.component.html",
  styleUrls: ["./hal2.component.css"]
})
export class Hal2Component implements OnInit {
  notes = [];
  constructor(public globalnote: GlobarnoteService) {
    this.globalnote.getdatanote();
    this.notes = JSON.parse(localStorage.getItem("notes"));
  }

  ngOnInit() {}
}
