import React from "react";
import AppFishForm from "./AppFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fish).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fish[key]}
            updateFish={this.props.updateFish}
          />
        ))}
        <AppFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
