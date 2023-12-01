import { Component } from '@angular/core';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent {
  cards = [
    
    {
      title: 'SQL',
      image: '/assets/images/sql.png',
      content: 'SQL (acronimo di Structured Query Language) è il linguaggio di interrogazione più diffuso tra quelli usati per l\'interazione con i principali Database Management Systems (DBMS), soprattutto relazionali. Chi ha necessità di utilizzare database sul proprio server, non può prescindere dalla conoscenza di SQL. Questa guida parte dalla sintassi di base, per arrivare a coprire tutti i principali concetti avanzati.'
    },
    {
      title: 'Cos\’è un database',
      image: '/assets/images/db.png',
      content: 
      'Un database è una raccolta organizzata di informazioni, strutturata in modo tale da consentirne un\’efficiente ricerca, recupero, aggiornamento e gestione. Esso funziona come un archivio digitale, dove i dati vengono memorizzati in tabelle, righe e colonne, per facilitarne l\’accesso e l\’analisi. I database sono fondamentali per molte applicazioni, come siti web, applicazioni mobili e sistemi di gestione aziendale, poiché permettono di archiviare e gestire enormi quantità di dati in modo ordinato e sicuro.'
    },
    {
      title: 'Structured Query Language',
      image: '/assets/images/query.png',
      content: '<h2>Comandi Principali:</h2> <ul> <li><strong>SELECT:</strong> Utilizzato per recuperare dati da una o più tabelle.</li> <li><strong>INSERT:</strong> Per inserire nuovi dati in una tabella.</li> <li><strong>UPDATE:</strong> Modifica i dati esistenti in una tabella.</li> <li><strong>DELETE:</strong> Elimina dati da una tabella.</li> </ul> <h2>DDL (Data Definition Language):</h2> <ul> <li><strong>CREATE:</strong> Crea un nuovo oggetto nel database (tabella, indice, etc.).</li> <li><strong>ALTER:</strong> Modifica la struttura di un oggetto esistente.</li> <li><strong>DROP:</strong> Elimina un oggetto dal database.</li> </ul>'
      
    },
    {
      title: 'Structured Query Language',
      image: '/assets/images/query.png',
      content: '<h2>DML (Data Manipulation Language):</h2> <ul> <li><strong>INSERT, UPDATE, DELETE:</strong> Manipolano i dati all\'interno delle tabelle.</li> </ul> <h2>CLAUSE:</h2> <ul> <li><strong>WHERE:</strong> Filtra i dati basandosi su una condizione.</li> <li><strong>ORDER BY:</strong> Ordina i risultati in base a una colonna.</li> <li><strong>GROUP BY:</strong> Raggruppa i dati in base a una o più colonne.</li> <li><strong>JOIN:</strong> Combina righe di due o più tabelle in base a una condizione di join.</li> </ul>'
      
    },
    {
      title: 'Microsoft SQL Server',
      image: '/assets/images/sqlserv.png',
      content: 'SQL Server di Microsoft è un sistema di gestione dei database relazionali (RDBMS) completo e potente. Una sua caratteristica importante è il Sistema di Gestione dei Database Relazionali (RDBMS): SQL Server è progettato per gestire database relazionali, organizzati in tabelle e relazioni. Utilizza il linguaggio SQL per definire schemi, eseguire query e gestire i dati.'
    },
    
  ];

}
