import Head from "next/head";
import {
  TwitchEmbed,
  TwitchChat,
  TwitchClip,
  TwitchPlayer,
} from "react-twitch-embed";

export default function Home() {
  return (
    <div className="text-sans">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="flex w-full h-screen text-gray-900 flex-col">
          <h1>Ajude o N4VY deixando aberto :)</h1>
          <div className="w-full flex-1">
            <TwitchEmbed
              channel="matheusnovaisx1"
              id="matheusnovaisx1"
              theme="dark"
              muted
              withChat={false}
              onVideoPause={() => console.log(":(")}
            />
          </div>
          <div className="w-full flex-1">
            <TwitchEmbed
              channel="paulocarmino"
              id="paulocarmino"
              theme="dark"
              muted
              withChat={false}
              onVideoPause={() => console.log(":(")}
            />
          </div>
          <div className="w-full flex-1">
            <TwitchEmbed
              channel="ByGrig"
              id="ByGrig"
              theme="dark"
              muted
              withChat={false}
              onVideoPause={() => console.log(":(")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
