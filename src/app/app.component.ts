import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  message = '';

  constructor(private webService: WebService) {}

  ngOnInit(): void {
    this.webService.getResponseFromWeb().subscribe((response) => {
      this.message = response?.message;
      console.log(response);
    });
  }
}
