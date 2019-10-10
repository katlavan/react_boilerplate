import React, { Component } from "react";

import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: undefined
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/users/donfeho')
          .then(res => res.json())
          .then(userInfo => this.setState({userInfo}))
          // navigator.serviceWorker.addEventListener('message', event => {
          //   console.warn('FromWorker', event.data.msg, event.data.url);
          // });
    }
    render() {
        const { userInfo } = this.state;
        return (
            <div>
                <h1 className='header'>My React App!</h1>
              {userInfo && <h2>{userInfo.login}</h2>}
            </div>
        );
    }
}

export default App;
