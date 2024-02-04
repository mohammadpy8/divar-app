export interface AddPostTypes {
  title: string;
  content: string;
  category: string;
  city: string;
  amount: string | null;
  image?:string | null | File,
}
