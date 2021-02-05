import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { TwitchEmbed } from "react-twitch-embed";

export default function TwitchStreamAndChat(props) {
  return (
    <TwitchEmbed
      channel={props.channel}
      id={props.id}
      muted
      theme="dark"
      height="100%"
      width="100%"
    />
  );
}
