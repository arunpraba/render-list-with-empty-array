import "./styles.css";

export default function App() {
  const list = [1, 2, 3, 4];
  const emptyList = [];

  return (
    <div>
      <h1>Pitfalls When Rendering Lists with Empty Array</h1>
      <p>
        The list is empty, resulting in an emptyList.length value of 0. Since
        the value 0 is considered falsy in JavaScript, the conditional logical
        operator && does not proceed further and evaluates to 0. Consequently,
        React comfortably renders this as 0 on the screen
      </p>
      <ol>
        {emptyList.length &&
          emptyList.map((item) => <li key={item}>Item {item}</li>)}
      </ol>
      <hr />
      <h1>Rendering lists</h1>
      <p>List has numbers</p>
      <ol>
        {list.map((item) => (
          <li key={item}>Item {item}</li>
        ))}
      </ol>
    </div>
  );
}
