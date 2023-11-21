import { useState, useEffect } from "react";
import "../../Styled/nav-bar.css";
import styled from "styled-components";
import { Layout, Menu, Button, theme } from "antd";
import { HomeOutlined, BarsOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";



const {Header, Sider} = Layout;

const HamburgerMenu = () => {
	// const handleClick = () => {
	// 	return dropdown();
	// };

	// const dropdown = () => {
	// 	return (
	// 		<Menu theme="dark">
	// 			<Menu.Item key="home" icon={<HomeOutlined />}>
	// 				Home
	// 			</Menu.Item>
	// 		</Menu>
	// 	);
	// };

	const [collapsed, setCollapsed] = useState(false);

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout>
			<Sider collapsed={collapsed} collapsible trigger={null}>
				<Menu theme="dark" mode="inline" className="menu-bar">
					<Menu.Item key="home" icon={<HomeOutlined />}>
						Home
					</Menu.Item>
					<Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Menu">
						<Menu.Item key="act1">Activity 1</Menu.Item>
						<Menu.Item key="act2">Activity 2</Menu.Item>
						<Menu.Item key="settings">Settings</Menu.Item>
					</Menu.SubMenu>
				</Menu>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }}>
					<Button
						type="text"
						className='toggle'
						onClick={() => setCollapsed(!collapsed)}
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					/>
				</Header>
			</Layout>
		</Layout>
	);
};

export default HamburgerMenu;
