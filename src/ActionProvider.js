// ActionProvider starter code
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  helloHandler = (name) => {
    const msg = this.createChatBotMessage(`hello ${name}`, {
      widget: "macros",
      withAvatar: true,
      delay: 1000,
    });
    this.setChatMsg(msg);
  };
  setChatMsg = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
