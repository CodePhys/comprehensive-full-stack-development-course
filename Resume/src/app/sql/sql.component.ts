import { Component } from '@angular/core';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SqlComponent {
  cards = [
    
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
