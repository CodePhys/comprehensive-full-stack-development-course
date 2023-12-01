import { Component } from '@angular/core';

@Component({
  selector: 'app-rct',
  templateUrl: './rct.component.html',
  styleUrls: ['./rct.component.css'],
})
export class RctComponent {
  cards = [
    {
      title: "Cos'è React?",
      image: '/assets/images/react-logo.png',
      content: `<b>React</b> è una libreria open-source JavaScript, sviluppata e mantenuta da facebook,
      utilizzata per la creazione di interfacce grafiche per applicazioni web.<br/>
      React è particolarmente noto per la sua capacità di creare interfacce utente dinamiche e interattive,
      e per la sua architettura basata su un concetto chiave chiamato Virtual DOM. <br/>
      I concetti principali di React sono: 
      <ul>
      <li><b>Componenti</li>
      <li><b>Virtual DOM</li>
      <li><b>JSX(Javascript Xml)</li>
      <li><b>Flusso di dati unidirezionale</li>
      <li><b>Gestione dello stato</li>
      <li><b>Riutilizzabilità del codice</li>
      <li><b>Ecosistema Robusto</li>
      </ul>`,
    },
    {
      title: 'Componenti',
      image: '/assets/images/react-component.png',
      content: `Il nucleo di React è basato sul concetto di <b>componenti</b>. Un componente rappresenta una parte <b>isolata</b> e 
      <b>riutilizzabile</b> dell'interfaccia utente, ed è spesso composto da una combinazione di HTML, CSS e JavaScript. 
      I componenti possono essere <b>annidati</b> l'uno dentro l'altro per creare interfacce complesse.
      <br/>Ci sono due tipi principali di componenti in React: <br/>
      <ul>
      <li><b>Componenti Funzionali</b>: costituiti da una funzione che restituisce JSX;</li>
      <li><b>Componenti basati su Classe</b>: forma più avanzata di componenti che possono gestire lo stato interno
      e avere metodi di ciclo di vita;</li>
      </ul> I componenti possono essere utilizzati in altri componenti o nell'applicazione principale.`,
    },
    {
      title: 'Virtual DOM (Documento Oggetto Modello)',
      image: '/assets/images/react-dom.png',
      content: `React utilizza un concetto chiamato Virtual DOM per <b>ottimizzare</b> le operazioni di rendering. 
      Invece di aggiornare direttamente il DOM del browser ogni volta che cambia lo stato di un componente, 
      React crea una <b>rappresentazione virtuale gerarchica</b> del DOM in memoria, <b>confronta</b> le differenze e <b>aggiorna</b> solo le parti 
      interessate del DOM reale. Questo approccio migliora le <b>prestazioni</b> e <b>l'efficienza</b>. <br/>
      <b>Come funziona il DOM:</b>
      <ul>
      <li><b>Rappresentazione virtuale:</b> quando uno stato cambia, React costruisce una nuova rappresentazione leggera e virtuale
      che riflette il cambiamento;</li>
      <li><b>Confronto con DOM Reale:</b> react confronta il nuovo Virtual DOM con lo stato precedente ed individua le modifiche;</li>
      <li><b>Minimizzazione delle modifice al DOM Reale:</b> dopo aver identificato le modifiche, React calcola la sequenza
      più efficiente di modifiche da apportare al DOM Reale;</li>
      <li><b>Aggiornamento del DOM Reale:</b> solo le parti che devono essere modificate vengono effettivamente aggiornate;</li>
      </ul>
      I vantaggi del Virtual DOM sono: <ul>
      <li><b>Miglioramento delle prestazione;</b></li>
      <li><b>Efficienza nell'aggiornamento;</b></li>
      <li><b>Facilità di sviluppo;</b></li>
      </ul>`,
    },
    {
      title: 'JSX (JavaScript XML)',
      image: '/assets/images/jsx-logo.jpg',
      content: `<b>JSX</b>, acronimo di JavaScript XML, è un'estensione di sintassi per JavaScript utilizzata principalmente 
      in React per descrivere la <b>struttura</b> dell'interfaccia utente. JSX rende la definizione e la manipolazione degli elementi
      UI in React più <b>chiare e leggibili</b>, incorporando la sintassi XML direttamente nel codice JavaScript.<br/>
      <b>Aspetti chiave relativi a JSX:</b>
      <ul>
      <li><b>Sintassi simile all'HTML;</b></li>
      <li><b>Integrazione con JavaScript:</b> in JSX è possibile incorporare espressioni JavaScript utilizzando
      le parentesi graffe all'interno di JSX;</li>
      <li><b>Attributi HTML e Proprietà React:</b> è possibile specificare in JSX gli attributi HTML come si fa su un
      qualsiasi file HTML. <br/>Spesso sono utilizzate le proprietà di React per passare dati a componenti React;</li>
      <li><b>Condizioni e cicli:</b> Jsx consente l'uso di strutture di controllo come condizioni e cicli direttamente nel codice;</li>
      <li><b>Trasformazione in JavaScript:</b> durante la fase di compilazione, i file JSX vengono trasformati in
      istruzioni JavaScript valide che possono essere eseguite dal browser;</li>
      </ul>
      In sintesi JSX è una parte essenziale di React che <b>semplifica</b> la creazione di interfacce utente, rendendo il codice più leggibile
      espressivo e simile all'HTML standard. Mentre può sembrare una novità inizialmente, diventa rapidamente una parte intuitiva
      e potente del processo di sviluppo React.`,
    },
    // Add more cards as needed
  ];
}
