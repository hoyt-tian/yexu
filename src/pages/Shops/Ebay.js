import React, { PureComponent } from 'react';
import { Card, Button, Icon, List } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './CardList.less';

class Amazon extends PureComponent {
  render() {
    const { loading } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <p>您可以在这里管理所有的Ebay店铺</p>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="Ebay"
          src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=452835460,1491456444&fm=58&s=0FC3FC16CD44CE139ED1585402009070"
        />
      </div>
    );

    return (
      <PageHeaderWrapper title="Ebay店铺管理" content={content} extraContent={extraContent}>
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={[
              '',
              {
                id: '2xs332sdfe4asdfa',
                title: 'ebay001',
                description: 'Alex负责的ebay',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
              },
              {
                id: '2xs332sdfe4asdfa',
                title: 'Ebay 002',
                description: '002ebay',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png',
              },
            ]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card hoverable className={styles.card} actions={[<a>编辑</a>, <a>删除</a>]}>
                    <Card.Meta
                      avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                      title={<a>{item.title}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3}>
                          {item.description}
                        </Ellipsis>
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <Icon type="plus" /> 新增店铺
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Amazon;
