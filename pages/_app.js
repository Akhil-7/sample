import "../styles/globals.css";
import PopularProjectsContext from "../public/Contexts/PopularProjectsContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  const popularProjectsData = {
    career: [
      {
        title: " Diploma in Career",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Career",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Career",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Career",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Career",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Career",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
    ],
    accounting: [
      {
        title: " Diploma in Accounting",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Accounting",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: " Diploma in Accounting",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Accounting",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Accounting",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Accounting",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
    ],
    programming: [
      {
        title: "Diploma in Programming",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Programming",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Programming",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Programming",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Programming",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Programming",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
    ],
    web: [
      {
        title: "Diploma in Web Graphics",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Web Graphics",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Web Graphics",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
      {
        title: "Diploma in Web Graphics",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },

      {
        title: "Diploma in Web Graphics",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },

      {
        title: "Diploma in Web Graphics",
        teacher: "Shailesh Mahindra",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue amet, porttitor elementum mi ultrices eu arcu viverra nunc. Lectus mauris vivamus duis dictumst urna mattis.",
        numberOfLect: 70,
        hours: 200,
        ratingStar: 4.5,
        ratingNumber: 24,
      },
    ],
  };

  return (
    <PopularProjectsContext.Provider value={{ popularProjectsData }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </PopularProjectsContext.Provider>
  );
}

export default MyApp;
