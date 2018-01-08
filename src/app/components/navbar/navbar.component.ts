import {
  BoConfigService
} from './../../services/bo-config.service';
import {
  Config
} from './../../models/config';
import {
  SettingsService
} from './../../services/settings.service';
import {
  AuthService
} from './../../services/auth.service';
import {
  FlashMessagesService
} from 'angular2-flash-messages';
import {
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';
import { of
} from 'rxjs/observable/of';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggenIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  navbarId = 'navbarSide';
  insertLocation: InsertPosition = 'afterbegin'; // 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

  config: Config;

  showVitality = false;
  showTrace = false;
  showOtp = false;
  showServices = false;
  showTemplates = false;
  showConfig = false;
  showConfigControl = false;
  showEsbStatistics = false;
  showWhiteList = false;
  showSendSms = false;
  showSubscriptionTopics = false;
  showRetryControl = false;

  constructor(
    private boConfigService: BoConfigService,
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private settingsService: SettingsService

  ) {
    this.boConfigService.getConfigRet(this);
  }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggenIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggenIn = false;
      }
    });
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {
      cssClass: 'alert-success',
      timeout: 4000
    });
    this.router.navigate(['/login']);
  }

  takeData(config: Config) {
    this.config = config;
    for (let i = 0; i < this.config.pages.pages.length; i++) {
      if (this.config.pages.pages[i].groups[0] !== 'None') {
        this.addRoutePage(this.config.pages.pages[i].route, this.config.pages.pages[i].name);
      }
    }
  }



  addRoutePage(route: string, pageName: string) {
    switch (pageName) {
      case 'Vitality':
        {
          this.showVitality = true;
          break;
        }
      case 'Otp':
        {
          this.showOtp = true;
          break;
        }
      case 'Trace':
        {
          this.showTrace = true;
          break;
        }
      case 'Services':
        {
          this.showServices = true;
          break;
        }
      case 'Templates':
        {
          this.showTemplates = true;
          break;
        }
      case 'Config':
        {
          this.showConfig = true;
          break;
        }
      case 'ConfigCntrl':
        {
          this.showConfigControl = true;
          break;
        }
      case 'EsbStatistics':
        {
          this.showEsbStatistics = true;
          break;
        }
      case 'WhiteList':
        {
          this.showWhiteList = true;
          break;
        }
      case 'SendSms':
        {
          this.showSendSms = true;
          break;
        }
      case 'Topics':
        {
          this.showSubscriptionTopics = true;
          break;
        }
      case 'Retry':
        {
          this.showRetryControl = true;
          break;
        }
      default:
        {
          // statements;
          break;
        }
    }

    if (pageName === 'Wow') {
      document.getElementById(this.navbarId).insertAdjacentHTML(this.insertLocation,
        '     <li _ngcontent-c1 class="nav-item">' +
        '         <a _ngcontent-c1 class="nav-link" href="' +
        route +
        '" routerLink="' +
        route +
        '" ng-reflect-router-link="' +
        route +
        '">' +
        pageName + '</a>' +
        '     </li>');
    }
  }
}
