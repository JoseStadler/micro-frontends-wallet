import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wallet';

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.select('wallet').subscribe(console.log);
  }
}
