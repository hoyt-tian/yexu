import React, { PureComponent, Fragment } from 'react';
import { Card, Steps } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';
import Step1 from './Step1';
const { Step } = Steps;

export default class StepForm extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { location } = this.props;
    return (
      <PageHeaderWrapper
        title=""
        tabActiveKey={location.pathname}
        content=""
      >
        <Card bordered={false}>
          <Fragment>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="填写基本信息" />
              <Step title="上传产品图片" />
              <Step title="完成数据核对" />
            </Steps>
            <Step1 />
          </Fragment>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
