import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoe } from '../Shoe';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-update-shoe',
  templateUrl: './update-shoe.component.html',
  styleUrls: ['./update-shoe.component.css']
})
export class UpdateShoeComponent implements OnInit {

  id!:number;
  shoe:Shoe={
    shoeId: 0,
    name: "",
    type: "",
    color: "",
    price: 0
  }

  constructor(private shoeService:ShoeService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.shoeService.getShoeById(this.id).subscribe(data => {
      this.shoe = data;
    },
    error => console.log(error));
  }

  onSubmit(){
    this.shoeService.updateShoe(this.id, this.shoe).subscribe(data => {
      this.goToShoeList();
    },
    error => console.log(error));
  }

  goToShoeList(){
    this.router.navigate(['/shoes']);
  }
}
