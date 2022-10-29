import React from "react";
import "./Profile.css";
import profileImg from "./assets/profile__img.png";
import avatar from "./assets/avatar.png";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile_img">
        <img src={profileImg} alt="" />
      </div>
      <div className="twitter">
        <h5>Olayinka Bankole</h5>
      </div>

      {/* <div id="slack">
            <h5>Azeez Bankole</h5>
          </div> */}
      <button className="avatar">
        <img className="avatar_img" src={avatar} alt="share" />
      </button>
    </section>
  );
};

export default Profile;
