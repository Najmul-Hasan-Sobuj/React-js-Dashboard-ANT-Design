import React from 'react';
import { Card, List, Progress } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const taskData = [
  {
    title: 'UI Design Improvements',
    progress: 70,
  },
  {
    title: 'API Integration',
    progress: 50,
  },
  {
    title: 'Database Optimization',
    progress: 85,
  },
  {
    title: 'Security Audit',
    progress: 40,
  },
];

const TaskProgressComponent = () => {
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: '10px',
        margin: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '10px',
      }}
      title="Task Progress"
      extra={<CheckCircleOutlined />}
    >
      <List
        itemLayout="horizontal"
        dataSource={taskData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={<Progress percent={item.progress} status="active" />}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default TaskProgressComponent;
