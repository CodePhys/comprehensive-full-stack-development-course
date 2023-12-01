import { Component } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JsComponent {
  cards = [
    
    {
      title: 'Javascript',
      image: '/assets/images/js.png',
      content: 'JavaScript è il principale linguaggio di programmazione per lo sviluppo di web applications. Sempre più diffuso, tocca ormai gli ambiti mobile, server e desktop. Questa guida fornisce una panoramica completa e dettagliata per imparare ad utilizzarlo al meglio, partendo dalle caratteristiche fondamentali di JavaScript, fino ad arrivare ai dettagli più complessi ed avanzati.'
    },
    
    // Add more cards as needed
  ];

}
