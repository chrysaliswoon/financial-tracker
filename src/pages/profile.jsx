import SideNavigation from "../components/navigation/navbar";
import ProfileInfo from "../components/features/profile/profileInfo"
import { useState } from "react";

export default function ProfilePage() {
    const [profilePic, setprofilePic] = useState(
      "http://source.unsplash.com/500x500/?girl"
    );

    const addProfilePicture = (pictures) => {
      let picture = [...profilePic, pictures];
      setprofilePic(picture);
    };

  console.log(profilePic);
  
  return (
    <div className="flex bg-gray-100 ">
      <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r ">
        <SideNavigation />
      </div>
      <div className="p-4 m-8 flex-auto w-64">
        <h1 className="uppercase font-bold">Profile Page</h1>
        <div>
          <ProfileInfo profilePic={profilePic}/>
        </div>
      </div>
    </div>
  );
}
