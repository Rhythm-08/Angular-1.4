import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ImagesComponent } from './images/images.component';
import { LogoutComponent } from './logout/logout.component';
import { WrongrouteComponent } from './wrongroute/wrongroute.component';
import { CustomstyleDirective } from './customstyle.directive';
import { Usd2inrPipe } from './custom_pipe/usd2inr.pipe';
import { TrimStringPipe } from './custom_pipe/trimString.pipe';
import { CapitalizeFirstChar } from './custom_pipe/capitalizefirstchar.pipe';
import { MyBackgroundDirective } from './shared/my-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsComponent,
    TeachersComponent,
    ImagesComponent,
    LogoutComponent,
    WrongrouteComponent,
    CustomstyleDirective,
    Usd2inrPipe,
    TrimStringPipe,
    CapitalizeFirstChar,
    MyBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
