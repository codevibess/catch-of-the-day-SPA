import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    //Take a opy of existing state
    const fishes = { ...this.state.fishes };
    //Add a new fish to our stae
    fishes[`fish${Date.now()}`] = fish;

    //Set the new fishe object to state
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    //TAke a cope of state
    const order = { ...this.state.order };
    //add to order or update order
    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
