import { Component, OnInit } from '@angular/core';

@Component({
 //selector: '[app-servers]',
 selector: '.app-servers',
 //template: `
 //<app-server></app-server>
 //<app-server></app-server>`,
 templateUrl: './servers.component.html',
 styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer = false;
 serverCreationStatus = 'No server was created!';
 serverName = 'Testserver';
 serverCreated = false;
 servers = ['Testserver', 'Testserver 2'];

 constructor() {
   setTimeout(() => {
     this.allowNewServer = true;
   }, 2000)
 }

 ngOnInit(): void {
 }
onCreateServer() {
  this.serverCreated = true;
 this.serverCreationStatus = 'Server was created! Its name is ' + this.serverName;
 this.servers.push(this.serverName);
}
onUpdateServerName(event: Event) {
 this.serverName = (<HTMLInputElement>event.target).value;
}
}
