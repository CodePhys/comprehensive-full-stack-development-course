import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CshComponent } from './csh/csh.component';
import { AspnetComponent } from './aspnet/aspnet.component';
import { JsComponent } from './js/js.component';
import { AngComponent } from './ang/ang.component';
import { TscrComponent } from './tscr/tscr.component';
import { RctComponent } from './rct/rct.component';
import { SqlComponent } from './sql/sql.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { GitComponent } from './git/git.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CshComponent,
    AspnetComponent,
    JsComponent,
    AngComponent,
    TscrComponent,
    RctComponent,
    SqlComponent,
    GitComponent,
  
      ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          component:HomeComponent
        },
        {
          path:'home',
          component:HomeComponent
        },
        {
          path:'csh',
          component:CshComponent
        },
        {
          path:'aspnet',
          component:AspnetComponent
        },
        {
          path:'js',
          component:JsComponent
        },
        {
          path:'ang',
          component:AngComponent
        },
        {
          path:'tscr',
          component:TscrComponent
        },
        {
          path:'rct',
          component:RctComponent
        },
        {
          path:'sql',
          component:SqlComponent
        },
        {
          path:'git',
          component:GitComponent
        },
        {
          path:'**',
          component:HomeComponent
        },
        


      ]
    ),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
