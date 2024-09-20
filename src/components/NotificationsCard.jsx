import React from 'react';
import { List, Avatar, Card, Badge } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'New User Signup',
    description: 'John Doe signed up for an account.',
    time: '2 minutes ago',
  },
  {
    title: 'Payment Received',
    description: 'You received a payment of $500 from Jane Smith.',
    time: '10 minutes ago',
  },
  {
    title: 'New Comment',
    description: 'Someone commented on your post.',
    time: '30 minutes ago',
  },
  {
    title: 'Task Completed',
    description: 'Your scheduled task has been completed.',
    time: '1 hour ago',
  },
];

const NotificationsCard = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '10px',
      }}
      title={
        <span>
          <NotificationOutlined /> Notifications
        </span>
      }
      extra={<Badge count={data.length} />}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<NotificationOutlined />} />}
              title={item.title}
              description={item.description}
            />
            <div>{item.time}</div>
          </List.Item>
        )}
      />
    </Card>
  );
};

export default NotificationsCard;
