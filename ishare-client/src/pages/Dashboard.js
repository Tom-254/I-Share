import React, { useState } from "react";
import { Link } from "react-router-dom";
import IShareLogo from "../components/IShareLogo";
import { ReactComponent as ExploreIcon } from "../assets/explore-icon.svg";
import { ReactComponent as FeedIcon } from "../assets/feed-icon.svg";
import { ReactComponent as FriendsIcon } from "../assets/friends-icon.svg";
import { ReactComponent as FriendsDashboard } from "../assets/friends_dashboard.svg";

import { ReactComponent as LogoutIcon } from "../assets/logout-icon.svg";
import { ReactComponent as SharedDashboard } from "../assets/shared_dashboard.svg";
import { ReactComponent as UploadDashboard } from "../assets/upload_dashboard.svg";
import { ReactComponent as UploadIcon } from "../assets/upload-icon.svg";
import { ReactComponent as SearchIcon } from "../assets/search_icon.svg";
import ProfileImage from "../assets/profile-image.jpg";
import IShareButton from "../components/IShareButton";
import DashStats from "../components/DashStats";
import ImageShow from "../components/ImageShow";
import ManImage from "../assets/man-image.png";
import NatureImage from "../assets/nature-image.png";
import IShareModal from "../components/IShareModal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="dashboard">
      <aside className="flex-column dashboard-left">
        <div>
          <IShareLogo />
        </div>
        <div className="flex-column dashboard-left__profile">
          <div className="flex-center__column dashboard-left__profile-image">
            <img src={ProfileImage} alt="Profile" />
          </div>
          <div className="flex-column dashboard-left__profile-content">
            <p>Josh Turner</p>
            <p>turner15@gmail.com</p>
          </div>
        </div>
        <div className="flex-column dashboard-left__nav">
          <ul className="flex-column dashboard-left__nav-top">
            <li>
              <Link to="/" className="flex active">
                <FeedIcon />
                Feed
              </Link>
            </li>
            <li>
              <Link to="/" className="flex">
                <ExploreIcon />
                Explore
              </Link>
            </li>
            <li>
              <Link to="/" className="flex friends">
                <FriendsIcon /> Friends
              </Link>
            </li>
          </ul>
          <div className="dashboard-left__nav-bottom">
            <Link to="/" className="flex">
              <LogoutIcon />
              Logout
            </Link>
          </div>
        </div>
      </aside>
      <div className="flex-column dashboard-right">
        <div className="flex dashboard-right-top">
          <div className="flex search__input" id="search">
            <SearchIcon />
            <input />
          </div>
          <IShareButton
            buttonIconLeft={<UploadIcon />}
            buttonName={"Upload Image"}
            buttonStyle={"nav-login__button"}
            onClick={() => setOpenModal(prev => !prev)}
          />
        </div>
        <div className="flex dashboard-right-middle">
          <DashStats
            icon={<UploadDashboard />}
            title={"20+"}
            content="Uploaded Images"
          />
          <DashStats
            icon={<FriendsDashboard />}
            title={"10+"}
            content="Friends"
          />
          <DashStats
            icon={<SharedDashboard />}
            title={"20+"}
            content="Shared Images"
          />
        </div>
        <div className="flex-column dashboard-right-bottom">
          <p className="dashboard-right-bottom__title">Feed</p>
          <div className="dashboard-right-bottom__content">
            <ImageShow
              profileImage={ManImage}
              contentImage={NatureImage}
              name={"Josh Turner"}
              email={"turner15@gmail.com"}
              imageDescription={"We make sharing, storing </br> and finding your photos easy."}
            />
            <ImageShow
              profileImage={ManImage}
              contentImage={NatureImage}
              name={"Josh Turner"}
              email={"turner15@gmail.com"}
              imageDescription={"We make sharing, storing </br> and finding your photos easy."}
            />
            <ImageShow
              profileImage={ManImage}
              contentImage={NatureImage}
              name={"Josh Turner"}
              email={"turner15@gmail.com"}
              imageDescription={"We make sharing, storing </br> and finding your photos easy."}
            />
          </div>
        </div>
      </div>
      { openModal && <IShareModal setIsOpen={setOpenModal} > </IShareModal> }
    </div>
  );
};

export default Dashboard;
