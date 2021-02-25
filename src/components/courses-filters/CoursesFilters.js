import React, { useState } from 'react'

import { Menu, Dropdown } from 'antd';
import {  DownOutlined, UserOutlined  } from '@ant-design/icons';

import { StyledCoursesFilters, StyledCoursesFiltersItem } from './Styles';
import { CustomButton } from '../button/CustomButton';

export const CoursesFilters = ({ filtersParams, setFilterParams }) => {

  const [ params, setParams ] = useState( filtersParams )

  // MENU CATEGORY
  function handleMenuClickCategory( e ) {
    setParams( {
      ...params,
      category: e.key
    } )
  }

  const menuCategory = (
    <Menu onClick={handleMenuClickCategory}>
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

  // MENU SUBCATEGORY
  function handleMenuClickSubcategory( e ) {
    setParams( {
      ...params,
      subcategory: e.key
    } )
  }

  const menuSubcategory = (
    <Menu onClick={ handleMenuClickSubcategory }>
      <Menu.Item key="subitem-1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="subitem-2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="subitem-3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );
  
  // MENU LEVEL
  function handleMenuClickLevel( e ) {
    setParams( {
      ...params,
      level: e.key
    } )
  }

  const menuLevel = (
    <Menu onClick={ handleMenuClickLevel }>
      <Menu.Item key="level-1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="level-2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="level-3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  // MENU PRICE
  function handleMenuClickPrice( e ) {
    setParams( {
      ...params,
      price: e.key
    } )
  }

  const menuPrice = (
    <Menu onClick={ handleMenuClickPrice }>
      <Menu.Item key="price-1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="price-2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="price-3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  // Submit Filters Params
  const handleSubmitFiltersParams = () => {
    setFilterParams( params )
  }

  return (
    <StyledCoursesFilters>
      <StyledCoursesFiltersItem>
        <span>Categoria</span>

        <Dropdown overlay={ menuCategory }>
          <CustomButton outline={ 1 } dropdown="true">
            { params.category } <DownOutlined />
          </CustomButton>
        </Dropdown>
      </StyledCoursesFiltersItem>
      
      <StyledCoursesFiltersItem>
        <span>SubCategoria</span>

        <Dropdown overlay={ menuSubcategory }>
          <CustomButton outline={ 1 } dropdown="true">
            { params.subcategory } <DownOutlined />
          </CustomButton>
        </Dropdown>
      </StyledCoursesFiltersItem>
      
      <StyledCoursesFiltersItem>
        <span>Nivel</span>

        <Dropdown overlay={ menuLevel }>
          <CustomButton outline={ 1 } dropdown="true">
            { params.level } <DownOutlined />
          </CustomButton>
        </Dropdown>
      </StyledCoursesFiltersItem>

      <StyledCoursesFiltersItem>
        <span>Precio</span>

        <Dropdown overlay={ menuPrice }>
          <CustomButton outline={ 1 } dropdown="true">
            { params.price } <DownOutlined />
          </CustomButton>
        </Dropdown>
      </StyledCoursesFiltersItem>

      <CustomButton onClick={ handleSubmitFiltersParams }>
        Aplicar filtros
      </CustomButton>
    </StyledCoursesFilters>
  )
}
