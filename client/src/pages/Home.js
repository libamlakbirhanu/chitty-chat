import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import cookies from "universal-cookie";

import ChannelListContainer from "./../components/ChannelListContainer";
import ChannelContainer from "./../components/ChannelContainer";

const api_key = "rapftdbbu92h";
const client = StreamChat.getInstance(api_key);

export default function Home() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}
