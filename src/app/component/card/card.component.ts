import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  imports: [CommonModule],
  templateUrl: 'card.component.html',
  standalone: true,
})

export class CardsComponent implements OnInit {

  Posts:any;
  constructor( private httpClient: HttpClient) {
    this.getPosts();
  }
  getPosts(){
    this.httpClient.get<any>('https://my-json-server.typicode.com/mathazizo/testjson/posts').subscribe(
      response => {
        console.log(response);
        this.Posts = response;
      }
    );
  }
  
  ngOnInit(): void {
    this.getPosts();
  }

}
