import React, { useEffect, useState } from 'react';

import { CourseCatalog, Banner, Categories, CategoriesList, CategoriesItem, Courses } from './Styles';

import announcementIcon from '../../assets/images/announcement-icon.png';

import { CustomButton } from '../../components/button/CustomButton';
import { CoursesFilters } from '../../components/courses-filters/CoursesFilters';
import { CoursesList } from '../../components/courses-list/CoursesList';

import { courses } from '../../data/courses';

export const CourseCatalogScreen = () => {
  
  const categoriesItem = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

  const filterCourses = ( courses, filtersParams ) => {

    const categoryFilter = filtersParams.category === 'all' ? courses : courses.filter( course => course.category_name === filtersParams.category );

    let subcategoryFilter = categoryFilter;
    if ( filtersParams.subcategory !== 'all' ) {
      subcategoryFilter = categoryFilter.filter( course => course.subcategory_name === filtersParams.subcategory );
    }

    let levelFilter = subcategoryFilter;
    if ( filtersParams.level !== 'all' ) {
      levelFilter = subcategoryFilter.filter( course => course.level === filtersParams.level );
    }

    let priceFilter = levelFilter;
    if ( filtersParams.price !== 'all' ) {
      priceFilter = levelFilter.filter( course => course.price === filtersParams.price );
    }

    return priceFilter;
  }

  const filtersParamsDefault = {
    category: 'all',
    subcategory: 'all',
    level: 'all',
    price: 'all'
  }

  const [ coursesFiltered, setCoursesFiltered ] = useState( courses )
  const [ filtersParams, setFilterParams ] = useState( filtersParamsDefault );

  useEffect(() => {
    setCoursesFiltered( filterCourses( courses, filtersParams ) );
  }, [ filtersParams ])

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

        <CoursesList courses={ coursesFiltered } />
      </Courses>
    </CourseCatalog>
  )
}
