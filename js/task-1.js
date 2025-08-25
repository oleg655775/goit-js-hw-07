const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('li.item');

const subCategoriesShowInfo = (list) => {
  list.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const categories = item.querySelectorAll('ul > li');
    console.log('Category:', title);
    console.log('Elements:', categories.length);
  });
}

console.log('Number of categories: ', categoriesItems.length);
subCategoriesShowInfo(categoriesItems);
