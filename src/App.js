import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
