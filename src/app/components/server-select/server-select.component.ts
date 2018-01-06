import { Config, AServer } from './../../models/config';
import { BoConfigService } from './../../services/bo-config.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-select',
  templateUrl: './server-select.component.html',
  styleUrls: ['./server-select.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class ServerSelectComponent implements OnInit {
  config: Config;
  serverSelect = 'selectServer';
  routeroutlet = 'router-outlet';
  theServer: AServer = {
    id: '',
    name: '',
    type: ''
  };
  constructor(
    private boConfigService: BoConfigService
  ) { }

  ngOnInit() {
    if (!this.config) {
      document.getElementById(this.routeroutlet).hidden = true;
    }
    this.config = this.boConfigService.getConfigRet(this);
  }

  takeData(config: Config) {
    document.getElementById(this.serverSelect).hidden = true;
    if (!this.config) {
      document.getElementById(this.routeroutlet).hidden = true;
      this.config = config;
      this.addServerSelection(this.serverSelect, 'יש לבחור שרת מתאים', '');
    }
    for (let i = 0; i < this.config.servers.servers.length; i++) {
      this.addServerSelection(this.serverSelect, this.config.servers.servers[i].name, this.config.servers.servers[i].id);
    }
    document.getElementById(this.serverSelect).hidden = false;
  }

  private addServerSelection(elementId: string, name: string, id: string) {
    document.getElementById(elementId).innerHTML =
      document.getElementById(elementId).innerHTML +
      '<option value="' + id +
      '">' + name + '</option>';
  }

  doIt(selectServer: string) {
    for (let i = 1; i < this.config.servers.servers.length; i++) {
      if (this.config.servers.servers[i].id = selectServer) {
        this.theServer = this.config.servers.servers[i];
        break;
      }
    }
    this.boConfigService.setServer(this.theServer);
    console.log(this.theServer);
    if (document.getElementById(this.serverSelect).childNodes[0].nodeName === '#text') {
      document.getElementById(this.serverSelect).removeChild(document.getElementById(this.serverSelect).childNodes[0]);
      document.getElementById(this.serverSelect).removeChild(document.getElementById(this.serverSelect).childNodes[0]);
      document.getElementById(this.routeroutlet).hidden = false;
    }
  }
}
