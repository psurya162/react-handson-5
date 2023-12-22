import React, { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  setCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    console.log("Compo is Called");
    return (
      <div>
        <div className="main2">
        <h1>PURE COMPONENT</h1>
        <p>A Pure Component in React is a class component that extends React.PureComponent instead of React.Component. The key feature of a Pure Component is its automatic optimization of shouldComponentUpdate. When you use a Pure Component, React performs a shallow comparison of the component's props and state to decide whether to re-render it. If the props and state remain unchanged, it prevents unnecessary re-renders, enhancing performance.</p>
        <h1>{this.state.count}</h1>
        <h1><button onClick={this.setCount}>Clicks</button></h1>
        </div>

        <h2>BASIC DIFFERENCE BETWEEN HOCs AND PURE COMPONENT</h2>

        <div>
  <table border={1}>
    <thead>
      <tr>
        <th>HOCs</th>
        <th>PURE COMPONENT</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
         HOCs are not a specific type of component but a design pattern in React. They are functions that take a component and return a new enhanced component.
        </td>
        <td>
        Pure Components are a type of React component that automatically implements the shouldComponentUpdate method, performing a shallow comparison of props and state. If the props and state of a pure component remain the same, it prevents unnecessary re-renders by default.
        </td>
      </tr>
      <tr>
        <td>HOCs promote code reuse by encapsulating common functionalities or behaviors that can be applied to multiple components. They allow you to share logic, state, or functionalities across different parts of your application</td>
        <td>They are designed to optimize rendering in React by reducing unnecessary re-renders, especially useful for simple components that depend only on props or state changes.</td>
      </tr>
    </tbody>
  </table>
</div>

       
      </div>
    );
  }
}
