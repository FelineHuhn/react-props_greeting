import "./styles.css";

export default function App() {
  return <Greeting name="Feline" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Feline" ? "Coach" : name}!</h1>;
}
