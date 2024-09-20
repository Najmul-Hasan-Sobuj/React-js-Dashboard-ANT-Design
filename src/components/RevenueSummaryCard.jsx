import React from 'react';
import { Card, Typography, Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const RevenueSummaryCard = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '20px',
      }}
      title="Revenue Summary"
    >
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Revenue"
            value={112893}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix="$"
            suffix="USD"
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Monthly Growth"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        <Col span={12}>
          <Statistic
            title="Previous Month"
            value={102431}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix="$"
            suffix="USD"
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Change"
            value={10.23}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default RevenueSummaryCard;
