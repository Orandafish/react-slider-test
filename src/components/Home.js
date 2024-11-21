import Lottie from "react-lottie";
import animationData from "../assets/Animation - 1713077569981.json";
import checkSVG from "../assets/Check.svg";

const Home = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
      const Checkmarks = (props) => (
        <div className="checkmarks">
          <img src={checkSVG}></img>
          <p>{props.title}</p>
        </div>
      );
    return(
    <div className="home-container">
      <div className="home-child">
        <h1>Let your groceries come to you</h1>
        <p>Get fresh groceries online without stepping out bla blabla</p>
        <input type="text" placeholder="Search.."></input>
        <div className="home-child-children">
          <Checkmarks title="hellu"/>
          <Checkmarks title="hellu56"/>
          <Checkmarks title="hell54"/>
          <Checkmarks title="hellu23"/>
        </div>
      </div>
        {animationData ? (
          <Lottie options={defaultOptions} height={700} width={700} isClickToPauseDisabled={true}/>
        ) : (
          <div>Error loading animation</div>
        )}
    </div>
    );
}
export default Home;