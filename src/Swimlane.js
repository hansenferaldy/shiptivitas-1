import React from "react";
import Card from "./Card";
import Dragula from "dragula";
import "dragula/dist/dragula.css";
import "./Swimlane.css";

export default class Swimlane extends React.Component {
  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    });

    return (
      <div className="Swimlane-column">
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.dragulaRef}>
          {cards}
        </div>
      </div>
    );
  }
  dragulaRef = componentBackingInstance => {
    if (componentBackingInstance) {
      let options = {};
      Dragula([componentBackingInstance], options);
    }
  };
}
