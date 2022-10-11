import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { EventHandlerService } from './event.handler';
import { EventBusService } from './event.bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public openMap: boolean = false;

  public runtimeData: any = {};
  public orgs: any = [];
  public acts: any = [];
  public areas: any = [];
  public scripts: any = {};
  public cities: any = [];

  public myMessages: string[] = [];
  public globalMessages: string[] = [];
  public orgMessages: string[] = [];
  public hearsayMessages: string[] = [];

  constructor(
    private http: HttpClient,
    private socket: Socket,
    private bus: EventBusService,
    private eventHandler: EventHandlerService
    ) {
    this.loadScripts();
    this.loadRuntime();
    this.loadOrganizations();
    this.loadActors();
    this.loadAreas();
    this.handleSocket();
    this.handleEventBus();
  }

  handleEventBus() {
    this.bus.myMessage$.asObservable().subscribe(data => {
      this.myMessages = [data, ...this.myMessages];
    });
    this.bus.globalMessage$.asObservable().subscribe(data => {
      this.globalMessages = [data, ...this.globalMessages];
    });
    this.bus.orgMessage$.asObservable().subscribe(data => {
      this.orgMessages = [data, ...this.orgMessages];
    });
    this.bus.hearsayMessage$.asObservable().subscribe(data => {
      this.hearsayMessages = [data, ...this.hearsayMessages];
    });
  }

  handleSocket() {
    this.socket.on('events', (event: any) => {
      this.eventHandler.dispatch(event);
    });
  }

  loadRuntime() {
    this.http.get('http://localhost:3000/runner/data').subscribe(data => {
      console.info('loadRuntime', data);
      this.runtimeData = data;
    });
  }

  loadOrganizations() {
    this.http.get('http://localhost:3000/organizations/organizations').subscribe(data => {
      console.info('loadOrganizations', data);
      this.orgs = data;
    });
  }

  loadActors() {
    this.http.get('http://localhost:3000/actors/actors').subscribe(data => {
      console.info('loadActors', data);
      this.acts = data;
    });
  }
  
  loadAreas() {
    this.http.get('http://localhost:3000/areas/areas').subscribe((data: any) => {
      console.info('loadAreas', data);
      this.areas = data.areas;
      this.cities = data.cities;
    });
  }

  loadScripts() {
    this.http.get('http://localhost:3000/story/getStory').subscribe(data => {
      console.info('loadScripts', data);
      this.scripts = data;
    });
  }

  openMapDialog() {
    this.loadAreas();
    this.openMap = true;
  }

  closeMapDialog() {
    this.openMap = false;
  }

}
