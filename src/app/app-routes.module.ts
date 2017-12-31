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

// *Doc* Create routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'add-client', component: AddClientComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'client/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
  { path: 'edit-client/:id', component: EditClientComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [],
imports: [
RouterModule.forRoot(appRoutes),
],
exports: [RouterModule]
})

export class AppRoutesModule {}
