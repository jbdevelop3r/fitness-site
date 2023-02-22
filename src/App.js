import ReactPlayer from "react-player";
import "./styles/App.scss"
import video from './video/video-gym.mp4'
import { useInView } from "react-hook-inview";

function App() {
  const [firstPageRef, firstPageRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [videoRef, videoRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [offerRef, offerRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [signupRef, signupRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  })
  const [strengthRef, strengthRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [flexibilityhRef, flexibilityhRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [cardioRef, cardioRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [homeGymRef, homeGymRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [basicRef, basicRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [advancedRef, advancedRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 
  const [proRef, proRefIsVisible] = useInView({
    threshold: .4,
    unobserveOnEnter: false
  }) 

  return (
    <div className="main-container">
      <section className="first-page">
          <div className={`first-page-tagline ${firstPageRefIsVisible ? "show" : ""} `} ref={firstPageRef}>
            <p>One on one training</p>
            <p>Decide. Commit. Succeed. We will help you.</p>
          </div>
          <div className={`gym-video ${videoRefIsVisible ? "show" : ""} `} ref={videoRef} >
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
        <div className={`exercise-tagline ${offerRefIsVisible ? "show" : ""} `} ref={offerRef}>
          <p> What makes our offers <code>stands</code> out from the rest? </p>
        </div>

          <div  className="four-exercises">
            <div className={`strength ${strengthRefIsVisible ? "show" : ""} `} ref={strengthRef}>
              <p>strength</p>
              <p>power up your strength</p>
            </div>
            <div className={`flexibility ${flexibilityhRefIsVisible ? "show" : ""} `} ref={flexibilityhRef}>
              <p>flexibility</p>
              <p>key to stability</p>
            </div>
            <div className={`cardio ${cardioRefIsVisible ? "show" : ""} `} ref={cardioRef}>
              <p>cardio</p>
              <p>secret to burn fats faster</p>
            </div>
            <div className={`home-gym ${homeGymRefIsVisible ? "show" : ""} `} ref={homeGymRef}>
              <p>home gym</p>
              <p>work out even at home</p>
            </div>
          </div>
      </section>


      <section className="third-page">
        <p>Try it for free</p>
        <p> We'll give you 2 weeks free training from one of our fitness trainer</p>
        <button className={`signup-btn ${signupRefIsVisible ? "show" : ""} `} ref={signupRef}>Sign up now</button>
      </section>

      <section className="fourth-page">
        <div className="plans-tagline">
          <p>Plans for all level</p>
        </div>
        <div className="plans-container">
          <div className={`basic ${basicRefIsVisible ? "show" : ""} `} ref={basicRef}>
            <div></div>
            <p>basic</p>
            <p>$5/month</p>
            <button>sign up</button>
          </div>
          <div className={`advanced ${advancedRefIsVisible ? "show" : ""} `} ref={advancedRef}>
            <div></div>
            <p>advanced</p>
            <p>$10/month</p>
            <button>sign up</button>
          </div>
          <div className={`pro ${proRefIsVisible ? "show" : ""} `} ref={proRef}>
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
