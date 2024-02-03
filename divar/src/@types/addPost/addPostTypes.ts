export interface AddPostTypes<T> {
  title: string;
  content: string;
  category: string;
  city: string;
  amount: string | null;
  image?:string | null | T,
}
