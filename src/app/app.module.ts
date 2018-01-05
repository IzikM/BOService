import { AppRoutesModule } from './app-routes.module';
import { RegisterGuard } from './guards/register.guard';
import { SettingsService } from './services/settings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ClientService } from './services/client.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { BoAuthService } from './services/bo-auth.service';
import { BoConfigService } from './services/bo-config.service';
import { ServerSelectComponent } from './components/server-select/server-select.component';
import { HtmlGetService } from './services/html-get.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    ServerSelectComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [AngularFireDatabase,
    AngularFireDatabaseModule,
    ClientService,
    AuthService,
    AuthGuard,
    BoAuthService,
    BoConfigService,
    SettingsService,
    RegisterGuard,
    HtmlGetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
