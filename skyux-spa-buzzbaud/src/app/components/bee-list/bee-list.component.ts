import {
  Component, OnInit
} from '@angular/core';
import {Bee} from '../../models/bee';
import {BeeService} from '../../shared/services/bee.service';

@Component({
  selector: 'app-bee-list',
  templateUrl: './bee-list.component.html',
  styleUrls: ['./bee-list.component.scss']
})
export class BeeListComponent implements OnInit {
  private _bees: Bee[];
  public selectedBee: Bee;

  constructor(
    private service: BeeService
  ) {}

  public ngOnInit(): void {
    this._bees = [];
    this.getBees();
  }

  public getBees() {
    this.service
      .getBees()
      .subscribe(
        bees => this._bees = bees, // success handler, I'll have some bees
        error => console.error(error) // error handler, something went wrong
      );
  }

  public beeCreated(bee: Bee) {
    this.service
      .createBee(bee)
      .subscribe(
        newBee => this.getBees()
      );
  }

  public deselectBee(): void {
    this.selectedBee = undefined;
  }

  public handleBeeClick(bee: Bee) {
    this.selectedBee = bee;
  }

  public get bees(): Bee[] {
    return this._bees;
  }

  public someBees(): Bee[] {
    return this._bees;
  }
}
