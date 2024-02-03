import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/admin'
import { FC } from 'react'
import { CategoryListTypes } from '../../@types/categoryList/categoryListTypes'

const AddPost: FC = () => {
  const { data, isLoading } = useQuery(['getCategory'], getCategory)
  console.log({ data, isLoading })
  const addHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault()
    console.log('send')
  }
  return (
    <form>
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
          const { _id, name } = cat
          return (
            <option key={_id} value={_id}>
              {name}
            </option>
          )
        })}
      </select>
      <label>image</label>
      <input type="file" name="image" />
      <button onClick={addHandler}>send</button>
    </form>
  )
}

export default AddPost
