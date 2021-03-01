import React from 'react'

// Styles
import {
  StyledPagination,
  MobilePagination,
  DesktopPagination
} from './Styles';

// Icons ANTD
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

// Components ANTD
import { Menu, Dropdown } from 'antd';

// Components
import { CustomButton } from '../button/CustomButton';

export const Pagination = ({
  currentPage,
  setCurrentPage,
  coursesPerPage,
  totalCourses
}) => {

  const pageNumbers = [];

  for ( let i = 1; i <= Math.ceil( totalCourses / coursesPerPage ); i++ ) {
    pageNumbers.push(i);
  }

  // MENU PAGINATION
  function handleMenuClickPagination( e ) {
    setCurrentPage( parseInt( e.key ) )
  }

  const menuPagination = (
    <Menu onClick={ handleMenuClickPagination }>
      {
        pageNumbers.map( number => (
          <Menu.Item key={ number }>
            { number }
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
    if ( currentPage < pageNumbers.length ) {
      setCurrentPage( currentPage + 1 );
    }
  }

  return (
    <StyledPagination>
      <MobilePagination>
        <CustomButton outline={ 1 } onClick={ prevPage }>
          <LeftOutlined />
        </CustomButton>

        <div>
          <span>{ currentPage }</span>
          <span>/</span>
          <span>{ pageNumbers.length }</span>
        </div>

        <CustomButton outline={ 1 } onClick={ nextPage }>
          <RightOutlined />
        </CustomButton>
      </MobilePagination>

      <DesktopPagination>
        <CustomButton outline={ 1 } onClick={ prevPage }>
          <ArrowLeftOutlined />
        </CustomButton>

        <span>Página</span>

        <Dropdown overlay={ menuPagination }>
          <CustomButton outline={ 1 } dropdown="true">
            { currentPage } <DownOutlined />
          </CustomButton>
        </Dropdown>

        <span>de { pageNumbers.length }</span>

        <CustomButton outline={ 1 } onClick={ nextPage }>
          <ArrowRightOutlined />
        </CustomButton>
      </DesktopPagination>
    </StyledPagination>
  )
}
