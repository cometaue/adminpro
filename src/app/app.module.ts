import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { PagesComponent } from "./pages/pages.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { Graficas1Component } from "./pages/graficas1/graficas1.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { BreadcrumbsComponent } from "./shared/breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { APP_ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
