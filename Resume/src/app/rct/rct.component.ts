import { Component } from '@angular/core';

@Component({
  selector: 'app-rct',
  templateUrl: './rct.component.html',
  styleUrls: ['./rct.component.css']
})
export class RctComponent {
  cards = [
    
    {
      title: "Cos'è React?",
      image: '/assets/images/react-logo.png',
      content: '<b>React</b>'
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
