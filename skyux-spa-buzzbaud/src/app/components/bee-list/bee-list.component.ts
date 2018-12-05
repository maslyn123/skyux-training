import {
  Component, OnInit
} from '@angular/core';
import {Bee} from '../../models/bee';
import { FAKE_DATA } from './bee-data';

@Component({
  selector: 'app-bee-list',
  templateUrl: './bee-list.component.html',
  styleUrls: ['./bee-list.component.scss']
})
export class BeeListComponent implements OnInit {
  public bees: Bee[];

  public ngOnInit(): void {
    this.bees = FAKE_DATA;
  }
}
