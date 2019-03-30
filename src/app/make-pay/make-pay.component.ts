import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-pay',
  templateUrl: './make-pay.component.html',
  styleUrls: ['./make-pay.component.scss'],
})
export class MakePayComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  payment()
  {
    this.router.navigate(['/payment']);
  }
  offer()
  {
    this.router.navigate(['/offer']);
  }

}
