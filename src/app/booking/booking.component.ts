import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService} from '../movie.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService:MovieService,private router:Router) { }

  id: number;
  private sub: any;
  movie:any;
  
  movies={
    id:0,customer_id:0,tickets:0,movie_id:0,movie_name:"",movie_time:"",theatre:"",screen:0,city:"",movie_date:"",date:"",amount:0,ticket_price:0
}
data={
  tickets:0
}

  ngOnInit() {
    
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       this.movieService.getRemoteMoviesById(this.id).subscribe((movie)=>{console.log(movie);
      this.movie=movie});
    });
  }
amount=this.data.tickets*200;
  bookMovie(movie,t)
  {
    console.log(movie);
    this.movies={
      id:0,
      customer_id:2,
      tickets:t,
      movie_id:movie.id,
      movie_name:movie.name,
      movie_time:"3 h",
      theatre:"Lido mall",
      screen:2,
      city:"Bangalore",
      movie_date:"2018-02-13",
      date:"2019-03-30",
      amount:this.amount,
      ticket_price:200
    }
    
    this.movieService.addRemoteBooking(this.movies).
    subscribe(() => this.router.navigate(['/makePay']));
      
  
    }
     
      
  
  }


