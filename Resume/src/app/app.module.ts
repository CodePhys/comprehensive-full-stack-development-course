import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { CShComponent } from './csh/csh.component';
=======
import { CshComponent } from './csh/csh.component';
import { AspnetComponent } from './aspnet/aspnet.component';
import { JsComponent } from './js/js.component';
import { AngComponent } from './ang/ang.component';
import { TscrComponent } from './tscr/tscr.component';
import { RctComponent } from './rct/rct.component';
import { SqlComponent } from './sql/sql.component';
>>>>>>> dcae8c16634f245c114b609f5d39b374c7ddc5d4


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    CShComponent,
=======
    CshComponent,
    AspnetComponent,
    JsComponent,
    AngComponent,
    TscrComponent,
    RctComponent,
    SqlComponent
>>>>>>> dcae8c16634f245c114b609f5d39b374c7ddc5d4
    
  ],
  imports: [
    BrowserModule,
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
