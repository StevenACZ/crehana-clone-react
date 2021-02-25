import React from 'react';
import { Button } from '../../components/button/Button';
import { CourseCatalog, Banner, Categories, CategoriesList, CategoriesItem, Courses, CoursesFilters, CoursesFiltersItem } from './Styles';

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

      <Courses>
        <h4>Title H4 - Listado de cursos</h4>

        <CoursesFilters>
          <CoursesFiltersItem>
            <span>Categoria</span>
            <Button outline>Todos</Button>

            {/* Crear componente Dropdown con button and div que sale debajo del button */}
          </CoursesFiltersItem>

          <Button>
            Aplicar filtros
          </Button>
        </CoursesFilters>
      </Courses>
    </CourseCatalog>
  )
}
