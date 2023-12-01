import {Component} from '@angular/core';


@Component({
  selector: 'app-csh',
  templateUrl: './csh.component.html',
  styleUrls: ['./csh.component.css'],
})


export class CshComponent {

  
  cards = [
    {
      title: 'Cos\'è C# ?',
      image: '/assets/images/Logo_C_sharp.png',
      content:`C# è un <b>linguaggio di programmazione</b> multi-paradigma
       che supporta tutti i concetti della <b>programmazione orientata agli oggetti.</b>
       I programmi C# sono costituiti da uno o più file.
        Ogni file contiene zero o più <b>namespace.</b>\n
        Un namespace contiene tipi come <b>classi, struct,
        interfacce, enumerazioni e delegati o altri namespace</b>.`
      },
    {
      title: 'Concetti fondamentali di C#',
      image: '/assets/images/Logo_C_sharp.png',
      content: `<ul>
      <li>Classi</li>
      <li>Struct</li>
      <li>Namespaces</li>
      <li>Interfacce</li>
      <li>Enumerazioni</li>
      <li>Delegati</li>
      </ul>`,
    },
    {
      title: 'Le classi ',
      image: '/assets/images/Classi_C_Sharp.png',
      content: `
      In C#, una "classe" è un costrutto fondamentale
       utilizzato per definire oggetti.<br>
        Una classe è una struttura che rappresenta
         un modello o un tipo di dati che contiene<br>
          dati (campi o variabili)<br> e metodi (funzioni)
           che operano su quei dati.<br><br> Le classi vengono
            utilizzate per organizzare e modellare il
             comportamento degli oggetti.<br>
             Le classi vengono utilizzate per creare istanze (oggetti) specifici di quel tipo.`
    },
    {
      title: 'Struct',
      image: '/assets/images/struct_C_sharp.png',
      content: 'Un tipo di struttura (o tipo struct) è un tipo valore che può incapsulare dati e funzionalità correlate. Usare la struct parola chiave per definire un tipo di struttura:'
    },
    {
      title: 'Namespace',
      image: '/assets/images/Namespace_C_sharp.png',
      content: `Gli spazi dei nomi vengono usati<br>
       frequentemente nella programmazione C# in due modi.<br>
        Prima di tutto, .NET usa spazi dei nomi <br>
        per organizzare le numerose classi.<br>
        Secondo, dichiarando i propri spazi dei nomi <br>
        è possibile controllare l'ambito dei nomi di classi<br>
         e metodi nei progetti di programmazione più grandi.<br>
          Usare la parola chiave namespace per dichiarare uno spazio dei nomi,<br>
         come nell'esempio seguente:`
    },
    {
      title: 'Interfacce',
      image: 'https://via.placeholder.com/300',
      content: `interfaccia contiene definizioni per un gruppo<br>
       di funzionalità correlate che un oggetto non astratto<br> 
       class o struct un oggetto deve implementare. <br>
       Un'interfaccia può definire static metodi, che devono avere un'implementazione.<br>
        Un'interfaccia può definire un'implementazione predefinita per i membri.<br>
         Un'interfaccia potrebbe non dichiarare i dati dell'istanza, ad esempio campi,<br>
          proprietà implementate automaticamente o eventi simili alla proprietà.`
    },
    // Add more cards as needed
  ];

}
