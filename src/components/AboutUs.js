const AboutUs = ({ aboutUs, onAboutUs }) => {
  aboutUs =
    "My name is Brenden Burke and welcome to my personal React project. My family and I have been adopting dogs from around the country through several different local adoptions services. Each of my dogs have a unique personality and story about them that makes them special. This project uses React JS and Leaflet.js. Upon choosing a different dog from the dropdown menu, React clears the map tiles and able to update the coordinates (held in each dog's intitial state) and re-render the map showing where each dog is from. I do plan to update this site with different functionality over time. Enjoy!";

  return (
    <div className="aboutUs">
      <h1 style={{ letterSpacing: "-1.5" }}>Welcome</h1>
      <>{aboutUs}</>
    </div>
  );
};

export default AboutUs;
