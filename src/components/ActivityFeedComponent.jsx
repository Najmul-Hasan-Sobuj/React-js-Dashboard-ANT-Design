import React from 'react';
import { Card, Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const activities = [
  {
    time: '2024-09-20 10:00',
    title: 'User Jane Doe logged in',
  },
  {
    time: '2024-09-20 10:30',
    title: 'User John Smith created a new post',
  },
  {
    time: '2024-09-20 11:00',
    title: 'User Alice Brown commented on a post',
  },
  {
    time: '2024-09-20 11:30',
    title: 'System backup completed',
  },
];

const ActivityFeedComponent = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '10px',
      }}
      title="Recent Activities"
      extra={<ClockCircleOutlined />}
    >
      <Timeline>
        {activities.map((activity, index) => (
          <Timeline.Item key={index}>
            <strong>{activity.title}</strong>
            <br />
            <span style={{ color: 'gray' }}>{activity.time}</span>
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  );
};

export default ActivityFeedComponent;
