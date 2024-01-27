import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  getDrinkItems(): Observable<DrinkItem[]> {
    // Simula una richiesta HTTP
    const fakeDrinkList: DrinkItem[] = [
      { id: 1, name: 'Martini', description: 'Gin, Vermouth, twist di limone', price: 10, category: 'classic-drink'},
      { id: 2, name: 'Negroni', description: 'Gin, Vermouth Rosso, Campari', price: 10, category: 'classic-drink' },
      { id: 3, name: 'Margarita', description: 'Tequila, Triple sec, succo di lime', price: 10, category: 'classic-drink' },
      { id: 4, name: 'Old Fashioned', description: 'Bourbon, zucchero, Angostura bitters', price: 10, category: 'classic-drink' },
      { id: 5, name: 'Mystic Elixir', description: 'Gin infuso alla lavanda, sciroppo di miele, succo di limone', price: 14, category: 'signature-drink' },
      { id: 6, name: 'Enchanted Nectar', description: 'Vodka alla ciliegia, amaretto, succo di arancia', price: 14, category: 'signature-drink' },
      { id: 7, name: 'Celestial Bliss', description: 'Rum al cocco, triple sec, succo di ananas, twist di lime', price: 14, category: 'signature-drink' },
      { id: 8, name: 'Eternal Ember', description: 'Bourbon affumicato, sciroppo di pepe nero, angostura bitters', price: 14, category: 'signature-drink' },
    ];

    // Restituisci i dati simulati
    return of(fakeDrinkList);
  }
}

export interface DrinkItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}
