import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser);
	const [repos, setRepos] = useState(mockRepos);
	const [followers, setFollowers] = useState(
		mockFollowers
	);
	// request loading
	const [requests, setRequests] = useState(0);
	const [loading, setIsLoading] = useState(false);
	// error
	const [error, setError] = useState({
		show: false,
		msg: '',
	});

	//chack request
	const checkRequests = () => {
		axios(`${rootUrl}/rate_limit`)
			.then(({ data }) => {
				let {
					rate: { remaining },
				} = data;
				remaining = 0;
				// console.log(remaining);
				// setting value to request for context
				setRequests(remaining);
				if (remaining === 0) {
					// throw an error
					toggleError(
						true,
						'sorry, you have exceded your hourly rate limit!'
					);
				}
			})
			.catch((err) => console.log(err));
	};

	function toggleError(show, msg) {
		setError({ show, msg });
	}

	// error
	useEffect(checkRequests, []);

	return (
		<GithubContext.Provider
			value={{
				githubUser,
				repos,
				followers,
				requests,
				error,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
