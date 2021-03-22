// Code ClickityClick Component Here
import React from "react";

class LightSwitch extends React.Component {
  constructor() {
    super();

    // Initial state is defined
    this.state = {
      toggled: false,
    };
  }

  // when handleClick is called, setState will update the state so that toggle is reversed
  handleClick = () => {
    this.setState((previousState) => {
      return {
        toggled: !previousState.toggled,
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.toggled ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default LightSwitch;

// class ClickityClick extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       hasBeenClicked: false,
//     };
//   }

//   handleClick = () => {
//     // update our state here
//     this.setState(
//       {
//         hasBeenClicked: true,
//       },
//       () => console.log(this.state.hasBeenClicked)
//     );
//   };

//   //   line 24 sets the "true" value to "null", so that it can be changed in the setState function on line 13.
//   render() {
//     return (
//       <div>
//         <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
//         <button onClick={this.handleClick}>Click me!</button>
//       </div>
//     );
//   }
// }

// export default ClickityClick;
