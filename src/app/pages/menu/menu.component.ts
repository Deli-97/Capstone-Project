// menu.component.ts

import { Component, OnInit } from '@angular/core';
import { MenuService, MenuItem } from './menu.service';
import { DrinkService, DrinkItem } from '../../services/menudrink/drink.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];
  drinkItems: DrinkItem[] = [];

  constructor(
    private menuService: MenuService,
    private drinkService: DrinkService
  ) {}

  ngOnInit(): void {
    this.fetchMenu();
    this.fetchDrinks();
  }

  fetchMenu(): void {
    this.menuService.getMenuItems().subscribe((menuItems) => {
      this.menuItems = menuItems;
    });
  }

  fetchDrinks(): void {
    this.drinkService.getDrinkItems().subscribe((drinkItems) => {
      this.drinkItems = drinkItems;
    });
  }
}
