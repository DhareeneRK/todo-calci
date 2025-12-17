import { useState } from "react";
import styles from "./Calculator.module.css";
import Button from "./Button";

function Calculator() {
  const [value, setValue] = useState("");

  const buttons = [
    ["C", "1", "2"],
    ["+", "3", "4"],
    ["-", "5", "6"],
    ["*", "7", "8"],
    ["/", "=", "9"],
    ["0", "."],
  ];

  function handleClick(item) {
    if (item === "C") {
      setValue("");
    } 
    else if (item === "=") {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue("Error");
      }
    } 
    else {
      setValue(value + item);
    }
  }

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>{value}</div>

      <div className={styles.buttons}>
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((item, index) => (
              <Button key={index} onClick={() => handleClick(item)}>
                {item}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
