import React from 'react';
import { Button } from '../../components/button/Button';
import { CourseCatalog, Banner, Categories, CategoriesList, CategoriesItem } from './Styles';

import announcementIcon from '../../assets/images/announcement-icon.png';

export const CourseCatalogScreen = () => {

  const categoriesItem = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

  return (
    <CourseCatalog>
      <Banner>
        <h2>
          Title H2 -<br/>
          banner cursos nuevos
        </h2>

        <Button>
          Compra ahora
        </Button>
      </Banner>

      <Categories>
        <h4>Title H4 - Categorias</h4>

        <CategoriesList>
          {
            categoriesItem.map( category => (
              <CategoriesItem key={ category }>
                <img
                  src={ announcementIcon }
                  alt="announcement Icon"
                />
                <span>Categoria { category }</span>
              </CategoriesItem>
            ))
          }
        </CategoriesList>
      </Categories>
    </CourseCatalog>
  )
}
