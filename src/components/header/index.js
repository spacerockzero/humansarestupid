import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<a href="/"><h1>Humans are Stupid</h1></a>
				<nav>
					<Link class="profile" href="/profile/Jakob Anderson">About</Link>
				</nav>
			</header>
		);
	}
}
