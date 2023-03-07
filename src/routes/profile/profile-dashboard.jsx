import React from "react";
import UserInfo from "../../components/profile/user-info";

const ProfileDashboard = () => {
  return (
    <div className="tablet:pt-24 pt-20s">
      <UserInfo avatar={''} displayName={''} email={''} phoneNumber={''} />
    </div>
  );
};

export default ProfileDashboard;
