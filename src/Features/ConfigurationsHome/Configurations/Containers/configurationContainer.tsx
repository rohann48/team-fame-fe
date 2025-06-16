// import { useContext, useState } from "react";
// import Configuration from "../Components/configuration";
// import images from "../../../ImageVariables";
// import { useRoutes } from "react-router-dom";
// import { configRoutes } from "../../routes";
// import { LoginContext } from "../../../context/LoginContext";

// function ConfigurationContainer() {
//   const { userInfo } = useContext(LoginContext);
//   const isAdmin = userInfo?.role === "admin";

//   const sideNavLinks = [
//     ...(isAdmin
//       ? [
//           { title: "about us", img: images.aboutusIcon, path: "about-us" },
//           { title: "events", img: images.eventIcon, path: "events" },
//           {
//             title: "testimonial",
//             img: images.testimonialIcon,
//             path: "testimonial",
//           },
//           // { title: "videos", img: images.videoIcon, path: "videos" },
//           // { title: "news", img: images.newsIcon, path: "about-us" },
//           { title: "gold scheme", img: images.schemeIcon, path: "gold-scheme" },
//           { title: "shop", img: images.storeAS, path: "shop" },
//           {
//             title: "Clients details",
//             img: images.userProfile,
//             path: "clients-info",
//           },
//         ]
//       : []),
//     {
//       title: "order details",
//       img: images.orderDetailsAS,
//       path: "order-details",
//     },
//   ];

//   let isUserAdmin = isAdmin ? true : false;
//   const routes = configRoutes({ isUserAdmin });
//   const configurationRoutes = useRoutes(routes);

//   return (
//     <Configuration
//       configurationRoutes={configurationRoutes}
//       sideNavLinks={sideNavLinks}
//       userInfo={userInfo}
//     />
//   );
// }
// export default ConfigurationContainer;
import { useContext, useState } from "react";
import Configuration from "../Components/configuration";
import images from "../../../ImageVariables";
import { useRoutes } from "react-router-dom";
import { configRoutes } from "../../routes";
import { LoginContext } from "../../../context/LoginContext";

function ConfigurationContainer() {
  const { userInfo, isLoadingUserInfo } = useContext(LoginContext);

  // Call hooks BEFORE any early returns
  const isAdmin = userInfo?.role === "admin";
  let isUserAdmin = isAdmin ? true : false;
  const routes = configRoutes({ isUserAdmin });
  const configurationRoutes = useRoutes(routes);

  // Now we can do conditional rendering
  if (isLoadingUserInfo) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "4px solid #e5e7eb",
              borderTop: "4px solid #3b82f6",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          ></div>
          <span
            style={{
              fontSize: "16px",
              color: "#6b7280",
              fontWeight: "500",
            }}
          >
            Loading...
          </span>
        </div>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  const sideNavLinks = [
    ...(isAdmin
      ? [
          { title: "about us", img: images.aboutusIcon, path: "about-us" },
          { title: "events", img: images.eventIcon, path: "events" },
          {
            title: "testimonial",
            img: images.testimonialIcon,
            path: "testimonial",
          },
          { title: "gold scheme", img: images.schemeIcon, path: "gold-scheme" },
          { title: "shop", img: images.storeAS, path: "shop" },
          {
            title: "Clients details",
            img: images.userProfile,
            path: "clients-info",
          },
        ]
      : []),
    {
      title: "order details",
      img: images.orderDetailsAS,
      path: "order-details",
    },
  ];

  return (
    <Configuration
      configurationRoutes={configurationRoutes}
      sideNavLinks={sideNavLinks}
      userInfo={userInfo}
    />
  );
}

export default ConfigurationContainer;
