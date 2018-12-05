export class Category {
  public id: number;
  public title: string;
}

export class Clue {
  public id: number;
  public answer: string;
  public question: string;
  public value: number;
  public category: Category;

}
