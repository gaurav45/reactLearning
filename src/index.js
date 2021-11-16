import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
class App extends React.Component{
	
	state = {
				lat : null,
				errMessage  : ''
			}

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				 this.setState({
					lat : position.coords.latitude
				 });
			},
			(err)  => {
				this.setState({
					errMessage : err.message
				 });
			} 
		);
	}


	componentDidUpdate(){
		console.log('cool1');
	}

	componentWillUnmount(){
		console.log('cool12');
	}
    //React Says we have to define render
	render() {
			if(this.state.lat && !this.state.errMessage){
				return <SeasonDisplay  lat ={this.state.lat}/> 
			}

			if(!this.state.lat && this.state.errMessage){
				return (
				<div>
				Error : {this.state.errMessage}
				</div>
				);
			}

			return <Loader message ="Please Accept Location Request" />
			
		}
}
ReactDOM.render(
	<App/>,
	document.querySelector('#root')
)