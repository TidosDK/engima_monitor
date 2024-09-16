import { createSignal, onCleanup } from "solid-js";
import enigma_logo from "./assets/enigma_logo.svg";
import styles from "./App.module.css";
import enigma_video from "./assets/enigma_video.mp4";

function Promovideo() {
  const [isDiv1Visible, setDiv1Visible] = createSignal(true);

  // Set up the interval to toggle div visibility every 10 seconds
  const interval = setInterval(() => {
    setDiv1Visible((prev) => !prev);
  }, 68000);

  // Clean up the interval when the component is unmounted
  onCleanup(() => clearInterval(interval));

  return (
    <div>
      {isDiv1Visible() ? (
        <div>
          <header class={styles.header}>
            <img src={enigma_logo} class={styles.logo} alt="logo" />
            <p class={styles.welcometext}>Welcome to</p>
            <code class={styles.enigmacodecafetext}>Enigma code cafe</code>
            <p class={styles.eventinfo}>
              Enjoy free snacks and sodas for 5 DKK!
              <br></br>
              If you need help, ask the sofa people :D
            </p>
          </header>
        </div>
      ) : (
        <div>
          <video
            autoplay
            muted
            playsinline
            controls={false} // Hides the progress bar and controls
            style={{ width: "100%" }} // Adjust this as needed
          >
            <source src={enigma_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default Promovideo;
