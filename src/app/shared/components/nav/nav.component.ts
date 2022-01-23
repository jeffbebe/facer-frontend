import { Component, ViewEncapsulation } from '@angular/core';

import { AuthFacade } from '../../../auth/+state/auth.facade';

export interface Nav {
  route: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
  public navs: Nav[] = [
    {
      route: 'pictures',
    },
    {
      route: 'recognition',
    },
  ];

  constructor(private readonly authFacade: AuthFacade) {}

  public logoutUser(): void {
    this.authFacade.logoutUser();
  }

  public createRoute(route: string): string {
    return `./${route}`;
  }
}
