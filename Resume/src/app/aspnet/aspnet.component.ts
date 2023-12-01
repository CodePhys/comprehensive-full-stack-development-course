import { Component } from '@angular/core';

@Component({
  selector: 'app-aspnet',
  templateUrl: './aspnet.component.html',
  styleUrls: ['./aspnet.component.css']
})
export class AspnetComponent {
  cards = [
  
    {
      title: 'ASP NET  e NET Core',
      image: '/assets/images/aspcore.png',
      content: 'ASP.NET Core è un framework per applicazioni Web multipiattaforma, open source, capace di creare, in poco tempo, applicazioni di diversa natura (Web, API, desktop, console ..). La prima versione di ASP.NET Core, la 1.0, ben diversa da quella odierna, venne rilasciata nel 2016. ASP.NET (senza il "Core" all\'interno del suo nome), può essere considerato come il predecessore di ASP.NET Core e ha, ovviamente, una storia molto più lunga. Come abbiamo accennato,il framework ASP.NET era stato pensato inizialmente per funzionare esclusivamente su ambienti Microsoft. ASP.NET Core ha, invece, rotto con il passato, permettendo agli sviluppatori di scrivere codice sia nativamente, ovvero in ambienti Microsoft, che su Linux o MacOS.'
    },
    {
      title: 'ASP NET MVC',
      image: '/assets/images/aspmvc.png',
      content: 'Content for Card 4'
    },
    {
      title: 'Entity Framework',
      image: '/assets/images/entityf.png',
      content: 'Content for Card 5'
    },
    {
      title: 'Identity Framework',
      image: '/assets/images/aspcore.png',
      content: 'Content for Card 6'
    },
    // Add more cards as needed
  ];

}
