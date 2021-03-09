// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // console.log(this.state);
    this.actionProvider.helloHandler(message);
  }
}

export default MessageParser;
