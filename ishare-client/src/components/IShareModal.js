import { has } from "lodash";
import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/back.svg";

const IShareModal = ({
  setIsOpen,
  children,
  setInputValues,
  hasNext,
  setHasNext,
}) => {
  const backButtonClicked = () => {
    if (!hasNext) {
      setInputValues((prev) => ({
        image_name: "",
        image_path: "",
        image_file: "",
      }));
    } else if (hasNext === "image") {
      setHasNext(false);
    } else if (hasNext === "share") {
      setHasNext("image");
    }
  };

  const onClickNext  = () => {
    setHasNext("share")
  }

  return createPortal(
    <div
      className="modal-container"
      onClick={function (e) {
        if (e.target.className === "modal-container") setIsOpen(false);
      }}
    >
      <button className="modal-close" onClick={() => setIsOpen(false)}>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.1357 0.471718C19.9912 0.326927 19.8196 0.212055 19.6306 0.133678C19.4417 0.0553005 19.2391 0.014957 19.0346 0.014957C18.83 0.014957 18.6275 0.0553005 18.4385 0.133678C18.2496 0.212055 18.078 0.326927 17.9335 0.471718L10.2959 8.09366L2.65834 0.456099C2.51374 0.311497 2.34207 0.196793 2.15314 0.118536C1.96421 0.0402782 1.76172 1.52362e-09 1.55722 0C1.35272 -1.52362e-09 1.15023 0.0402783 0.961297 0.118536C0.772367 0.196793 0.6007 0.311497 0.456099 0.456099C0.311497 0.6007 0.196793 0.772367 0.118536 0.961297C0.0402783 1.15023 -1.52362e-09 1.35272 0 1.55722C1.52362e-09 1.76172 0.0402782 1.96421 0.118536 2.15314C0.196793 2.34207 0.311497 2.51374 0.456099 2.65834L8.09366 10.2959L0.456099 17.9335C0.311497 18.0781 0.196793 18.2497 0.118536 18.4387C0.0402783 18.6276 0 18.8301 0 19.0346C0 19.2391 0.0402783 19.4416 0.118536 19.6305C0.196793 19.8194 0.311497 19.9911 0.456099 20.1357C0.6007 20.2803 0.772367 20.395 0.961297 20.4733C1.15023 20.5515 1.35272 20.5918 1.55722 20.5918C1.76172 20.5918 1.96421 20.5515 2.15314 20.4733C2.34207 20.395 2.51374 20.2803 2.65834 20.1357L10.2959 12.4981L17.9335 20.1357C18.0781 20.2803 18.2497 20.395 18.4387 20.4733C18.6276 20.5515 18.8301 20.5918 19.0346 20.5918C19.2391 20.5918 19.4416 20.5515 19.6305 20.4733C19.8194 20.395 19.9911 20.2803 20.1357 20.1357C20.2803 19.9911 20.395 19.8194 20.4733 19.6305C20.5515 19.4416 20.5918 19.2391 20.5918 19.0346C20.5918 18.8301 20.5515 18.6276 20.4733 18.4387C20.395 18.2497 20.2803 18.0781 20.1357 17.9335L12.4981 10.2959L20.1357 2.65834C20.7292 2.06483 20.7292 1.06523 20.1357 0.471718Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="modal-centered">
        <div className="modal-main">
          <div className="flex modal-header">
            {hasNext && (
              <BackButton
                className="modal-button"
                onClick={backButtonClicked}
              />
            )}
            <p className="modal-title">
              {!hasNext
                ? "Upload new Image"
                : hasNext === "image"
                ? "Preview image"
                : hasNext === "share"
                ? "Create Image"
                : ""}
            </p>
            {hasNext && <Link onClick={onClickNext}>{hasNext === "share"
                ? "Create"
                : "Next"}</Link>}
          </div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default IShareModal;
