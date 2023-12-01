import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  cards = [
    
    {
      title: 'Benvenuti al nostro riassunto completo del corso di sviluppo software',
      image: '/assets/images/home.png',
      content: 'Una panoramica che offre un\'occhiata ravvicinata agli argomenti chiave che abbiamo esplorato e padroneggiato insieme. Nel corso di questa avventura formativa, abbiamo navigato attraverso una serie di tecnologie e linguaggi di programmazione fondamentali nel panorama attuale dello sviluppo web e software.Da C#, noto per la sua potenza e versatilità nell\'ambito dello sviluppo .NET, a SQL Server, un sistema di gestione di database robusto e affidabile, abbiamo gettato le basi per una comprensione solida delle tecnologie back-end.'
    },
    {
      title: 'Benvenuti al nostro riassunto completo del corso di sviluppo software',
      image: '/assets/images/home.png',
      content: 'Non ci siamo fermati qui: abbiamo esplorato ASP.NET MVC, un framework potente per costruire applicazioni web dinamiche e ricche di funzionalità, garantendo un approfondimento sulle tecniche di sviluppo lato server. Abbiamo poi virato verso il front-end, dove JavaScript e TypeScript ci hanno aperto le porte alla programmazione di interfacce utente interattive e moderne. Infine, ci siamo immersi nel mondo dei framework front-end Angular e React, due giganti nel campo dello sviluppo di single-page applications e interfacce utente reattive.'
    },
    {
      title: 'Benvenuti al nostro riassunto completo del corso di sviluppo software',
      image: '/assets/images/home.png',
      content: 'Questo riassunto serve non solo come un promemoria delle competenze acquisite, ma anche come una guida per ulteriori esplorazioni e apprendimenti. Che siate sviluppatori in erba o esperti che cercano di rinfrescare le loro conoscenze, queste pagine rappresentano un punto di riferimento essenziale per il vostro viaggio nel mondo dello sviluppo software.'
    },
  
    // Add more cards as needed
  ];

}
