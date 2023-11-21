import PageLayout from "../components/page-layout";
import Dropzone from "../components/Dropzone";
// import { useAuth0 } from "@auth0/auth0-react";

const UploadPage = () => {
	// const { user, isAuthenticated } = useAuth0();

	return  (
		<>
			<PageLayout>
				<h2>Upload Alpha Roster:</h2>
				<h5>(.cvs only)</h5>
				<Dropzone />
			</PageLayout>
		</>
	)
};

export default UploadPage;
