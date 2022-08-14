import Button from './components/Button/Button';
import React, {useEffect, useState} from "react";
import Timer from './components/Timer/Timer';
import styles from './components/Button/Button.module.scss';


const App = () => {

  const [time, setTime] = useState('');
  const [start, setStart] = useState(false);


  useEffect(() => {
    let interval = null;

    if(start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [start]);
  

  return(
    <div>
      <Timer time={time} />
        <div className={styles.box}>
          <Button action={() => setStart(true)}>START</Button>
          <Button action={() => setStart(false)}>STOP</Button>
          <Button action={() => setTime(0)}>RESET</Button>
        </div>
    </div>
  )

};

export default App;