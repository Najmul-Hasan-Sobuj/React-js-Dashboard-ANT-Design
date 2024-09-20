import React from 'react';
import { Calendar, Badge } from 'antd';

const HeatmapCalendar = () => {
  const getListData = (value) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'warning', content: 'High activity' }];
        break;
      case 10:
        listData = [{ type: 'success', content: 'Moderate activity' }];
        break;
      case 15:
        listData = [{ type: 'error', content: 'Low activity' }];
        break;
      default:
        listData = [];
    }
    return listData || [];
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul style={styles.events}>
        {listData.map((item) => (
          <li key={item.content} style={styles.eventItem}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div style={styles.heatmapContainer}>
      <Calendar dateCellRender={dateCellRender} fullscreen={false} />
    </div>
  );
};

const styles = {
  heatmapContainer: {
    padding: '20px',
    borderRadius: '10px',
    background: '#f9f9f9',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
  },
  events: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  eventItem: {
    fontSize: '12px',
    color: '#555',
  },
};

export default HeatmapCalendar;
