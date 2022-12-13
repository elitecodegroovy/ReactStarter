import * as React from "react";

class First extends React.Component {
  render() {
    return <p>First...</p>;
  }
}

class Second extends React.Component {
  render() {
    return <p>Second...</p>;
  }
}

class MyNamespaceComponent extends React.Component {
  render() {
    return <section>{this.props.children}</section>;
  }
}

MyNamespaceComponent.First = First;
MyNamespaceComponent.Second = Second;

export default MyNamespaceComponent;
export { First, Second };
