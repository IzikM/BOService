import { BoAuthService } from './bo-auth.service';
import { Auth } from './../models/auth';
import { AServer, APage, AMenuItem, AServerList, APageList, Config } from './../models/config';
import { Injectable } from '@angular/core';
import { HtmlGetService } from './html-get.service';

@Injectable()
export class BoConfigService {
  private savePi = 0;
  private saveP: any[] = [this];
  private config: Config;
  private auth: Auth;

  constructor(private authService: BoAuthService,
    private htmlGetService: HtmlGetService) {
      this.htmlGetService.getInfo('config', this);
  }

  getConfigRet(retP: any) {
    console.log('BoConfigService getConfigRet. I am ', this);
    console.log('BoConfigService getConfigRet got ', retP, ' have ', this.saveP);
    console.log('BoConfigService getConfigRet returning config ', this.config);
    if (this.config) {
      console.log('BoConfigService getConfigRet right back atcha');
      retP.takeData(this.config);
    } else {
      console.log('BoConfigService getConfigRet saving you to return');
      if (this.saveP[this.savePi] !== this) {
        this.savePi = this.savePi + 1;
      }
      this.saveP[this.savePi] = retP;
      }
    return this.config;
  }

  private takeDataFromGet(configData: Config) {
    console.log('BoConfigService takeData got ', configData, ' have ', this.saveP);
    this.auth = this.authService.getAuth();
    console.log('got Auth for config', this.auth);
    for (let i = 0; i < configData.pages.pages.length; i++) {
      let isAllowed = false;
      for (let j = 0; j < this.auth.membership.length; j++) {
        for (let k = 0; k < configData.pages.pages[i].groups.length; k++) {
          if (configData.pages.pages[i].groups[k] === this.auth.membership[j]) {
            isAllowed = true;
          }
        }
      }
      if (!isAllowed) {
        configData.pages.pages[i] = null;
      }
    }

    for (let i = 0; i < configData.pages.pages.length; i++) {
      while (configData.pages.pages[i] === null && i < configData.pages.pages.length) {
        configData.pages.pages.splice(i, 1);
      }
    }
    this.config = configData;
    console.log('BoConfigService takeData returning config ', this.config);

    // if (this.config.debugLevel = 'Debug') {
    //   this.logConfig();
    // }

    let retP: any = this;
    retP = this.getRetP();
    while (retP !== null) {
      retP.takeData(this.config);
      retP = this.getRetP();
    }

    return this.config;
  }

  private logConfig() {
    console.log('config', this.config);
    const headTxt = 'Options config: ';
    for (let i = 0; i < this.config.servers.servers.length; i++) {
      console.log(headTxt + 'Srv[' + i + ']:Id ' + this.config.servers.servers[i].id +
        '. Name ' + this.config.servers.servers[i].name +
        '. Type ' + this.config.servers.servers[i].type);
    }

    for (let i = 0; i < this.config.pages.pages.length; i++) {
      if (this.config.pages.pages[i].groups[0] !== 'None') {
        let auths = '';
        for (let ii = 0; ii < this.config.pages.pages[i].groups.length; ii++) {
          auths = auths + '\\' + this.config.pages.pages[i].groups[ii];
        }
        console.log(headTxt + 'page[' + i + ']:page ' + this.config.pages.pages[i].name +
          '. route ' + this.config.pages.pages[i].route +
          '. auth ' + auths +
          '. serverType ' + this.config.pages.pages[i].serverType);
      }
    }

    for (let i = 0; i < this.config.menuItems.menuItem.length; i++) {
      console.log(headTxt + 'menuItem[' + i + ']:page ' + this.config.menuItems.menuItem[i].name);
    }

  }

// getters and setters
// *******************

  private addRetP(retP: any) {
    console.log('BoConfigService addRetP adding retP ', retP);
    this.savePi = this.savePi + 1;
    this.saveP[this.savePi] = retP;
  }

  private getRetP() {
    let retP = this.saveP[this.savePi];
    this.saveP[this.savePi] = null;
    if (this.savePi > 0) {
      this.savePi = this.savePi - 1;
    }
    if (retP === this) {
      retP = null;
    }
    console.log('BoConfigService getRetP returning retP ', retP);
    return retP;
  }

  setServer(theServer: AServer) {
    console.log('BoConfigService setServer setting server ', theServer);
    this.config.server = theServer;
  }

  getServer() {
    console.log('BoConfigService getServer returning server ', this.config.server);
    return this.config.server;
  }

  setDebugLevel(debugLevel: string) {
    console.log('BoConfigService setDebugLevel setting debugLevel ', debugLevel);
    this.config.debugLevel = debugLevel;
  }

  getDebugLevel() {
    console.log('BoConfigService getDebugLevel returning debugLevel ', this.config.debugLevel);
    return this.config.debugLevel;
  }

  getServers() {
    console.log('BoConfigService getServers returning servers ', this.config.servers);
    return this.config.servers;
  }

  getPages() {
    console.log('BoConfigService getPages returning pages ', this.config.pages);
    return this.config.pages;
  }

  getConfig() {
    console.log('BoConfigService getConfig returning config ', this.config);
    return this.config;
  }

}
