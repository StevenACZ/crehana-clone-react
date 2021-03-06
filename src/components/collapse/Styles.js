import styled from 'styled-components';

import { Collapse } from 'antd';

import { color } from '../../assets/styles/variables';

export const StyledCustomCollapse = styled( Collapse )`
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;

  & > .ant-collapse-item {
    margin-bottom: 16px;
    border: 1px solid ${ color.colorGreyLight1 };
    border-radius: 10px;
    padding: 24px;

    & > .ant-collapse-header {
      padding: 0;
      color: ${ color.colorPrimary };

      & > span {
        padding: 0 !important;
      }
    }

    & > .ant-collapse-content {
      border-top: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: ${ color.colorGreyLight3 };
      margin-top: 8px;

      & > .ant-collapse-content-box {
        padding: 0;

        & > p {
          margin-bottom: 0;
        }
      }
    }
  }
  
  .ant-collapse-item:last-child {
    margin-bottom: 0px;
  }
`;