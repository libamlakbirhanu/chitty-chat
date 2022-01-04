import React from "react";
import { AddChannel } from "../assets";

export default function TeamChannelList({
  children,
  error = false,
  loading,
  type,
}) {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          connection error, please wait a moment and try again!!
        </p>
      </div>
    ) : null;
  }

  if (loading) {
    return (
      <div className="team-channel-list">
        <p className="team-channel-list__message loading">
          {type === "team" ? "Channels" : "Messages"} Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        {/* TODO: button to add channels */}
      </div>
      {children}
    </div>
  );
}
