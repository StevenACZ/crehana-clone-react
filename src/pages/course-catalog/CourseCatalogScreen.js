import React from 'react';
// import { Button } from '../../components/button/Button';
import { CourseCatalog, Banner, Categories, CategoriesList, CategoriesItem, Courses, CoursesFilters, CoursesFiltersItem } from './Styles';

import announcementIcon from '../../assets/images/announcement-icon.png';

import { Menu, Dropdown } from 'antd';
import {  DownOutlined, UserOutlined  } from '@ant-design/icons';

import { CustomButton } from '../../components/button/CustomButton';

export const CourseCatalogScreen = () => {

  const categoriesItem = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

  function handleMenuClick(e) {
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="item-1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="item-2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="item-3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

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

        <CoursesFilters>
          <CoursesFiltersItem>
            <span>Categoria</span>

            <Dropdown overlay={menu}>
              <CustomButton outline={ 1 } dropdown="true">
                Todos <DownOutlined />
              </CustomButton>
            </Dropdown>
          </CoursesFiltersItem>
          
          <CoursesFiltersItem>
            <span>SubCategoria</span>

            <Dropdown overlay={menu}>
              <CustomButton outline={ 1 } dropdown="true">
                Todos <DownOutlined />
              </CustomButton>
            </Dropdown>
          </CoursesFiltersItem>
          
          <CoursesFiltersItem>
            <span>Nivel</span>

            <Dropdown overlay={menu}>
              <CustomButton outline={ 1 } dropdown="true">
                Todos <DownOutlined />
              </CustomButton>
            </Dropdown>
          </CoursesFiltersItem>

          <CoursesFiltersItem>
            <span>Precio</span>

            <Dropdown overlay={menu}>
              <CustomButton outline={ 1 } dropdown="true">
                Todos <DownOutlined />
              </CustomButton>
            </Dropdown>
          </CoursesFiltersItem>

          <CustomButton>
            Aplicar filtros
          </CustomButton>
        </CoursesFilters>
      </Courses>
    </CourseCatalog>
  )
}
