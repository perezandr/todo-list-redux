import Card from "./components/card/Card.jsx";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.cardContainer}>
        <Card />
      </div>
    </div>
  );
}

export default App;
