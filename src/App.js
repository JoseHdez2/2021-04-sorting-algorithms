import "./styles.css";
import { useState, useEffect } from "react";
import { Bar, BarContainer, ErrorDiv, Columns } from "./components/Sorting";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [items, setItems] = useState([1, 7, 8, 10, 3, 2, 6, 5, 4, 9]);
  const [max, setMax] = useState(null);
  const [sortType, setSortType] = useState(null);
  const [stepsPerSecond, setStepsPerSecond] = useState(1);
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (inputText.length > 0) {
      try {
        setItems(JSON.parse(inputText));
      } catch (e) {
        setIsValidInput(false);
        setErrorMsg(e.message);
        return;
      }
    }
    setIsValidInput(true);
  }, [inputText]);

  useEffect(() => {
    setMax(Math.max(...items));
  }, [items]);

  const nextStep = () => {
    sortingAlgorithms[sortType].nextStep();
  };

  return (
    <div className="App">
      <h1>Sorting Algorithms</h1>
      {isValidInput ? null : <ErrorDiv>{errorMsg}</ErrorDiv>}
      <input
        type="text"
        placeholder={JSON.stringify(items)}
        onChange={(e) => setInputText(e.target.value)}
      />
      <BarContainer>
        {items.map((it, i) => (
          <Bar width={60} pos={i} max={max} value={it}>
            {it}
          </Bar>
        ))}
      </BarContainer>
      <div style={{ display: "grid", gridTemplateColumns: "34% 66%" }}>
        <div>Sort Type:</div>
        <div>
          <button>Bubble Sort</button>
          <button>Merge Sort</button>
        </div>
      </div>
      <div>
        <label>Steps per second: </label>
        <input
          type="text"
          placeholder={stepsPerSecond}
          onChange={(e) => setStepsPerSecond(parseInt(e.target.value, 10) || 1)}
        />
      </div>
      <div>
        <button>{"<<"}</button>
        <button>{"<"}</button>
        <button>{">"}</button>
        <button>{">>"}</button>
      </div>
    </div>
  );
}

class BubbleSort {
  index = 0;

  constructor() {
    this.index = 0;
  }

  step = (items, setItems, log, setLog) => {
    console.log(this.index);
    const leftValue = items[this.index];
    const rightValue = items[this.index + 1];
    setLog([...log, "this is a test"]);
  };
}

const sortingAlgorithms = {
  bubble: new BubbleSort()
};

const BubbleSortStep = (items, setItems, index, setIndex, log, setLog) => {};
