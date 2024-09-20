import { Flex, Typography, Dropdown, Space, Badge, Avatar, Input, Card, List, Divider, Button } from 'antd';
import React, { useState } from 'react';
import {
    BellOutlined,
    SearchOutlined,
    SettingOutlined,
    LogoutOutlined,
    ProfileOutlined,
} from '@ant-design/icons';

const CustomHeader = () => {
    const [searchValue, setSearchValue] = useState('');

    // Mock search suggestions
    const searchSuggestions = searchValue
        ? ['Dashboard', 'Settings', 'Profile', 'Help'].filter((item) =>
            item.toLowerCase().includes(searchValue.toLowerCase())
        )
        : [];

    // User Menu Content
    const userMenuContent = (
        <Card
            style={{
                width: 300,
                borderRadius: '10px',
                padding: '10px 15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
            styles={{
                body: {
                    padding: '10px',
                },
            }}
        >
            {/* User Info Section */}
            <Flex align="center" gap="16px" style={{ paddingBottom: '15px' }}>
                <Avatar size={48} src="https://randomuser.me/api/portraits/men/32.jpg" />
                <div>
                    <Typography.Text strong style={{ fontSize: '16px' }}>
                        User Name
                    </Typography.Text>
                    <br />
                    <Typography.Text type="secondary" style={{ fontSize: '14px' }}>
                        user@example.com
                    </Typography.Text>
                    <br />
                    <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                        Admin
                    </Typography.Text>
                </div>
            </Flex>
            <Divider />

            {/* Quick Actions */}
            <List
                itemLayout="horizontal"
                dataSource={[
                    { key: '1', label: 'My Profile', icon: <ProfileOutlined /> },
                    { key: '2', label: 'Settings', icon: <SettingOutlined /> },
                    { key: '3', label: 'Notifications', icon: <BellOutlined /> },
                ]}
                renderItem={(item) => (
                    <List.Item style={{ padding: '8px 0' }}>
                        <List.Item.Meta avatar={item.icon} title={<a href="#">{item.label}</a>} />
                    </List.Item>
                )}
            />
            <Divider />

            {/* Logout Button */}
            <Button
                type="primary"
                block
                icon={<LogoutOutlined />}
                style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f', marginTop: '10px' }}
            >
                Logout
            </Button>
        </Card>
    );

    // Enhanced Notification Dropdown Design
    const notifications = [
        {
            title: 'New message from John',
            time: '5 mins ago',
            status: 'unread',
        },
        {
            title: 'Server status: All good',
            time: '10 mins ago',
            status: 'read',
        },
        {
            title: 'Payment successful',
            time: '1 hour ago',
            status: 'read',
        },
    ];

    const notificationMenuContent = (
        <Card style={{ width: 300 }}>
            <List
                itemLayout="horizontal"
                dataSource={notifications}
                renderItem={(item) => (
                    <List.Item style={{ padding: '10px 0' }}>
                        <List.Item.Meta
                            avatar={
                                item.status === 'unread' ? (
                                    <Badge color="red" />
                                ) : (
                                    <Badge color="green" />
                                )
                            }
                            title={<a href="#">{item.title}</a>}
                            description={item.time}
                        />
                    </List.Item>
                )}
            />
            <Divider style={{ margin: '8px 0' }} />
            <Typography.Link href="#" style={{ display: 'block', textAlign: 'center' }}>
                View all notifications
            </Typography.Link>
        </Card>
    );

    return (
        <Flex justify="space-between" align="center" style={{ padding: '0 24px' }}>
            {/* Dashboard Title */}
            <Typography.Title level={2} style={{ margin: 0 }}>
                Dashboard
            </Typography.Title>

            {/* Search with Suggestions */}
            <Flex>
                <Input
                    placeholder="Search..."
                    prefix={<SearchOutlined />}
                    style={{ width: 250, borderRadius: '5px' }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onBlur={() => setSearchValue('')} // Clears suggestions when focus is lost
                />
                {searchSuggestions.length > 0 && (
                    <Dropdown
                        overlay={
                            <Menu
                                items={searchSuggestions.map((item, index) => ({
                                    key: index,
                                    label: item,
                                }))}
                            />
                        }
                        visible={!!searchValue} // Show dropdown only when searchValue is not empty
                        trigger={['click']}
                    >
                        <div />
                    </Dropdown>
                )}
            </Flex>


            <Flex align="center" gap="26px">
                {/* Notifications Dropdown with Enhanced Design */}
                <Dropdown
                    trigger={['click']}
                    placement="bottomRight"
                    dropdownRender={() => notificationMenuContent}
                >
                    <Badge count={2} offset={[10, 0]} size="small">
                        <BellOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
                    </Badge>
                </Dropdown>

                {/* User Dropdown with Enhanced Design */}
                <Dropdown
                    trigger={['click']}
                    placement="bottomRight"
                    dropdownRender={() => userMenuContent}
                >
                    <Space>
                        <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
                        <div style={{ lineHeight: 1 }}>
                            <Typography.Text strong>User Name</Typography.Text>
                            <br />
                            <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                                Admin
                            </Typography.Text>
                        </div>
                    </Space>
                </Dropdown>
            </Flex>
        </Flex>
    );
};

export default CustomHeader;
