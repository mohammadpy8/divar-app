import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../../services/admin'
import Loader from '../modules/Loader'
import { CategoryListTypes } from '../../@types/categoryList/categoryListTypes'

const CategoryList = () => {
  const { data, isLoading } = useQuery(['getCategory'], getCategory)
  console.log({ data, isLoading })

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        data?.data.map((item: CategoryListTypes) => {
          const { _id, name, slug } = item
          return (
            <div key={_id}>
              <h5>{name}</h5>
              <p>slug: {slug}</p>
            </div>
          )
        })
      )}
    </div>
  )
}

export default CategoryList
