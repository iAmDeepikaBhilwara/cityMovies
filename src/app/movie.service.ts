import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 
  

  private movieUrl = 'http://localhost:3000/api/movies';
  private customerUrl='http://localhost:3000/api/customers';
  private bookingUrl='http://localhost:3000/api/booking';
  private authUrl='http://localhost:3000/api/authenticate';




  constructor(private http: HttpClient) { }
  movie={
    id:0,
    name:"",
    year:0,
    image_url:"",
    production_house:"",
    rating:0,
    type:"",
    language:"",
    date:""
  }
  customer={
    id:0,
    name:"",
    phone:0,
    email:"",
    password:"",
    address:"",
  }
  booking={
    id:0,
    customer_id:0,
    tickets:0,
    movie_id:0,
    movie_name:"",
    movie_time:"3 h",
    theatre:"gopalan cinemas",
    screen:3,
    city:"Bangalore",
    movie_date:"2018-04-24",
    date:"2019-03-28",
    amount:0,
    ticket_price:200
}
  movies=JSON.parse(localStorage.getItem('movies'));
  customers=JSON.parse(localStorage.getItem('customers'));
  bookings=JSON.parse(localStorage.getItem('bookings'));

  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.movieUrl); 		
 }

 getRemoteMoviesById(id): Observable<any>{
  return this.http.get<any>(this.movieUrl+"/"+id); 		
}

 
getCustomers(customer): Observable<any>{
  
  return this.http.get<[]>(this.authUrl+"/"+customer.email+"/"+customer.password); 		
}
 addRemoteCustomers(customer): Observable<any>{
  return this.http.post(this.customerUrl,customer);
  // customer.id=Math.round(Math.random()*1000000);
  this.customers.push(customer);
  localStorage.setItem('customers',JSON.stringify(this.customers));

}
addRemoteBooking(booking): Observable<any>{
  return this.http.post(this.bookingUrl, booking);
}

getRemoteCustomerPassword(phone): Observable<[]>
{
  return this.http.get<[]>(this.authUrl+'/'+phone);
}


}
