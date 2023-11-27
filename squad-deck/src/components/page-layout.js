import React from "react";
import NavBar from "./navigation/nav-bar";
import styled from "styled-components";

const StyledPagelayout = styled.div`
	margin-left: 80px;
`;

const PageLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			<StyledPagelayout>
				<div className="page-content">{children}</div>
			</StyledPagelayout>
		</>
	);
};

export default PageLayout;
