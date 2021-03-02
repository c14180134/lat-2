import { Injectable } from "@angular/core";

@Injectable()
export class GlobarnoteService {
  // private metagross : Note;
  // private notes : metagross[] = new Array<metagross>();
  // constructor() {

  //  }

  //  public addnotes(judul: string,isi:string){
  //    this.notes.push(

  //      {judul:judul},
  //      {isi:isi}

  //    )
  //  }
  notes = [];
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [
      { id: 0, judul: "", isi: "" }
    ];
  }
  public addnotes(juduls: string, isis: string) {
    this.notes.push({ id: this.notes.length + 1, judul: juduls, isi: isis });
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
  public getdatanote() {
    return this.notes;
  }
}
export class Note {
  judul: string;
  isi: string;
}
