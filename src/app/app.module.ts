import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Make sure FormsModule is imported
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; // Make sure LoginComponent is imported

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

// Define some routes as an example
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // Other specific routes here
  { path: '', redirectTo: '/welcome', pathMatch: 'full' } // Redirect to welcome or another route
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, // Declare LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['bentraining.it'], // Update with your domain
        disallowedRoutes: ['http://dev.backend.torental.bentraining.it/api/auth/login'],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
