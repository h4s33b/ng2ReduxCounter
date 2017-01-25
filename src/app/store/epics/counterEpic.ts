import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

import { CounterAction } from '../actions/index';

@Injectable()
export class CounterEpics {

    constructor() { }

    increment = (action$) =>
        action$.ofType(CounterAction.INCREMENT)
            .do((val) => {
                console.log("In Counter Epic - Increment: ", val);
            })
            .switchMap(({payload}) => {
                return Observable.of({
                    type: CounterAction.INCREMENTSUCCESS,
                    payload: payload+1
                });
            });

    decrement = (action$) =>
        action$.ofType(CounterAction.DECREMENT)
            .do((val) => {
                console.log("In Counter Epic - Decrement : ", val);
            })
            .switchMap(({payload}) => {
                return Observable.of({
                    type: CounterAction.DECREMENTSUCCESS,
                    payload : payload-1
                });
            });
}