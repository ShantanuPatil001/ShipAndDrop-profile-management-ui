import React from "react";
import UserInfo from "../../components/profile/user-info";

const ProfileDashboard = () => {
  return (
    <div className="tablet:pt-24 pt-20 bg-white dark:bg-black">
      <UserInfo avatar={''} displayName={''} email={''} phoneNumber={''} />
    </div>
  );
};

export default ProfileDashboard;
