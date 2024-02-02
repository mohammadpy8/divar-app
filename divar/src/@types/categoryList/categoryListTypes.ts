export interface CategoryListTypes {
  _id: string;
  name: string;
  slug: string;
  icon: string;
  parents: Array<string>;
  children: Array<string>;
}
