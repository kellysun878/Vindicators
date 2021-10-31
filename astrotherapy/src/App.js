import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Input, Button, Popconfirm, message } from 'antd';
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css';
import "@fontsource/open-sans"
import 'bootstrap/dist/css/bootstrap.min.css';


const { TextArea } = Input;


function confirm(e) {
  console.log(e);
  message.success('ur depressed!');
}

function App() {
  return (
    <>
      <NameForm></NameForm>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <div>
    //       <NameForm />
    //     </div>
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //       Hi Sumedh!
    //     </p> 
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //   </header>
    // </div>
  );
}

export default App;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('I have received text: ' + this.state.value);
    event.preventDefault();
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
                  />
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="float-end" style={{padding: '30px'}} > 
                <Popconfirm
                  title="Are you sure want to submit this?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button
                  type="primary"
                  shape="round"
                  size={'large'}
                  style={{ background: "#d3d3d3", borderColor: "#d3d3d3" }} 
                  >
                    create 
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
