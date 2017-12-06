import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName= '';
  displayServerName= false;
  serverMessage = '';
  servers = ['Server 1', 'Server '];
  displayButton = 'Display Details';
  txtHide = true;
  clicks = [];

  constructor() {}

  addServer() {
    this.servers.push(this.serverName);
    this.serverMessage = 'Server is well added ' + this.serverName;
    this.displayServerName = true;
  }

  ngOnInit() {
  }

  detailsClick() {
    this.clicks.push( this.clicks.length + 1 );
    this.txtHide = !this.txtHide;
    this.displayButton = this.txtHide ? 'Display Details' : 'Hide Details';
  }

  getClickColor(click: number) {
    return click >= 5 ? 'blue' : '';
  }
}
