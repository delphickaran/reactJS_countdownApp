import React , { Component} from 'react';
import './app.css';

class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0
        }
        console.log("this.props", this.props)
    }
    componentWillMount(){
        this.getTimeuntil(this.props.deadline);
    }
    componentDidMount(){
        setInterval(() => this.getTimeuntil(this.props.deadline),1000)
    }
    getTimeuntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/(1000*60))%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
    }
    leading0(num){
        return num < 10? "0" + num : num;
    }
    render(){
        return (
        <div>
            <div className="clockDays">{this.leading0(this.state.days) } Days</div>
            <div className="clockHours">{this.leading0(this.state.hours)} Hours</div>
            <div className="clockMinutes">{this.leading0(this.state.minutes)} Minutes</div>
            <div className="clockSeconds">{this.leading0(this.state.seconds)} Seconds</div>
        </div>
            )
    }
}
export default Clock;