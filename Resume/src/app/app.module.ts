import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{RouterModule,Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CShComponent } from './csh/csh.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CShComponent,
    
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
        }

      ]
    ),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
