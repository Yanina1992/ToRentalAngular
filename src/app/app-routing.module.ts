import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";

/**
 * The `routes` variable is an array of Route objects.
 * Each Route object defines a specific route of an application.
 *
 * @type {Array<Route>}
 */

// Define some routes as an example
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Other specific routes here
  { path: '', redirectTo: '/welcome', pathMatch: 'full' } // Redirect to welcome or another route
];

/**
 * NgModule representing the application routing configuration.
 *
 * This module is used to import and configure the Angular router for the application.
 * It utilizes the RouterModule.forRoot() method to define the application's routes.
 * The RouterModule.forRoot() method must be called only once in the application's root module.
 *
 * The AppRoutingModule class is responsible for exporting the configured router module so that it can be used in other parts of the application.
 *
 * Usage:
 * ```
 * @NgModule({
 *   imports: [AppRoutingModule],
 *   exports: [AppRoutingModule]
 * })
 * export class AppModule { }
 * ```
 *
 * @ngModule AppRoutingModule
 * @import RouterModule.forRoot(routes) - Configures the routes for the application.
 * @export RouterModule - Exports the configured router module for use in other modules.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
