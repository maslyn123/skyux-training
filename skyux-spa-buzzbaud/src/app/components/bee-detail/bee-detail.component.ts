import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { Bee } from '../../models/bee';

@Component({
  selector: 'app-bee-detail',
  templateUrl: './bee-detail.component.html',
  styleUrls: ['./bee-detail.component.scss']
})
export class BeeDetailComponent {
  @Input()
  public bee: Bee;

  @Output()
  public wantsClose: EventEmitter<void>;

  constructor() {
    this.wantsClose = new EventEmitter<void>();
  }

  public close(): void {
    this.wantsClose.next();
  }
}
