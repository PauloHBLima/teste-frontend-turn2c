export interface IFakeDogs {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Ibreeds[];
  favourite: string;
}

export interface Ibreeds {
  name: string;
  life_span: number;
}
