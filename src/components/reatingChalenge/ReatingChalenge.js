import { Component } from 'react';
//import './reatingChalenge.scss';
class ReatingChalenge extends Component {
	onClick = ({ target }) => {
		for (let i = 0; i < target.parentElement.children.length; i++) {
			target.parentElement.children[i].classList.remove('active');
		}

		target.classList.toggle('active');
		this.props.onSelect(target.innerHTML);
	};
	render() {
		return (
			<div className="card">
				<div className="card__wrapper">
					<div className="card__header">
						<svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
							<path
								d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
								fill="#FC7614"
							/>
						</svg>
					</div>
					<div className="card__title">How did we do?</div>
					<div className="card__descr">
						<p>
							Please let us know how we did with your support request. All feedback is appreciated
							to help us improve our offering!
						</p>
					</div>
					<ul className="card__choise">
						{[1, 2, 3, 4, 5].map((el, i) => (
							<li key={i} onClick={this.onClick} className="card__item">
								{el}
							</li>
						))}
					</ul>
					<button onClick={this.props.onSubmit} className="card__btn">
						SUBMIT
					</button>
				</div>
			</div>
		);
	}
}
export default ReatingChalenge;
