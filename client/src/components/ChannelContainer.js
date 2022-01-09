import React from 'react';
import { Channel, useChatContext, MessageTeam } from 'stream-chat-react';

import { useAppContext } from '../state';
import ChannelInner from './ChannelInner';
import CreateChannel from './CreateChannel';
import EditChannel from './EditChannel';

export default function ChannelContainer() {
	const { channel } = useChatContext();
	const { isEditing, isCreating } = useAppContext();

	if (isCreating) {
		return (
			<div className="channel__container">
				<CreateChannel />
			</div>
		);
	}

	if (isEditing) {
		return (
			<div className="channel__container">
				<EditChannel />
			</div>
		);
	}

	const EmptyState = () => (
		<div className="channel-empty__container">
			<p className="channel-empty__first">
				This is the begining of your chat history
			</p>
			<p className="channel-empty__second">
				Send messages, attachments, links, emojis, and more!
			</p>
		</div>
	);

	return (
		<div className="channel__container">
			<Channel
				EmptyStateIndicator={EmptyState}
				Message={(messageProps, index) => (
					<MessageTeam key={index} {...messageProps} />
				)}
			>
				<ChannelInner />
			</Channel>
		</div>
	);
}
