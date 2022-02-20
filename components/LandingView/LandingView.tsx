import clsx from 'clsx';
import Image from 'next/image';
import { ScreenSize, useScreenSize } from '../../hook/useScreenSize';
import { Button } from '../Button';
import classes from './landing-view.module.scss';

export interface LandingViewProps { }

export const LandingView: React.VFC<LandingViewProps> = () => {

	const screenSize = useScreenSize();
	console.log(screenSize);


	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<section>
					<h1>The <span className={classes.magical}>✨magical✨</span> Functional Progamming library</h1>
					<p>For JavaScript</p>
					<div className={classes.actions}>
						<Button>Getting Started</Button>
						<Button>Documentation</Button>
					</div>
				</section>
				<aside className={classes.shadow}></aside>
			</div>
		</div>
	);
};
