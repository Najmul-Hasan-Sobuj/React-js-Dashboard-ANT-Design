import { Card, Statistic } from 'antd';
import React from 'react';

const StatisticsCard = ({ title, value, icon }) => {
  return (
    <Card
      style={{
        width: 300,
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <Statistic
        title={title}
        value={value}
        prefix={icon}
        valueStyle={{ fontSize: '24px' }}
      />
    </Card>
  );
};

export default StatisticsCard;
