import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import {
	ExampleChart,
	Pie3D,
	Column3D,
	Bar3D,
	Doughnut2D,
} from './Charts';
const Repos = () => {
	const { repos } = React.useContext(GithubContext);
	const chartData = [
		{
			label: 'Html',
			value: '140',
		},
		{
			label: 'CSS',
			value: '115',
		},
		{
			label: 'JavaScrips',
			value: '100',
		},
		{
			label: 'Python',
			value: '40',
		},
		{
			label: 'Java',
			value: '30',
		},
	];
	return (
		<section className='section'>
			<Wrapper className='section-center'>
				{/* <ExampleChart data={chartData} />; */}
				<Pie3D data={chartData} />;
			</Wrapper>
		</section>
	);
};

const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	gap: 2rem;
	@media (min-width: 800px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (min-width: 1200px) {
		grid-template-columns: 2fr 3fr;
	}

	div {
		width: 100% !important;
	}
	.fusioncharts-container {
		width: 100% !important;
	}
	svg {
		width: 100% !important;
		border-radius: var(--radius) !important;
	}
`;

export default Repos;
