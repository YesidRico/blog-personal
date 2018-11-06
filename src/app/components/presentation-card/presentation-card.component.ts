import { Component, OnInit } from '@angular/core';
import * as faIcon from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-presentation-card',
  templateUrl: './presentation-card.component.html',
  styleUrls: ['./presentation-card.component.scss']
})
export class PresentationCardComponent implements OnInit {

  public faIcon = faIcon;
  public iconSize:string = '3x';

  constructor() { }

  ngOnInit() {
  }

}
