import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SdUserContext } from "../sd-user-context";
import "../../Styled/nav-bar.css";
import styled from "styled-components";
import { Layout, Menu, Button, theme } from "antd";
import {
	HomeOutlined,
	BarsOutlined,
	MenuFoldOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header, Sider } = Layout;

const HamburgerMenu = () => {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(true);

	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { logout } = useAuth0();
	const { setSdUser } = useContext(SdUserContext);

	return (
		<Layout>
			<Sider collapsed={collapsed} collapsible trigger={null}>
				<Menu
					theme="dark"
					mode="inline"
					className="menu-bar"
					onClick={({ key }) => {
						if (key === "signout") {
							setSdUser([]);
							logout({
								logoutParams: {
									returnTo: "http://localhost:3001/",
								},
							});
						} else if (key === "menu" || key === "toggle") {
							console.log("Menu clicked!");
						} else {
							navigate(key);
						}
					}}
				>
					<Menu.Item
						key="toggle"
						type="text"
						className="toggle"
						onClick={() => setCollapsed(!collapsed)}
						icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					/>
					<Menu.Item key="/home" icon={<HomeOutlined />}>
						Home
					</Menu.Item>
					<Menu.SubMenu key="menu" icon={<BarsOutlined />} title="Menu">
						<Menu.Item key="/org">Org Chart</Menu.Item>
						<Menu.Item key="/upload">Upload Roster</Menu.Item>
					</Menu.SubMenu>
					<Menu.Item key="signout">Sign Out</Menu.Item>
					<Menu.Item key="/settings">Settings</Menu.Item>
				</Menu>
			</Sider>
		</Layout>
	);
};

export default HamburgerMenu;
