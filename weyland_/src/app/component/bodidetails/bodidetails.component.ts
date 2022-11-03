import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BodiesService } from './../../service/bodies.service';
import { Response } from 'src/app/interface/response.interface';
import { Bodi } from 'src/app/interface/bodi.interface';

@Component({
  selector: 'app-bodidetails',
  templateUrl: './bodidetails.component.html',
  styleUrls: ['./bodidetails.component.css']
})
export class BodidetailsComponent implements OnInit {
  bodi: Bodi;

  constructor(private activatedRoute: ActivatedRoute, private bodiService: BodiesService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.bodiService.getBodi(params.get('englishName')!).subscribe(
        (bodies: any) => {
          console.log(bodies);
          this.bodi = bodies;
          this.bodiService.saveData(bodies);
        }
      )
    })
  }


}
