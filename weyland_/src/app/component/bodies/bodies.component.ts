import { BodiesService } from './../../service/bodies.service';
import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/interface/response.interface';
@Component({
  selector: 'app-bodies',
  templateUrl: './bodies.component.html',
  styleUrls: ['./bodies.component.css']
})
export class BodiesComponent implements OnInit {
  response: Response;
  bodies: any;

  constructor(private bodiesService: BodiesService) { }

  ngOnInit(): void {
    this.bodiesService.getBodies().subscribe(
      (bodies: any) => {
        console.log(bodies);
        this.response = bodies;
        this.bodiesService.saveBodies(this.response);
      }
    );
  }
}

