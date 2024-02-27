import './App.css';
import { useState } from "react";
import Uploader from "./Uploader";

function App() {
  const [uploader, setUploader] = useState(false)

  return (
    <div className="App">

      <section>
        {uploader &&
          <div className="uploader">
            <div className="upload-container">
              <button type="button" onClick={() => setUploader(false)}>X</button>
              <Uploader/>
            </div>
          </div>
        }

      </section>

      <button
        className="App-link"
        onClick={() => setUploader(true)}
      >
        Mount Uploader
      </button>
    </div>
  );
}

export default App;
