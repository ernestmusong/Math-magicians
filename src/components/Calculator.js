import React from 'react';

function Calculator() {
  return (
    <main className="calculator-container">
      <Calc />
    </main>
  );
}

const Calc = () => (
  <div className="calculator-grid">
    <div className="output">
      <div data-current-operand className="current-operand">0</div>
    </div>
    <button type="button" data-all-clear>AC</button>
    <button type="button" data-delete>+/-</button>
    <button type="button" data-delete>&#37;</button>
    <button className="operator" type="button" data-operation>&divide;</button>
    <button type="button" data-number>1</button>
    <button type="button" data-number>2</button>
    <button type="button" data-number>3</button>
    <button className="operator" type="button" data-operation>&times;</button>
    <button type="button" data-number>4</button>
    <button type="button" data-number>5</button>
    <button type="button" data-number>6</button>
    <button className="operator" type="button" data-operation>&#43;</button>
    <button type="button" data-number>7</button>
    <button type="button" data-number>8</button>
    <button type="button" data-number>9</button>
    <button className="operator" type="button" data-operation>&#45;</button>
    <button className="span-two" type="button" data-number>0</button>
    <button type="button" data-number>.</button>
    <button className="operator" type="button" data-equals>&#61;</button>
  </div>
);

export default Calculator;
