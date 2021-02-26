import React, { useState } from 'react'
import { CustomButton } from '../button/CustomButton';

import { Menu, Dropdown } from 'antd';

import {  ArrowLeftOutlined, ArrowRightOutlined, DownOutlined  } from '@ant-design/icons';

import { StyledPagination } from './Styles';

export const Pagination = ({ pagination = [1,2,3,4,5] }) => {

  const [ currentPage, setCurrentPage ] = useState( 1 )

  // MENU PAGINATION
  function handleMenuClickPagination( e ) {
    setCurrentPage( parseInt( e.key ) )
  }

  const menuPagination = (
    <Menu onClick={ handleMenuClickPagination }>
      {
        pagination.map( pag => (
          <Menu.Item key={ pag }>
            { pag }
          </Menu.Item>
        ))
      }
    </Menu>
  );

  function prevPage () {
    if ( currentPage > 1 ) {
      setCurrentPage( currentPage - 1 );
    }
  }

  function nextPage () {
    if ( currentPage < pagination.length ) {
      setCurrentPage( currentPage + 1 );
    }
  }

  return (
    <StyledPagination>
      <CustomButton outline={ 1 } onClick={ prevPage }>
        <ArrowLeftOutlined />
      </CustomButton>

      <span>Página</span>

      <Dropdown overlay={ menuPagination }>
        <CustomButton outline={ 1 } dropdown="true">
          { currentPage } <DownOutlined />
        </CustomButton>
      </Dropdown>

      <span>de { pagination.length }</span>

      <CustomButton outline={ 1 } onClick={ nextPage }>
        <ArrowRightOutlined />
      </CustomButton>
    </StyledPagination>
  )
}
