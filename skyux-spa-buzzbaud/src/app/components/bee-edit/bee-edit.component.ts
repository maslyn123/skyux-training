import {
  Component, OnInit
} from '@angular/core';
import { Bee } from '../../models/bee';
import { BeeService } from '../../shared/services/bee.service';

@Component({
  selector: 'app-bee-edit',
  templateUrl: './bee-edit.component.html',
  styleUrls: ['./bee-edit.component.scss']
})
export class BeeFormComponent implements OnInit {
  public bee: Bee;

  constructor(
    private service: BeeService
  ) {}

  public createBee(): void {
    this.service
      .createBee(this.bee)
      .subscribe();
  }

  public ngOnInit(): void {
    this.bee = new Bee();
  }
}
