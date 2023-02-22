import ReactPlayer from "react-player";
import "./styles/App.scss"
import video from './video/video-gym.mp4'
import { useInView } from "react-hook-inview";

function App() {
  const [offersRef, offersRefIsVisible] = useInView({
    threshold: .3,
    unobserveOnEnter: true
  }) 

  return (
    <div className="main-container">
      <section className="first-page">
          <div className="first-page-tagline">
            <p>One on one training</p>
            <p>Decide. Commit. Succeed. We will help you.</p>
          </div>
          <div className="gym-video" >
            <ReactPlayer
            width="100%"
            height="100%"
            playing={true} 
            controls
            muted
            loop={true} 
            url={video} />
          </div>
      </section>
      <section className="second-page">
        <div className="exercise-tagline">
          <p> What makes our offers <code>stands</code> out from the rest? </p>
        </div>

          <div  className={`four-exercises ${offersRefIsVisible ? "show" : ""} `} ref={offersRef}>
            <div className="strength">
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


      <section className="third-page">
        <p>Try it for free</p>
        <p> We'll give you 2 weeks free training from one of our fitness trainer</p>
        <button>Sign up now</button>
      </section>

      <section className="fourth-page">
        <div className="plans-tagline">
          <p>Plans for <code>all</code> level</p>
        </div>
        <div className="plans-container">
          <div className="basic">
            <div></div>
            <p>basic</p>
            <p>$5/month</p>
            <button>sign up</button>
          </div>
          <div className="advanced">
            <div></div>
            <p>advanced</p>
            <p>$10/month</p>
            <button>sign up</button>
          </div>
          <div className="pro">
            <div></div>
            <p>pro</p>
            <p>$25/month</p>
            <button>sign up</button>
          </div>
        </div>
      </section>

      <footer>
        <p> About Us </p>
        <p> Terms and Conditions</p>
        <p> Our Goal</p>
      </footer>
    </div>
  );
}

export default App;
