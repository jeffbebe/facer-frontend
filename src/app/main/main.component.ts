import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthFacade } from '../auth/+state/auth.facade';
import { User } from '../shared/services/amplify.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  public subscription = new Subscription();
  public user?: User;
  constructor(private readonly authFacade: AuthFacade) {}

  public ngOnInit(): void {
    this.subscription.add(
      this.authFacade
        .getUser()
        .pipe(tap((user) => (this.user = user)))
        .subscribe()
    );
  }
}
