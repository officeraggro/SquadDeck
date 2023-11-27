import { useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { SdUserContext } from "../components/sd-user-context";
import PageLayout from "../components/page-layout";

const UserProfile = () => {
  const { user } = useAuth0();
  const { sdUser} = useContext(SdUserContext);

  console.log(user)
  console.log(sdUser)


  return (
    <>
      <PageLayout>
        <h1>Profile Page</h1>
        <p></p>
      </PageLayout>
    </>
  );
};

export default UserProfile;
