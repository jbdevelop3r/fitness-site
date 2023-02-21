import ReactPlayer from "react-player";
import "./styles/App.scss"

function App() {
  return (
    <div className="main-container">
      <section className="first-page">
        <div className="first-page-tagline">
          <p>Virtual one on one training</p>
          <p>Decide. Commit. Succeed. We will help you.</p>
        </div>
        <div>
          <div>
            <div className="gym-video">
              <ReactPlayer 
              width="400px" 
              height="240px" 
              controls 
              url="https://www.youtube.com/watch?v=HQfF5XRVXjU&ab_channel=DavidHo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
