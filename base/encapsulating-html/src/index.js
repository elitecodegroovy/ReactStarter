import * as React from "react";
import * as ReactDOM from "react-dom";
import MyNamespaceComponent from "./MyNamespaceComponent";
import MySection from "./MySection";
import MyButton from "./MyButton";
import WithoutFragments from "./WithoutFragments";
import WithFragments from "./WithFragments";
import MyContainer from "./MyContainer";

const enabled = false;
const text = 'A Button';
const placeholder = 'input value...';
const size = 50;

const array = ["First", "Second", "Third"];

const object = {
    first: 1,
    second: 2,
    third: 3,
};

class MyComponent extends React.Component {
  render() {
    return (
      <section>
        <h1>My Component</h1>
        <p>Content in my component...</p>

          <h1>Array</h1>
          <ul>
              {array.map((i) => (
                  <li key={i}>{i}</li>
              ))}
          </ul>

          <h1>Object</h1>
          <ul>
              {Object.keys(object).map((i) => (
                  <li key={i}>
                      <strong>{i}: </strong>
                      {object[i]}
                  </li>
              ))}
          </ul>

          <h1>properties</h1>
          <button disabled={!enabled}>{text}</button>
          <input placeholder={placeholder} size={size} />

          <MyNamespaceComponent>
              <MyNamespaceComponent.First />
              <MyNamespaceComponent.Second />
          </MyNamespaceComponent>

          <MySection>
              <MyButton>My Button Text</MyButton>
          </MySection>

          <div>
              <WithoutFragments />
              <WithFragments />
          </div>
          <MyContainer />
      </section>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
