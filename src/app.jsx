import React,{ Component } from 'react';
import Clock from './clock';
import {Form, FormControl, Button} from 'react-bootstrap';
import './app.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: 'August 15, 2017',
            deadline2: 'September 15, 2017',
            newDeadline2: 'November 20, 2017'
        }
    }
    changeDeadLine(){
        this.setState({deadline : this.state.newDeadline})
    }
    changeDeadLine2(){
        this.setState({deadline2: this.state.newDeadline2})
        console.log(this.state);
    }
    render(){
        return(
            <div className="App">
                <div className="appTitle">Coutdown to {this.state.deadline}</div>
                <div>
                    <Clock deadline={this.state.deadline}/>
                </div>
                <Form inline>
                    <FormControl placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}/>
                    <Button onClick={() => this.changeDeadLine()}>Submit</Button>
                </Form>
                
                <div className="appTitle">Countdown to {this.state.deadline2}</div>
                <div>
                    <Clock deadline={this.state.deadline2}/>
                </div>
                
                <Form inline>
                    <FormControl placeholder="new date" onChange={event => this.setState({newDeadlin2 : event.target.value})}/>
                    <Button onClick={() => this.changeDeadLine2()}>change</Button>
                </Form>
            </div>
            )
    }
}

export default App;