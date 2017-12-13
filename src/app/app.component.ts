import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';

const DOGS_KEY = makeStateKey('dogs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  dogs: any;

  constructor(
    private http: HttpClient,
    private state: TransferState,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.dogs = this.state.get(DOGS_KEY, null as any);

    if (!this.dogs) {
      const HOST = isPlatformServer(this.platformId) ? 'http://api:5000' : '';

      this.http
        .get(`${HOST}/api/dogs`)
        .subscribe(data => {
          this.dogs = data;
          this.state.set(DOGS_KEY, data as any);
        });
    }

    this.titleService.setTitle('My server side rendered title!');
    this.metaService.addTag({ name: 'description', content: 'My server side rendered description' });
  }
}
