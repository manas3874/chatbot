// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import Macros from "./Macros";
const config = {
  initialMessages: [
    createChatBotMessage(`Hello, I am your dietician.`),
    createChatBotMessage(`How are you?`),
  ],
  botName: "Your Dietician",
  state: {
    names: ["manas", "adya"],
    macros: [10, 20, 30],
    todos: [],
  },
  widgets: [
    {
      widgetName: "macros",
      widgetFunc: (props) => <Macros {...props} />,
      mapStateToProps: ["todos"],
    },
  ],
};

export default config;
