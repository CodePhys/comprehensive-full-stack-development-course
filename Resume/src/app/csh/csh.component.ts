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
      content:`C# è un linguaggio di programmazione multi-paradigma
       che supporta tutti i concetti della programmazione orientata agli oggetti.
       I programmi C# sono costituiti da uno o più file.
        Ogni file contiene zero o più namespace.\n
        Un namespace contiene tipi come classi, struct,
        interfacce, enumerazioni e delegati o altri spazi dei nomi.
        L\'esempio seguente è lo scheletro di un programma C# che contiene tutti questi elementi.`,
    },
    {
      title: 'Card 2',
      image: 'https://via.placeholder.com/300',
      content: 'Content for Card 2'
    },
    {
      title: 'Card 3',
      image: 'https://via.placeholder.com/300',
      content: 'Content for Card 3'
    },
    {
      title: 'Card 4',
      image: 'https://via.placeholder.com/300',
      content: 'Content for Card 4'
    },
    {
      title: 'Card 5',
      image: 'https://via.placeholder.com/300',
      content: 'Content for Card 5'
    },
    {
      title: 'Card 6',
      image: 'https://via.placeholder.com/300',
      content: 'Content for Card 6'
    },
    // Add more cards as needed
  ];

}
