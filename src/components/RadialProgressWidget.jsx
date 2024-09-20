import React from 'react';
import { Progress, Typography } from 'antd';

const RadialProgressWidget = ({ title, percent, color }) => {
  return (
    <div style={radialWidgetContainer}>
      <div style={circleContainer}>
        <Progress
          type="circle"
          percent={percent}
          strokeWidth={10}
          strokeColor={color}
          width={150}
          format={(percent) => `${percent}%`}
        />
      </div>
      <Typography.Title level={4} style={{ marginTop: '15px', color }}>
        {title}
      </Typography.Title>
    </div>
  );
};

const radialWidgetContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '10px',
  background: 'linear-gradient(135deg, #f0f2f5 30%, #ffffff 100%)',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
};

const circleContainer = {
  position: 'relative',
};

export default RadialProgressWidget;
