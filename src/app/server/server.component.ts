import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  component: string;
  test = true;
  cai = "";
  hasThis = false;

  nameCais: string[] = ["eggtomato", "beefgaric","egg"];
  caiMing: string[] = ["cai1", "cai2", "cai3"];
  returnCai: string;

  check(){
    this.cai = this.cai + this.component;
    if (this.nameCais.includes(this.cai)) {

      this.hasThis = true;
      this.returnCai = this.caiMing[this.nameCais.indexOf(this.cai)];
    }


  }
  reset(){
    this.cai = "";
    this.hasThis = false;
  }


}




