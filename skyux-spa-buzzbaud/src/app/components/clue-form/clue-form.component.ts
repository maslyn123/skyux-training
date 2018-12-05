import {
  Component
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { ClueService } from '../../shared/services/clue.service';

@Component({
  selector: 'app-clue-form',
  templateUrl: './clue-form.component.html',
  styleUrls: ['./clue-form.component.scss']
})
export class ClueFormComponent {

  public clue: Clue;

  constructor(
    private service: ClueService
  ){}

}
