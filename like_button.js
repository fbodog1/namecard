'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return ' Thank you! Just write an e-mail: frindt.jozsef@gmail.com';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like me?'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
