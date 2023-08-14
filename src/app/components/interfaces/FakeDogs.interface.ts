export interface IFakeDogs {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: [{
    name: string;
    life_span: number;
  }];
  favourite: string;
}
