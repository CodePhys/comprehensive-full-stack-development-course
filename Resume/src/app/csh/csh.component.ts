import {Component} from '@angular/core';


@Component({
  selector: 'app-csh',
  templateUrl: './csh.component.html',
  styleUrls: ['./csh.component.css'],
})


export class CshComponent {

  
  cards = [
    {
      title: 'Card 1',
      image: '/assets/images/Logo_C_sharp.png',
      content:" Il C# è un linguaggio di programmazione multi-paradigma che supporta tutti i concetti della programmazione orientata agli oggetti."

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
