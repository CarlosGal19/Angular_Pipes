import { Component, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'navbar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  routes = routes.map(route => {
    const title = route.title as string;

    return {
      title: title ?? '',
      path: route.path ?? ''
    }
  }).filter(route => route.title !== '')

  currentRoute = signal<string>('basic')
}
