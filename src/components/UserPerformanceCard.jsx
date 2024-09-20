import React from 'react';
import { Card, Progress, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserPerformanceCard = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '20px',
      }}
      title="User Performance"
      extra={<Avatar size="large" icon={<UserOutlined />} />}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} style={{ marginBottom: '10px' }} />
        <Typography.Title level={4}>John Doe</Typography.Title>
        <Typography.Text type="secondary">Software Engineer</Typography.Text>
        <div style={{ marginTop: '20px', width: '100%' }}>
          <Typography.Text>Task Completion</Typography.Text>
          <Progress percent={80} />
        </div>
        <div style={{ marginTop: '20px', width: '100%' }}>
          <Typography.Text>Daily Activity</Typography.Text>
          <Progress percent={65} />
        </div>
      </div>
    </Card>
  );
};

export default UserPerformanceCard;
