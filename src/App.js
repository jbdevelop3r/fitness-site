import ReactPlayer from "react-player";
import "./styles/App.scss"
import video from './video/video-gym.mp4'
import { useInView } from "react-hook-inview";

function App() {
  const [ref, isVisible] = useInView({
    threshold: .3,
    unobserveOnEnter: false
  }) 

  return (
    <div className="main-container">
      <section className="first-page">
          <div className="first-page-tagline">
            <p>Virtual one on one training</p>
            <p>Decide. Commit. Succeed. We will help you.</p>
          </div>
          <div className="gym-video" >
            <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            loop={true}
            playing={true}
            url={video} />
          </div>
      </section>
      <section className="second-page">
        <div className="exercise-tagline">
          <p> What makes our offers stands out from the rest? </p>
        </div>

          <div  className={`four-exercises ${isVisible ? "show" : ""} `} ref={ref}>
            <div className={`strength ${isVisible ? "show" : ""}`} ref={ref}>
              <p>strength</p>
              <p>power up your strength</p>
            </div>
            <div className="flexibility">
              <p>flexibility</p>
              <p>key to stability</p>
            </div>
            <div className="cardio">
              <p>cardio</p>
              <p>secret to burn fats faster</p>
            </div>
            <div className="home-gym">
              <p>home gym</p>
              <p>work out even at home</p>
            </div>
          </div>
      </section>
      <footer>
        <p>This is my footer ---</p>
      </footer>
    </div>
  );
}

export default App;
