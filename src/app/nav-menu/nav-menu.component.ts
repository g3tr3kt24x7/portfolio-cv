import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(private _http:HttpClient, private _fileSaver:FileSaverService) { }

  ngOnInit() {
  }

  download(){
    const filename="RohanMaharjan.pdf";
    this._http.get("assets/files/CV.pdf",{
      observe:'response',
      responseType: 'blob'
    }).subscribe(res =>{
      this._fileSaver.save(res.body, filename);
    })
  }

}
