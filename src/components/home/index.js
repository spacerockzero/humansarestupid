import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Here's how you brain is lying to you:</h1>
				
				<section>
					<h2>Confirmation Bias</h2>
					<p>You search for and favor information that confirms your current beliefs</p>
					<p>Dummy.</p>
				</section>

				<section>
					<h2>Gambler’s Fallacy</h2>
					<p>You think that because a thing hasn’t happened much lately, it is bound to happen soon. You can't tell if events are statistically isolated or not.</p>
					<p>Rube.</p>
				</section>

				<section>
					<h2>Post-Purchase Rationalization</h2>
					<p>AKA “choice-supportive bias”</p>
					<p>You retroactively convince yourself that your choice was good, especially when it was not.</p>
					<p>Stop rationalizing your dumb choices, maniac.</p>
				</section>

				<section>
					<h2>Neglecting Probability</h2>
					<p>You disregard probability when making decisions.</p>
					<p>Assume you're not a walking calculator and try using one, moron.</p>
				</section>

				<section>
					<h2>Observational Selection Bias</h2>
					<p>You don’t select samples randomly, so any conclusions you gather are scientifically invalid.</p>
					<p>Nitwit.</p>
				</section>

				<section>
					<h2>Status Quo Bias</h2>
					<p>You prefer the way things are, and perceive general change as a loss before weighing actual outcomes.</p>
					<p>Come out of your cave, you turtle.</p>
				</section>

				<section>
					<h2>Negativity Bias</h2>
					<p>You perceive and remember negative things stronger than neutral or positive things.</p>
					<p>Yes, your brain is a downer.</p>
				</section>

				<section>
					<h2>Bandwagon Effect</h2>
					<p>You are more likely to adopt a belief, fad, or idea if more people are already doing it.</p>
					<p>"But, all the morons are doing it!"</p>
				</section>

				<section>
					<h2>Projection Bias</h2>
					<p>You assume that other people have similar values, beliefs, and thoughts as you do.</p>
					<p>You're more special than you think, you dumb, little snowflake.</p>
				</section>

				<section>
					<h2>Current Moment Bias</h2>
					<p>AKA “Hyperbolic Discounting”</p>
					<p>You prefer short-term wins to larger long-term wins.</p>
					<p>You'd rather screw over this "Future Self" guy. Way to go, genius.</p>
				</section>

				<section>
					<h2>Anchoring Effect</h2>
					<p>You treat one piece of information with more weight than others, especially when it was the first on a list.</p>
					<p></p>
				</section>
				
			</div>
		);
	}
}
