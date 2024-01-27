// menu.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getMenuItems(): Observable<MenuItem[]> {
    // Simula una richiesta HTTP
    const fakeMenu: MenuItem[] = [
      { id: 1, name: 'Risotto ai Funghi', description: 'Risotto con funghi porcini freschi e parmigiano', category: 'Primi Piatti' },
      { id: 2, name: 'Pasta Carbonara', description: 'Uova pasta gialla, guanciale, pecorino, pepe', category: 'Primi Piatti' },
      { id: 3, name: 'Gnocchi al Gorgonzola', description: 'Gnocchi di patate in salsa cremosa di gorgonzola', category: 'Primi Piatti' },
      { id: 4, name: 'Tagliata di Manzo con Riduzione di Balsamico', description: 'Tagliata di manzo grigliata con riduzione di aceto balsamico', category: 'Secondi Piatti' },
      { id: 5, name: 'Ossobuco alla Milanese', description: 'Ossobuco di vitello cotto lentamente con zafferano e gremolata', category: 'Secondi Piatti' },
      { id: 6, name: 'Salmone Gravlax', description: 'Salmone marinato con bacche di ginepro, coriandolo e senape', category: 'Secondi Piatti' },
      { id: 7, name: 'Soufflé al Cioccolato', description: 'Soufflé caldo al cioccolato fondente con cuore morbido', category: 'Dolci' },
      { id: 8, name: 'Panna Cotta al Frutto della Passione', description: 'Panna cotta con salsa al frutto della passione e pepe nero', category: 'Dolci' },
      { id: 9, name: 'Tiramisù alle Fragole', description: 'Tiramisù classico arricchito con fragole fresche', category: 'Dolci' },
      { id: 10, name: 'Linguine alle Vongole', description: 'Linguine con vongole, aglio, olio e prezzemolo', category: 'Primi Piatti-TG' },
      { id: 11, name: 'Ravioli al Tartufo Nero', description: 'Ravioli ripieni di ricotta e tartufo nero, serviti con burro e salvia', category: 'Primi Piatti-TG' },
      { id: 12, name: 'Farfalle al Salmone', description: 'Farfalle con salmone affumicato, panna e piselli', category: 'Primi Piatti-TG' },
      { id: 13, name: 'Pollo alle Erbe Aromatiche', description: 'Petto di pollo grigliato con erbe aromatiche e limone', category: 'Secondi Piatti-TG' },
      { id: 14, name: 'Cotoletta alla Milanese', description: 'Cotoletta di vitello impanata e fritta, servita con limone', category: 'Secondi Piatti-TG' },
      { id: 15, name: 'Branzino al Cartoccio', description: 'Branzino cotto al cartoccio con pomodorini e olive', category: 'Secondi Piatti-TG' },
      { id: 16, name: 'Cannoli Siciliani', description: 'Cannoli ripieni di ricotta dolce e scorza di arancia candita', category: 'Dolci-TG' },
      { id: 17, name: 'Pere al Vino Rosso', description: 'Pere cotte lentamente in vino rosso con spezie, servite con gelato alla vaniglia', category: 'Dolci-TG'},
      { id: 18, name: 'Profiteroles al Cioccolato', description: 'Bignè ripieni di crema pasticcera, ricoperti di cioccolato fondente', category: 'Dolci-TG' },
    ];

    // Restituisci i dati simulati
    return of(fakeMenu);
  }
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
}
