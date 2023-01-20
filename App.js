
import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
       Hello I am  {name}
        </h1>
      </>
    );
  }
}

export default App;
