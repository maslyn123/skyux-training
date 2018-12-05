import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {
  public title: string;

  public handleTitleHasChanged(newValue: string) {
      this.title = newValue;
  }

}
