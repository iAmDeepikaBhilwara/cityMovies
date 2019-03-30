import { Component, OnInit } from '@angular/core';
import {MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list=[];

  constructor(private movieService:MovieService,private router:Router) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result)=>{this.list=result;})
  }

  onSelect(m)
  {
    this.router.navigate(['/booking',m.id]);
  }

  
}



