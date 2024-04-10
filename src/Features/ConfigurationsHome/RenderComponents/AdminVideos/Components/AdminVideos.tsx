import React from "react";
import { AdminVideosTypes } from "../AdminVideosTypes";
import images from "../../../../ImageVariables";
import icons from "../../../../Assets/Icons/icons";
import "../SCSS/styles.css";

function AdminVideos({ handleChangeInput, handleSave }: AdminVideosTypes) {
  return (
    <div className="admin-video-container">
      <div className="add-video-cover">
        <div className="add-video-inner-cover">
          <div className="video-header">VIDEOS</div>
          <div className="add-video-header">Add Videos</div>
          <div className="video-input-field-cover">
            <div className="video-input-field-img-cover">
              <div className="video-logo-upload-img">
                <input
                  className="video-file"
                  type="file"
                  accept="video/*"
                  onChange={(e) => handleChangeInput(e, "videoInfo")}
                />
              </div>
              <div className="admin-video-btn-cover">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={() => handleSave()}>
                  SAVE
                </button>
              </div>
            </div>
            <div className="admin-video-input-filed-cover">
              <div className="video-name-cover">
                <label className="video-label-cover">
                  <div className="video-text">title</div>
                  <input
                    className="video-name-input"
                    type="text"
                    onChange={(e) => handleChangeInput(e, "title")}
                  />
                </label>
              </div>
              <div className="video-description-cover">
                <label className="video-description-cover">
                  <div className="video-description">Description</div>
                  <textarea
                    className="video-description-text-area"
                    onChange={(e) => handleChangeInput(e, "description")}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="admin-video-cards-cover">
        <div className="cards-video-header">Library</div>
        <div className="cards-cover">
          {[1, 2, 3].map((i) => (
            <div key={i} className="cards">
              <div className="cards-img">
                <img src={images.videoThumbnail} className="thumbnail" />
              </div>
              <div className="cards-content">
                <div className="title">
                  Embracing the journey: Unraveling the life changing benefits
                  of running
                </div>
                <div className="para">
                  Explore the myriad health advantages that running offers, from
                  enhancing cardiovascular fitness...
                </div>
                <button className="btn">Play</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminVideos;
