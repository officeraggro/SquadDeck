import React from "react";
import NavBar from "./navigation/nav-bar";
import styled from "styled-components";

const Pagelayout = styled.div`
	margin-left: 80px;
`;

const PageLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			<Pagelayout>
				<div className="page-content">{children}</div>
			</Pagelayout>
		</>
	);
};

export default PageLayout;
