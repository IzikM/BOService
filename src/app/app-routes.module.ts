import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterGuard } from './guards/register.guard';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

import { VitalityComponent } from './components/vitality/vitality.component';
import { OtpComponent } from './components/otp/otp.component';
import { TraceComponent } from './components/trace/trace.component';
import { ServicesComponent } from './components/services/services.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { RetryControlComponent } from './components/retry-control/retry-control.component';
import { SubscriptionTopicsComponent } from './components/subscription-topics/subscription-topics.component';
import { SendSmsComponent } from './components/send-sms/send-sms.component';
import { WhiteListComponent } from './components/white-list/white-list.component';
import { EsbStatisticsComponent } from './components/esb-statistics/esb-statistics.component';
import { ConfigControlComponent } from './components/config-control/config-control.component';

// *Doc* Create routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit-client/:id', component: EditClientComponent, canActivate: [AuthGuard] },

  { path: 'vitality', component: VitalityComponent },
  { path: 'otp', component: OtpComponent },
  { path: 'trace', component: TraceComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'retry', component: RetryControlComponent },
  { path: 'topic', component: SubscriptionTopicsComponent },
  { path: 'sendSms', component: SendSmsComponent },
  { path: 'whitelist', component: WhiteListComponent },
  { path: 'esbstatistics', component: EsbStatisticsComponent },
  { path: 'configcontrol', component: ConfigControlComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
      VitalityComponent,
      ConfigControlComponent,
      EsbStatisticsComponent,
      WhiteListComponent,
      SendSmsComponent,
      SubscriptionTopicsComponent,
      OtpComponent,
      RetryControlComponent,
      TraceComponent,
      ServicesComponent,
      TemplatesComponent
    ],
imports: [
RouterModule.forRoot(appRoutes),
],
exports: [RouterModule]
})

export class AppRoutesModule {}
