import { NgModule } from '@angular/core';
import { ClueService } from './shared/services/clue.service';
import { BeeService } from './shared/services/bee.service';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  providers: [
    ClueService,
    BeeService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
