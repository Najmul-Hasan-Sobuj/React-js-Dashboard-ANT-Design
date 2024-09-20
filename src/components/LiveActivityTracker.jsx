import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';

const LiveActivityTracker = () => {
  const [activities, setActivities] = useState([
    "User John logged in",
    "New message from Sarah",
    "Task 'Design Review' completed",
    "User Amy updated profile",
    "User Michael added a new project",
  ]);
  
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivityIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activities]);

  return (
    <div style={liveTrackerContainer}>
      <Typography.Title level={4} style={{ marginBottom: '10px' }}>
        Live Activity Tracker
      </Typography.Title>
      <div style={scrollingTextContainer}>
        <Typography.Text style={scrollingText}>
          {activities[currentActivityIndex]}
        </Typography.Text>
      </div>
    </div>
  );
};

const liveTrackerContainer = {
  padding: '20px',
  borderRadius: '10px',
  background: '#ffffff',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const scrollingTextContainer = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'relative',
  width: '100%',
};

const scrollingText = {
  animation: 'scrolling 5s linear infinite',
  fontSize: '16px',
  color: '#1890ff',
};

export default LiveActivityTracker;
