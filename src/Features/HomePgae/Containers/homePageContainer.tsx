import { useContext, useEffect, useState } from "react";
import HomePage from "../Components/homePage";
import { GlobalDataContext } from "../../context/GlobalDataContext";
import { useNavigate } from "react-router-dom";

function HomePageContainer() {
  const { aboutUsData, eventData, testimonialData, allVideos } =
    useContext(GlobalDataContext);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [testimonialLoop, setTestimonialLoop] = useState<any>([]);
  const goToPreviousTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };
  const goToNextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

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
  const handleNavigateVideoCard = (_id: string) => {
    navigate(`/videos/details/${_id}`);
  };
  return (
    <HomePage
      aboutUsData={aboutUsData}
      eventData={eventData}
      testimonialData={testimonialData}
      handleNavigateEventCard={handleNavigateEventCard}
      handleNavigateVideoCard={handleNavigateVideoCard}
      allVideos={allVideos}
      goToPreviousTestimonial={goToPreviousTestimonial}
      goToNextTestimonial={goToNextTestimonial}
      currentIndex={currentIndex}
    />
  );
}
export default HomePageContainer;
