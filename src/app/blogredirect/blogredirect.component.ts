import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogredirect',
  templateUrl: './blogredirect.component.html',
  styleUrls: ['./blogredirect.component.css']
})
export class BlogredirectComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    const queryParams = window.location.search;
    this.router.navigate(['/', {queryParams}])
  }

}
