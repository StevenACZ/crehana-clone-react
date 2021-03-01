import React, { useState } from 'react'

// Styles
import {
  StyledCoursesFilters,
  StyledCoursesFiltersItem,
  ButtonsContainer,
  ModalContent
} from './Styles';

// Icons ANTD
import {
  DownOutlined,
  UserOutlined,
  FilterOutlined
} from '@ant-design/icons';

// Components ANTD
import {
  Menu,
  Dropdown,
  Modal
} from 'antd';

// Components
import { CustomButton } from '../button/CustomButton';

export const CoursesFilters = ({
  allFiltersData,
  filtersParams,
  setFilterParams
}) => {

  const { allCategory, allSubcategory, allLevel, allPrice } = allFiltersData;

  const [ params, setParams ] = useState( filtersParams );

  // MENU CATEGORY
  function handleMenuClickCategory( e ) {
    setParams( {
      ...params,
      category: e.key
    })
  }

  const menuCategory = (
    <Menu onClick={ handleMenuClickCategory }>
      {
        allCategory.map( category => (
          <Menu.Item key={ category } icon={<UserOutlined />}>
            { category }
          </Menu.Item>
        ))
      }
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
      {
        allSubcategory.map( subcategory => (
          <Menu.Item key={ subcategory } icon={<UserOutlined />}>
            { subcategory }
          </Menu.Item>
        ))
      }
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
      {
        allLevel.map( level => (
          <Menu.Item key={ level } icon={<UserOutlined />}>
            { level }
          </Menu.Item>
        ))
      }
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
      {
        allPrice.map( price => (
          <Menu.Item key={ price } icon={<UserOutlined />}>
            ${ price }
          </Menu.Item>
        ))
      }
    </Menu>
  );

  // Submit Filters Params
  const handleSubmitFiltersParams = () => {
    setFilterParams( params )
  }

  // Modal
  const [ isModalVisible, setIsModalVisible ] = useState( false );

  const showModal = () => {
    setIsModalVisible( true );
  };

  const handleOk = () => {
    setIsModalVisible( false );
    handleSubmitFiltersParams();
  };

  const handleCancel = () => {
    setIsModalVisible( false );
  };

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

      <ButtonsContainer>
        <CustomButton onClick={ handleSubmitFiltersParams }>
          Aplicar filtros
        </CustomButton>

        <CustomButton outline={ 3 } onClick={ showModal }>
          <FilterOutlined />Filtrar por
        </CustomButton>
      </ButtonsContainer>
    
      <Modal
        title="Aplicar filtros"
        visible={ isModalVisible }
        onOk={ handleOk }
        okText="Buscar"
        onCancel={ handleCancel }
        cancelText="Cancelar"
        centered
      >
        <ModalContent>
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
        </ModalContent>
      </Modal>
    </StyledCoursesFilters>
  )
}
