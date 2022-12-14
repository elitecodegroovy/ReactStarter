import * as React from "react";

class MyButton extends React.Component {
  static defaultProps = {
    disabled: false,
    text: "My Button",
  };

  render() {
    const { disabled, text } = this.props;

    return (<section>
      <button>{this.props.children}</button>
      <button disabled={disabled}>{text}</button>
    </section>);
  }
}

export default MyButton;
