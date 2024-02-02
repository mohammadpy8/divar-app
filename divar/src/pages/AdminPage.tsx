import { FC } from 'react'
import CategoryForm from '../components/template/CategoryForm'
import CategoryList from '../components/template/CategoryList'

const AdminPage: FC = () => {
  return (
    <div>
      <CategoryForm />
      <CategoryList />
    </div>
  )
}

export default AdminPage
