import React, { useState } from 'react';
import calculate from '../logic/calculate';

const obj = {
  total: 0,
  next: '',
  operation: '',
};

function Calculator() {
  const [object, setObject] = useState(obj);

  const handleClick = (e) => {
    setObject(calculate(object, e.target.textContent));
  };

  return (
    <section className="calculator-container">
      <div className="calculator-grid">
        <div className="output">
          <div className="current-operand">
            {object.total}
            {' '}
            {object.operation}
            {' '}
            {object.next}
          </div>
        </div>
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button className="operator" type="button" onClick={handleClick}>÷</button>
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button className="operator" type="button" onClick={handleClick}>x</button>
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button className="operator" type="button" onClick={handleClick}>+</button>
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button className="operator" type="button" onClick={handleClick}>-</button>
        <button className="span-two" type="button" onClick={handleClick}>0</button>
        <button type="button" onClick={handleClick}>.</button>
        <button className="operator" type="button" onClick={handleClick}>=</button>
      </div>
    </section>
  );
}

export default Calculator;
