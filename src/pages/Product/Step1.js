import React, { Fragment } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Divider, Modal } from 'antd';
import router from 'umi/router';
import styles from './style.less';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@Form.create()
class Step1 extends React.PureComponent {
  render() {
    const { form, dispatch, data = {} } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const onValidateForm = () => {
      Modal.warning({
        title: '操作失败',
        content: '服务器开小差了',
        onOk: () => {

        }
      })
    };
    return (
      <Fragment>
        <Form layout="horizontal" className={styles.stepForm} hideRequiredMark>
          <Form.Item {...formItemLayout} label="产品名称">
            <Input placeholder="请输入产品名称" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="内部SKU">
            <Input placeholder="可不填" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="产品尺寸">
            <Input.Group compact>
              <Input placeholder="长" addonAfter="mm" style={{ width: '100px'}} />
              <Input placeholder="宽" addonAfter="mm" style={{ width: '100px', marginLeft: '32px'}} />
              <Input placeholder="高" addonAfter="mm" style={{ width: '100px', marginLeft: '32px'}} />
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label="包装尺寸">
            <Input.Group compact>
              <Input placeholder="长" addonAfter="mm" style={{ width: '100px'}} />
              <Input placeholder="宽" addonAfter="mm" style={{ width: '100px', marginLeft: '32px'}} />
              <Input placeholder="高" addonAfter="mm" style={{ width: '100px', marginLeft: '32px'}} />
            </Input.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label="产品重量">
            <Input placeholder="净重" addonAfter="lbs" style={{ width: '100px'}} />
            <Input placeholder="毛重" addonAfter="lbs" style={{ width: '100px', marginLeft: '32px'}} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="价格区间">
            <Input placeholder="采购价" addonBefore="$" style={{ width: '100px'}} />
            <Input placeholder="最低售价" addonBefore="$" style={{ width: '100px', marginLeft: '32px'}} />
          </Form.Item>
          <Form.Item {...formItemLayout} label="产品描述">
            <Input.TextArea rows={4} placeholder="请输入产品描述" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="英文描述">
            <Input.TextArea rows={4} placeholder="Please input description" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              xs: { span: 24, offset: 0 },
              sm: {
                span: formItemLayout.wrapperCol.span,
                offset: formItemLayout.labelCol.span,
              },
            }}
            label=""
          >
            <Button type="primary" onClick={onValidateForm}>
              下一步
            </Button>
          </Form.Item>
        </Form>
        <Divider style={{ margin: '40px 0 24px' }} />
        <div className={styles.desc}>
          <h3>说明</h3>
          <p>
            优先使用英文描述作为同步到亚马逊和eBay平台
          </p>
          <p>
            不同平台对商铺描述字数限制不一样，同步完成后最好在相应平台做二次确认，防止由于平台描述规则发生变化引起异常。
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Step1;
