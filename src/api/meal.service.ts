import axios, { AxiosResponse } from 'axios'
import { CategoriesResponse } from '../models/category.model'

export const getCategories = async (): Promise<CategoriesResponse> => {
  const { data }: AxiosResponse<CategoriesResponse> = await axios
    .get(
      'https://www.themealdb.com/api/json/v1/1/categories.php',
      {
        headers: {
          Accept: 'application/json'
        }
      })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.error('error message: ', error.message)

        return error.message
      } else {
        console.error('unexpected error: ', error)

        return 'An unexpected error occurred'
      }
    }) as AxiosResponse<CategoriesResponse>

  return data
}
