// Emulates a TI-108 Solar Calculator
import './App.css';

function Button(props) {
  return <button className="button">{props.label}</button>;
}

function Screen(props) {
  return <div className="screen">{props.value}</div>
}

function SolarPanel(props) {
  return <div className="solarpanel"></div>
}

function Logo(props) {
  return <div className="logo">TEXAS INSTRUMENTS TI-108</div>
}

function Calculator() {
  return (
    <div className="calculator">
      <Screen value="0."/>
      <Logo/>
      <SolarPanel/>
      <Button label={"+/-"}/>
      <Button label={"√"}/>
      <Button label={"%"}/>
      <Button label={"+"}/>
      <br/>
      <Button label={"MRC"}/>
      <Button label={"M-"}/>
      <Button label={"M+"}/>
      <Button label={"×"}/>
      <br/>
      <Button label={7}/>
      <Button label={8}/>
      <Button label={9}/>
      <Button label={"-"}/>
      <br/>
      <Button label={4}/>
      <Button label={5}/>
      <Button label={6}/>
      <Button label={"+"}/>
      <br/>
      <Button label={1}/>
      <Button label={2}/>
      <Button label={3}/>
      <Button label={"="}/>
      <br/>
      <Button label={"ON/C"}/>
      <Button label={0}/>
      <Button label={"."}/>
    </div>
  );
}

export default Calculator;
