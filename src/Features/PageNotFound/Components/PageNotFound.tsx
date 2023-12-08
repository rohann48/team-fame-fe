import "../SCSS/styles.css";
import images from "../../ImageVariables";
function PageNotFound() {
  return (
    <div className="page-not-found-main-container">
      <div className="page-not-found-main-wrapper">
        <div className="page-not-found-svg-cover">
          <div className="page-not-found-svg-wrapper">
            <img
              className="page-not-found-img"
              src={images.PageNotFound}
              alt="page-not-found"
            />
          </div>
        </div>
        <div className="page-not-found-header-description-cover">
          <div className="page-not-found-header-text-wrapper">
            <div className="page-not-found-header-text-cover">
              <h3 className="page-not-found-header">Page not found</h3>
            </div>
            <div className="page-not-found-header-description-text-cover">
              <p className="page-not-found-description">
                The page you’re looking for either doesn’t exist or you don’t
                have access to it
              </p>
            </div>
          </div>
        </div>
        <div className="page-not-found-go-to-home-button-cover"></div>
      </div>
    </div>
  );
}
export default PageNotFound;
