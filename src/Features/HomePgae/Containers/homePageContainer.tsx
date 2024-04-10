import { useContext, useEffect, useState } from "react";
import HomePage from "../Components/homePage";
import { GlobalDataContext } from "../../context/GlobalDataContext";
import { useNavigate } from "react-router-dom";

function HomePageContainer() {
  const { aboutUsData, eventData, testimonialData } =
    useContext(GlobalDataContext);
  const navigate = useNavigate();

  const [testimonialLoop, setTestimonialLoop] = useState<any>([]);

  // useEffect(() => {
  //   // Function to update testimonialLoop state with the current testimonialData item
  //   const updateTestimonialLoop = () => {
  //     testimonialData.forEach((data) => {
  //       console.log("loop", data);

  //       setTestimonialLoop([data]);
  //     });
  //   };

  //   // Call the updateTestimonialLoop function initially
  //   updateTestimonialLoop();

  //   // Set up an interval to call updateTestimonialLoop every 4 seconds
  //   const intervalId = setInterval(updateTestimonialLoop, 4000);

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(intervalId);
  // }, [testimonialData]);
  //handle navigate cards to event details page
  const handleNavigateEventCard = (_id: string) => {
    navigate(`/events-and-news/details/${_id}`);
  };
  //handle navigate cards to video cards page
  const handleNavigateVideoCard = () => {
    navigate(`/videos`);
  };
  return (
    <>
      <HomePage
        aboutUsData={aboutUsData}
        eventData={eventData}
        testimonialLoop={testimonialLoop}
        handleNavigateEventCard={handleNavigateEventCard}
        handleNavigateVideoCard={handleNavigateVideoCard}
      />
    </>
  );
}
export default HomePageContainer;
