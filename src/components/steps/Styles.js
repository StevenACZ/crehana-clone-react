import styled from 'styled-components';

import { Steps } from 'antd';

import { color } from '../../assets/styles/variables';

export const StyledCustomSteps = styled( Steps )`
  & > .ant-steps-item {

    &-process {
      & > .ant-steps-item-container {
        & > .ant-steps-item-icon {
          background-color: ${ color.colorGreyLight4 };
          border: 1px solid ${ color.colorGreyLight4 };

          & > .ant-steps-icon {
            color: ${ color.colorWhite };
          }
        }

        & > .ant-steps-item-content {
          & > .ant-steps-item-title {
            font-weight: 700;
            font-size: 14px;
            color: ${ color.colorGreyLight4 };
          }
        }
      }
    }

    &-wait {
      & > .ant-steps-item-container {
        & > .ant-steps-item-icon {
          background-color: ${ color.colorGreyLight4 };
          border: 1px solid ${ color.colorGreyLight4 };

          & > .ant-steps-icon {
            color: ${ color.colorWhite };
          }
        }

        & > .ant-steps-item-content {
          & > .ant-steps-item-title {
            font-weight: 700;
            font-size: 14px;
            color: ${ color.colorGreyLight4 };
          }
        }
      }
    }

    &-active {
      & > .ant-steps-item-container {
        & > .ant-steps-item-icon {
          background-color: ${ color.colorPrimary };
          border: 1px solid ${ color.colorPrimary };

          & > .ant-steps-icon {
            color: ${ color.colorWhite };
          }
        }

        & > .ant-steps-item-content {
          & > .ant-steps-item-title {
            font-weight: 700;
            font-size: 14px;
            color: ${ color.colorPrimary };
          }
        }
      }

      &:before {
        display: none;
      }
    }
  }

`;