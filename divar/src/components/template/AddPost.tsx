import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/admin";
import { FC, useState } from "react";
import { CategoryListTypes } from "../../@types/categoryList/categoryListTypes";
import { AddPostTypes } from "../../@types/addPost/addPostTypes";

const AddPost: FC = () => {
  const [form, setForm] = useState<AddPostTypes>({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    image: null,
  });
  const { data, isLoading } = useQuery(["getCategory"], getCategory);
  console.log({ data, isLoading });
  const addHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log("send");
  };
  const changeHandle = (event: React.FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    const targets = event?.target as HTMLInputElement;
    if (!targets?.files) return;
    const files = targets?.files[0];
    if (name !== "image") {
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, [name]: files });
    }
  };
  return (
    <form onChange={changeHandle}>
      <h3>add post </h3>
      <label htmlFor="title">title</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">content</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount">amount</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">city</label>
      <input type="text" name="city" id="city" />
      <label htmlFor="">category</label>
      <select name="category" id="category">
        {data?.data.map((cat: CategoryListTypes) => {
          const { _id, name } = cat;
          return (
            <option key={_id} value={_id}>
              {name}
            </option>
          );
        })}
      </select>
      <label>image</label>
      <input type="file" name="image" />
      <button onClick={addHandler}>send</button>
    </form>
  );
};

export default AddPost;
