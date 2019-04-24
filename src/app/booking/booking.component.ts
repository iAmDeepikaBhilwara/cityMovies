import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService} from '../movie.service';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
    customer_id:0,tickets:0,movie_id:0,movie_name:"",movie_time:"",theatre:"",screen:0,city:"",movie_date:"",date:"",amount:0,ticket_price:0
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
  amount1=0;
  bookMovie(movie,t)
  {
    this.amount1=this.data.tickets*200;
    
    this.movies={
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
      amount:this.amount1,
      ticket_price:200
    }
    console.log('booking====>',this.movies);
    console.log('amount===>',this.amount1)
    
    this.movieService.addRemoteBooking(this.movies).
    subscribe(() => this.router.navigate(['/makePay']));
      
  
    }

    // Takepic(){
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
      
    //   this.camera.getPicture(options).then((imageData) => {
    //    // imageData is either a base64 encoded string or a file URI
    //    // If it's base64 (DATA_URL):
    //    let base64Image = 'data:image/jpeg;base64,' + imageData;
    //   }, (err) => {
    //    // Handle error
    //   });
    // }
     
      
  
  }


