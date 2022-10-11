import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EventBusService {
    public myMessage$: Subject<string> = new Subject();
    public globalMessage$: Subject<string> = new Subject();
    public orgMessage$: Subject<string> = new Subject();
    public hearsayMessage$: Subject<string> = new Subject();
}