import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

/* color="accent"*/

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Resumo',  icon: 'dashboard', class: '',  },
    { path: '/user-profile', title: 'Dados Pessoais',  icon:'person', class: '' },
    { path: '/table-list', title: 'Notas',  icon:'content_paste', class: '' },
    { path: '/integracoes', title: 'Integrações',  icon:'library_books', class: '' },
    { path: '/maps', title: 'Calendario',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
