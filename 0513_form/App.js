import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: '預設資料...' };
    //this.updateState = this.updateState.bind(this);
    //使用Arrow Function不需要綁定
  };
  
  //Arrow Function
  updateState = (e) => {
    this.setState({ data: e.target.value });
  }

  render() {
    return (
      <div>
        <Content myDataProp={this.state.data} updateStateProp={this.updateState} />
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
        <h3>{this.props.myDataProp}</h3>
      </div>
    );
  }
}

export default App;
