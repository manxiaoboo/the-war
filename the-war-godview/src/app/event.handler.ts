import { Injectable } from '@angular/core';
import { EventName } from './event.enum';
import { EventBusService } from './event.bus';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class EventHandlerService {

    constructor(private bus: EventBusService) {

    }

    dispatch(event: any) {
        switch(event.name) {
            case EventName.OneMonthPassed:
                this.oneMonthPassed(event);
                break;
            case EventName.AttachCity:
                this.onAttachCity(event);
                break;
            default:
                break;
        }
    }

    private oneMonthPassed(event: any) {
        this.bus.myMessage$.next(event.data.message);
    }

    private onAttachCity(event: any) {
        this.bus.globalMessage$.next(event.data.message);
    }
}