import React, { useState } from 'react';
import { Button, Col, Flex, Layout, Row } from 'antd';
import Sidebar from './components/Sidebar';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './App.css';
import CustomHeader from './components/CustomHeader';
import StatisticsCard from './components/StatisticsCard';
import LineChartComponent from './components/LineChartComponent';
import NotificationsCard from './components/NotificationsCard';
import TaskProgressComponent from './components/TaskProgressComponent';
import ActivityFeedComponent from './components/ActivityFeedComponent';
import UserPerformanceCard from './components/UserPerformanceCard';
import RevenueSummaryCard from './components/RevenueSummaryCard';
import RadialProgressWidget from './components/RadialProgressWidget';
import LiveActivityTracker from './components/LiveActivityTracker';
import HeatmapCalendar from './components/HeatmapCalendar';

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
          <Sidebar />
        </Sider>
        <Button type='text' onClick={() => setCollapsed(!collapsed)} className='trigger-btn' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}></Button>

        <Layout>
          <Header className='header'>
            <CustomHeader></CustomHeader>
          </Header>
          <Content className="content">
            <Row gutter={10} style={{ padding: '10px' }}>
              <Col xs={24} sm={12} lg={8}>
                <LiveActivityTracker />
                <StatisticsCard title="Total Users" value={1500} icon={<MenuUnfoldOutlined />} />
                <StatisticsCard title="Total Users" value={1500} icon={<MenuUnfoldOutlined />} />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <LineChartComponent />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <NotificationsCard />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <TaskProgressComponent />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <UserPerformanceCard />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <RevenueSummaryCard />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <HeatmapCalendar />
              </Col>

              <Col xs={24} sm={12} lg={8}>
                <RadialProgressWidget title="Project Completion" percent={85} color="#1890ff" />
              </Col>

              {/* Radial Progress Widget 2 */}
              <Col xs={24} sm={12} lg={8}>
                <RadialProgressWidget title="Monthly Target" percent={60} color="#52c41a" />
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <ActivityFeedComponent />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;