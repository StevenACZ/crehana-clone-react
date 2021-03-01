import React, { useEffect, useState } from 'react';

// IsMobile?
import {
  isMobileOnly
} from "react-device-detect";

// Styles
import {
  CourseCatalog,
  Banner,
  Categories,
  CategoriesList,
  CategoriesItem,
  Courses
} from './Styles';

// Icon
import announcementIcon from '../../assets/images/announcement-icon.png';

// Data
import { courses } from '../../data/courses';

// Components
import { CustomButton } from '../../components/button/CustomButton';
import { CoursesFilters } from '../../components/courses-filters/CoursesFilters';
import { CoursesList } from '../../components/courses-list/CoursesList';
import { Pagination } from '../../components/pagination/Pagination';


export const CourseCatalogScreen = () => {
  
  const categoriesItem = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

  const filterCourses = ( courses, filtersParams ) => {

    const categoryFilter = filtersParams.category === 'Todos' ? courses : courses.filter( course => course.category_name === filtersParams.category );

    let subcategoryFilter = categoryFilter;
    if ( filtersParams.subcategory !== 'Todos' ) {
      subcategoryFilter = categoryFilter.filter( course => course.subcategory_name === filtersParams.subcategory );
    }

    let levelFilter = subcategoryFilter;
    if ( filtersParams.level !== 'Todos' ) {
      levelFilter = subcategoryFilter.filter( course => course.level === filtersParams.level );
    }
    
    let priceFilter = levelFilter;
    if ( filtersParams.price !== 'Todos' ) {
      priceFilter = levelFilter.filter( course => course.price === parseFloat( filtersParams.price ) );
    }

    return priceFilter;
  }

  const getAllFiltersData = ( courses ) => {
    const allCategory = courses.map( course => course.category_name );
    const allSubcategory = courses.map( course => course.subcategory_name );
    const allLevel = courses.map( course => course.level );
    const allPrice = courses.map( course => course.price );
    
    return {
      allCategory: [ 'Todos', ...new Set(allCategory) ],
      allSubcategory: [ 'Todos', ...new Set(allSubcategory) ],
      allLevel: [ 'Todos', ...new Set(allLevel) ],
      allPrice: [ 'Todos', ...new Set(allPrice) ]
    }
  }

  const filtersParamsDefault = {
    category: 'Todos',
    subcategory: 'Todos',
    level: 'Todos',
    price: 'Todos'
  }

  const [ allFiltersData, setAllFiltersData ] = useState( {
    allCategory: [],
    allSubcategory: [],
    allLevel: [],
    allPrice: []
  } )
  const [ filtersParams, setFilterParams ] = useState( filtersParamsDefault );
  const [ coursesFiltered, setCoursesFiltered ] = useState( courses );
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ coursesPerPage ] = useState( isMobileOnly ? 4 : 8 );

  // Get current post
  const indexOfLastPost = currentPage * coursesPerPage;
  const indexOfFirstPost = indexOfLastPost - coursesPerPage;
  const currentCourses = coursesFiltered.slice( indexOfFirstPost, indexOfLastPost );

  useEffect(() => {
    setCoursesFiltered( filterCourses( courses, filtersParams ) );
  }, [ filtersParams ])

  useEffect(() => {
    setAllFiltersData(getAllFiltersData( courses ));
  }, [ ])

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
          allFiltersData={ allFiltersData }
          filtersParams={ filtersParams }
          setFilterParams={ setFilterParams }
        />

        <CoursesList courses={ currentCourses } />

        <Pagination
          currentPage={ currentPage }
          setCurrentPage={ setCurrentPage }
          coursesPerPage={ coursesPerPage }
          totalCourses={ coursesFiltered.length }
        />
      </Courses>
    </CourseCatalog>
  )
}
