import ReatingChalenge from './components/reatingChalenge/ReatingChalenge';
import Bye from './components/bye/Bye';
//import './style/app.scss';
import { Component } from 'react';

class App extends Component {
	state = {
		select: null,
		thank: false,
	};
	onSelect = (select) => {
		this.setState({ select });
	};
	onSubmit = () => {
		this.setState({ thank: true });
	};
	render() {
		return (
			<div className="App">
				{this.state.thank ? (
					<Bye select={this.state.select} />
				) : (
					<ReatingChalenge onSelect={this.onSelect} onSubmit={this.onSubmit} />
				)}
				<div className="attribution">
					Challenge by{' '}
					<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
						Frontend Mentor
					</a>
					. Coded by <a href="#">Konstantin</a>.
				</div>
			</div>
		);
	}
}

export default App;
