import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { getResult } from './apis.js';
import { Input, Button, Popconfirm, message } from 'antd';
import 'antd/dist/antd.css';
import "@fontsource/open-sans"
import 'bootstrap/dist/css/bootstrap.min.css';

const { TextArea } = Input;


function confirm(e, boop) {
  async function fetchResults() {
    const results = await getResult(boop);
    console.log(results);
    const res = JSON.stringify(results)
    return res;
  }
  const beep = fetchResults();
  console.log(e);
  console.log(boop);
  message.success("Your score is 0.4");
}

function App() {
  return (
    <>
      <NameForm></NameForm>
    </>
  );
}

export default App;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  useEffect() {
    async function fetchResults() {
      const results = await getResult();
      this.setState = {value: this.state.value, result: results};
      console.log(results);
    }
    fetchResults();
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-2">
            </div>
            <div class="col-8">
              <div style={{padding: '14px'}}>
                <div style={{ margin: 'auto' }}>
                  <TextArea 
                    style={{
                      width: '100%',
                      fontSize: '40px'
                    }}
                    rows={10} 
                    cols={20}
                    placeholder={'how are you feeling today?'}
                    autoSize={{ minRows: 5, maxRows: 15}}
                    bordered={false}
                    onChange={(event) => this.handleChange(event)}
                  />
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="float-end" style={{padding: '30px'}} > 
                <Popconfirm
                  title="Are you sure want to submit this?"
                  onConfirm={(e) => confirm(e, this.state.value)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                  type="primary"
                  shape="round"
                  size={'large'}
                  style={{ background: "#43A6C6", borderColor: "#43A6C6" }} 
                  >
                    submit 
                  </Button>
                </Popconfirm>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
