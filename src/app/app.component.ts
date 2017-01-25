import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import {CounterAction} from './store/actions/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select() counter$: Observable<number>;

  public counterValue;
  constructor(private counterAction: CounterAction, private ngRedux: NgRedux<IAppState>){
    this.counter$.subscribe(val=>{
      console.log(val);
      this.counterValue = val;
    })
  }

  increment() {
     this.counterAction.increment(this.counterValue.counter.counter);
  }

  decrement() {
    this.counterAction.decrement(this.counterValue.counter.counter);
  }

}
