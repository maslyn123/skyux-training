import {
  Component, OnInit
} from '@angular/core';
import { Clue } from '../../shared/domain/clue';
import { ClueService } from '../../shared/services/clue.service';

@Component({
  selector: 'app-clue-list',
  templateUrl: './clue-list.component.html',
  styleUrls: ['./clue-list.component.scss']
})
export class ClueListComponent implements OnInit {
  private _clues: Clue[];
  public selectedClue: Clue;

  constructor(
    private service: ClueService
  ) {}

  public ngOnInit(): void {
    this._clues = [];
    this.service
      .getClues()
      .subscribe(
        clues => this._clues = clues, // success handler, I'll have some clues
        error => console.error(error) // error handler, something went wrong
      );
  }

  public deselectClue(): void {
    this.selectedClue = undefined;
  }

  public handleClueClick(clue: Clue) {
    this.selectedClue = clue;
  }

  public get cluesOver200() {
    return this._clues.filter(clue => clue.value > 200);
  }

  public get clues(): Clue[] {
    return this._clues;
  }

  public someClues(): Clue[] {
    return this._clues;
  }
}
