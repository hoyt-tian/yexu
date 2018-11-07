import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Powered By hoyt',
          title: '技术支持：杭州巨梦科技有限公司',
          href: 'https://www.hoyt-tian.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright 浙江宠悦工贸有限公司 Since <Icon type="copyright" /> 2016
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
