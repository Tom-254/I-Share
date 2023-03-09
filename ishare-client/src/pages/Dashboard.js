import React, { useRef, useState } from "react";
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
import { ReactComponent as UploadSVG } from "../assets/Upload_image.svg";
import ProfileImage from "../assets/profile-image.jpg";
import IShareButton from "../components/IShareButton";
import DashStats from "../components/DashStats";
import ImageShow from "../components/ImageShow";
import ManImage from "../assets/man-image.png";
import NatureImage from "../assets/nature-image.png";
import IShareModal from "../components/IShareModal";
import IShareInput from "../components/IShareInput";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    image_name: "",
    image_path: "",
    image_description: "",
    image_file: "",
  });
  const [hasNext, setHasNext] = useState(false);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = URL.createObjectURL(event.target.files[0]);
    setInputValues((prev) => ({ ...prev, image_file: fileUploaded }));
    setHasNext("image");
  };
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
            onClick={() => setOpenModal((prev) => !prev)}
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
              imageDescription={
                "We make sharing, storing </br> and finding your photos easy."
              }
            />
            <ImageShow
              profileImage={ManImage}
              contentImage={NatureImage}
              name={"Josh Turner"}
              email={"turner15@gmail.com"}
              imageDescription={
                "We make sharing, storing </br> and finding your photos easy."
              }
            />
            <ImageShow
              profileImage={ManImage}
              contentImage={NatureImage}
              name={"Josh Turner"}
              email={"turner15@gmail.com"}
              imageDescription={
                "We make sharing, storing </br> and finding your photos easy."
              }
            />
          </div>
        </div>
      </div>
      {openModal && (
        <IShareModal
          setInputValues={setInputValues}
          setIsOpen={setOpenModal}
          hasNext={hasNext}
          setHasNext={setHasNext}
        >
          {!hasNext ? (
            <div className="flex-center__column  upload-image-button">
              <UploadSVG />
              <p className="modal-upload__text">
                Upload photos to preview them here
              </p>
              <IShareButton
                buttonName={"Select from computer"}
                onClick={handleClick}
              />
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
          ) : hasNext === "image" ? (
            <div className="uploaded-image">
              <img src={inputValues.image_file} alt="Uploded" />
            </div>
          ) : (<div className="flex upload-image-inputs" >
            <div className="uploaded-image">
              <img src={inputValues.image_file} alt="Uploded" />
            </div>
            <div className="upload-separator">
            </div>
            <div className="upload-inputs flex-column">
              <IShareInput labelName={"Name your image"} />
              <IShareInput labelName={"Add Image Caption"} inputType={"textarea"} />
            </div>
          </div>)}
        </IShareModal>
      )}
    </div>
  );
};

export default Dashboard;
