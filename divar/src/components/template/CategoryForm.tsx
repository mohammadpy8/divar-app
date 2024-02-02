import { useState } from 'react'
import { CategotyFormTypes } from '../../@types/categoryForm/categoryFormTypes'
import { useMutation } from '@tanstack/react-query'
import { addCategory } from '../../services/admin'

const CategoryForm = () => {
  const [form, setForm] = useState<CategotyFormTypes>({
    name: '',
    slug: '',
    icon: '',
  })

  const { mutate, isLoading, error, data } = useMutation(addCategory)
  console.log({ isLoading, error, data })

  const changeHandle = (event: React.FormEvent<HTMLFormElement>) => {
    setForm({
      ...form,
      [(event.target as HTMLInputElement)
        .name]: (event.target as HTMLInputElement).value,
    })
  }

  const submitHandle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.name || !form.slug || !form.icon) return
    mutate(form)
    console.log(form)
  }

  return (
    <form onChange={changeHandle} onSubmit={submitHandle}>
      <h3>دسته بندی جدید</h3>
      {data?.status === 201 && <p>اگهی با موفقیت ثبت شد</p>}
      <label htmlFor="name">نام دسته بندی </label>
      <input type="text" id="name" name="name" />
      <label htmlFor="slug">نام اسلاگ </label>
      <input type="text" id="slug" name="slug" />
      <label htmlFor="icon">نام آیکون </label>
      <input type="text" id="icon" name="icon" />
      <button type="submit" disabled={isLoading}>
        ایجاد
      </button>
    </form>
  )
}

export default CategoryForm
