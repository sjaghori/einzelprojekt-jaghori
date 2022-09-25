import { getCategories } from '../api/meal.service'

const makeList = async () => {
  // Establish the array which acts as a data source for the list
  const listData = await (await getCategories()).categories

  const listContainer = document.querySelector(
    '#meal-content'
  ) as HTMLDivElement
  listContainer.classList.add('category')

  // Make the list
  const listElement = document.createElement('div')
  listElement.classList.add('category__list')
  listElement.innerHTML = '<h1>Categories</h1>'

  const favorites = document.createElement('div')
  favorites.classList.add('category__favorites')
  favorites.classList.add('category__favorites--hidden')
  favorites.innerHTML = '<h1>Favorites</h1>'

  // Add it to the page
  listContainer.appendChild(listElement)
  listContainer.appendChild(favorites)

  for (let i = 0; i < listData.length; ++i) {
    // create an item for each one
    const listItem: HTMLDivElement = document.createElement('div')
    listItem.classList.add('category__item')
    listItem.setAttribute('data-id', listData[i].idCategory)

    const listItemCategoryTitle: HTMLDivElement = document.createElement('h2')
    listItemCategoryTitle.classList.add('category__item__title')
    listItemCategoryTitle.innerHTML = listData[i].strCategory

    const listItemCategoryThumbnail: HTMLImageElement = new Image()
    listItemCategoryThumbnail.src = listData[i].strCategoryThumb
    listItemCategoryThumbnail.classList.add('category__item__thumbnail')
    listItemCategoryThumbnail.innerHTML = listData[i].strCategoryThumb

    const listItemCategoryDescription: HTMLDivElement =
      document.createElement('div')
    listItemCategoryDescription.classList.add('category__item__description')
    listItemCategoryDescription.innerHTML = listData[i].strCategoryDescription

    listItem.appendChild(listItemCategoryTitle)
    listItem.appendChild(listItemCategoryThumbnail)
    listItem.appendChild(listItemCategoryDescription)

    const removeButton: HTMLButtonElement = document.createElement('button')
    removeButton.classList.add('category__item__remove')
    removeButton.innerHTML = 'Remove'
    removeButton.addEventListener('click', () => {
      listItem.remove()
    })

    const addToFavoritesButton: HTMLButtonElement =
      document.createElement('button')
    addToFavoritesButton.classList.add('category__item__add-to-favorites')
    addToFavoritesButton.innerHTML = 'Add to favorites'
    addToFavoritesButton.addEventListener('click', () => {
      favorites.classList.remove('category__favorites--hidden')
      favorites.appendChild(listItem)
    })

    listItem.appendChild(removeButton)
    listItem.appendChild(addToFavoritesButton)

    // Add listItem to the listElement
    listElement.appendChild(listItem)
  }
}

await makeList()
