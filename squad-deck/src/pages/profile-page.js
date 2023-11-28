import PageLayout from "../components/page-layout";
import Profile from '../components/user-profile';
import "../Styled/profile-page.css"

const UserProfile = () => {

  return (
    <>
      <PageLayout>
        <Profile />
      </PageLayout>
    </>
  );
};

export default UserProfile;
