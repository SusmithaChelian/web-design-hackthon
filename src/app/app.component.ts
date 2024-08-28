import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample';
  shoes = [{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"},{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"},{header:"Nike Shoe",text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",price:"$234"}]

  ngOnInit(): void {
  }
}
