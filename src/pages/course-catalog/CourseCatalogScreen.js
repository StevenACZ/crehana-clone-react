import React, { useState } from 'react';
import { CourseCatalog, Banner, Categories, CategoriesList, CategoriesItem, Courses } from './Styles';

import announcementIcon from '../../assets/images/announcement-icon.png';

import { CustomButton } from '../../components/button/CustomButton';
import { CoursesFilters } from '../../components/courses-filters/CoursesFilters';

export const CourseCatalogScreen = () => {

  const categoriesItem = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

  const filtersParamsDefault = {
    category: 'all',
    subcategory: 'all',
    level: 'all',
    price: 'all'
  }

  const [ filtersParams, setFilterParams ] = useState( filtersParamsDefault );

  console.log( filtersParams );

  return (
    <CourseCatalog>
      <Banner>
        <h2>
          Title H2 -<br/>
          banner cursos nuevos
        </h2>

        <CustomButton>
          Compra ahora
        </CustomButton>
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

      <Courses>
        <h4>Title H4 - Listado de cursos</h4>

        <CoursesFilters
          filtersParams={ filtersParams }
          setFilterParams={ setFilterParams }
        />
      </Courses>
    </CourseCatalog>
  )
}
