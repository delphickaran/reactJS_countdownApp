import React,{Component} from 'react';
import './app.css';

class Stopwatch extends Component{
    constructor(props){
        super(props);
        this.state = {
            hours : '0',
            minutes : '0',
            seconds : '0'
        }
        
    }
    componentWillMount(){
        this.getTimeuntil(this.props.stopwatchEnd);
    }
    componentDidMount(){
        setInterval(() => this.getTimeuntil(this.props.stopwatchEnd),1000)
    }
    getTimeuntil(stopwatchEnd){
        const time = Date.parse(stopwatchEnd) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/(1000*60))%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        this.setState({ hours: hours, minutes: minutes, seconds: seconds});
    }
    leading0(num){
        return num < 10? "0" + num : num;
    }
    render(){
        return(
            <div>
                <div className="clockHours">{this.leading0(this.state.hours)} Hours</div>
                <div className="clockMinutes">{this.leading0(this.state.minutes)} Minutes</div>
                <div className="clockSeconds">{this.leading0(this.state.seconds)} Seconds</div>
            </div>
        )
    }
}
export default Stopwatch;
