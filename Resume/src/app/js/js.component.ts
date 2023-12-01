import { Component } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent {
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
