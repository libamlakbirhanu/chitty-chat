import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelListContainer from './../components/ChannelListContainer';
import ChannelContainer from './../components/ChannelContainer';

const api_key = process.env.REACT_APP_API_KEY;
const client = StreamChat.getInstance(api_key);
const cookies = new Cookies();
const authToken = cookies.get('token');

if (authToken) {
	client.connectUser(
		{
			id: cookies.get('userID'),
			name: cookies.get('username'),
			fullName: cookies.get('fullname'),
			image: cookies.get('avatarURL'),
			token: cookies.get('token'),
			hashedPassword: cookies.get('hashedPassword'),
			phoneNumber: cookies.get('phoneNumber'),
		},
		authToken
	);
}

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!authToken) return navigate('register');
	}, []);

	return (
		<div className="app__wrapper">
			<Chat client={client} theme="team light">
				<ChannelListContainer />
				<ChannelContainer />
			</Chat>
		</div>
	);
}
