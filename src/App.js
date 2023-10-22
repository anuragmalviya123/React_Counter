import './App.css';
import { useState } from 'react';
function App() {
         const [count,setCount] = useState(0);
      function clickNegative(){
            setCount(count-1);
      }
      function clickPositive(){
            setCount(count+1);
      }
      function resethander(){
            setCount(0);
      }
      return (
            <div className="wrapper">
            <div className='first'>
            <div className="second">Increment & decrement</div>
                  <div className='third'>
                        <button onClick={clickNegative} className='btn1'>-</button>
                        <div className='updatecount'>{count}</div>
                        <button onClick={clickPositive} className='btn2'>+</button>
                  </div>
                <button onClick={resethander} className='resetbtn'>
                   Reset
                </button>
            </div>
            </div>
      );
}
export default App;