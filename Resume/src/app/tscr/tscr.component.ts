import { Component } from '@angular/core';

@Component({
  selector: 'app-tscr',
  templateUrl: './tscr.component.html',
  styleUrls: ['./tscr.component.css'],
})
export class TscrComponent {
  cards = [
    {
      title: "Cos'è TypeScript?",
      image: '/assets/images/ts-logo.png',
      content: `<b>TypeScript</b> è un linguaggio di programmazione open
      source sviluppato da Microsoft. Si tratta di un Super-set di
      JavaScript che basa le sue caratteristiche su ES6. Il linguaggio <b>estende</b> la sintassi di JavaScript in modo che
      qualunque programma scritto in JavaScript sia anche in
      grado di funzionare con TypeScript senza nessuna
      modifica. È stato progettato per lo sviluppo di <b>grandi
      applicazion</b> ed è destinato a essere compilato in
      JavaScript per poter essere interpretato da qualunque
      web browser o app.`,
    },
    {
      title: 'Principali caratteristiche di TypeScript',
      image: '/assets/images/typescript-js.png',
      content: `Le principale caratteristiche di TypeScript sono:
      <ul>
      <li><b>Sistema di Tipi</b></li>
      <li><b>Oggetti, interfacce e classi</b></li>
      <li><b>Compilazione</b></li>
      <li><b>Supporto per Moduli</b></li>
      </ul>`,
    },
    {
      title: 'Principali caratteristiche di TypeScript',
      image: '/assets/images/ts-pros-cons.png',
      content: `<b>Sistema di tipi:</b> Typescript introduce un sistema di tipi che consente agli sviluppatori di specificare
      il tipo di variabile, parametro di funzione, valore di ritorno ecc... Questo sistema di tipi statici aiuta a rilevare
      gli errori nel codice durante la fase di sviluppo, prima dell'esecuzione del programma;<br/>
      <b>Oggetti, interfacce e classi:</b> TypeScript supporta concetti orientati agli oggetti come interfacce e classi,
      che possono essere utilizzati per organizzare il codice in modo più strutturato e per facilitare la creazione di code
      più comprensibili e manutenibili;<br/>
      <b>Compilazione:</b> il codice TypeScript deve essere compilato in JavaScript<br/> per essere eseguito nel browser o negli
      ambienti JavaScript.La compilazione può<br/> essere effettuata tramite
      il compilatore TypeScript("tsc")<br/> che converte il codice TypeScript in JavaScript;<br/>
      <b>Supporto per moduli:</b> TypeScript offre un sistema di moduli che consente<br/> agli sviluppatori di organizzare
      il loro codice in moduli riutilizzabili,<br/> migliorando la struttura e la manutenibilità del codice;<br/>
      `,
    },
    // Add more cards as needed
  ];
}
