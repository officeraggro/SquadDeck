import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { SdUserContext } from "../sd-user-context";
import "../../Styled/nav-bar.css";
import { Layout, Menu, theme } from "antd";
import {
  HomeOutlined,
  BarsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import SearchContext from "../SearchContext";

const { Sider } = Layout;

const HamburgerMenu = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);
  const {setSearchData} = useContext(SearchContext)

  const handleClick = () => {
    console.log('search')
		return setSearchData([])
	}

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { logout } = useAuth0();
  const { sdUser, setSdUser } = useContext(SdUserContext);

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
              localStorage.clear();
              logout({
                logoutParams: {
                  returnTo: "http://localhost:3001/",
                },
              });
            } else if (key === "menu" || key === "toggle") {
              console.log("Menu clicked!");
            } else if (key === "/home") {
              handleClick();
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
          <Menu.Item key="/home" 
          icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          {sdUser[0]?.role === "admin" && (
            <Menu.SubMenu key="menu" icon={<BarsOutlined />} title="Menu">
              <Menu.Item key="/org">Org Chart</Menu.Item>
              <Menu.Item key="/upload">Upload Roster</Menu.Item>
              <Menu.Item key="/profile">Profile</Menu.Item>
            </Menu.SubMenu>
          )}
          {sdUser[0]?.role === "user" && (
            <Menu.SubMenu key="menu" icon={<BarsOutlined />} title="Menu">
              <Menu.Item key="/org">Org Chart</Menu.Item>
              <Menu.Item key="/profile">Profile</Menu.Item>
            </Menu.SubMenu>
          )}
          <Menu.Item key="signout" icon={<LogoutOutlined />}>
            Sign Out
          </Menu.Item>
          <Menu.Item key="/settings" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default HamburgerMenu;
