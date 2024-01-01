import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 

  /**
   * Add the number entered to the current value
   * 
   * @param {object} e - event object
   */
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 


  /**
   * Subtract the number entered from the current value.
   * 
   * @param {object} e - event object
   */  
  function minus(e) { 
    e.preventDefault(); 
  	setResult((result) => result - Number(inputRef.current.value)); 
  };
 

  /**
   * Multiply the current value by the number entered.
   * 
   * @param {object} e - event object
   */
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 

  /**
   * Divide the current value by the number entered.
   * Validate that the value is not 0 (zero) to prevent error.
   * 
   * @param {object} e - event object
   */
  function divide(e) { 
    e.preventDefault(); 
    let inputNumber = Number(inputRef.current.value);
    // Check input for 0
    if (inputNumber===0) {
      alert("Division by 0 (zero) is not allowed.");
    } else {
      setResult((result) => result / Number(inputRef.current.value)); 
    }
  };
 

  /**
   * Reset (clear) the input field 
   * 
   * @param {object} e - event object 
   */
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = "";
  }; 
 

  /**
   * Set the current displayed value to 0 (zero) 
   * 
   * @param {event} e 
   */
  function resetResult(e) { 
    e.preventDefault(); 
  	setResult( 0 );
  }; 
 

  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <div className="total" ref={resultRef}> 
          {result} 
        </div> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Enter a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
