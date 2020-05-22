import React from "react";
import Badge, { colors } from "./ui/atoms/Badge";
import StreamerName from "./ui/molecules/StreamerName";

export default function App() {
      return (
            <div className="App">
                <Badge text="IRL" color={colors.purple}/>
                <Badge text="IRL" color={colors.grey}/>
                <StreamerName text={"Skyart"} verified={true} userConnected={true} darkMode={false} />
            </div>
      );
}
