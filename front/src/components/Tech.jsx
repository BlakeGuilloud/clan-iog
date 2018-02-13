import React, { Fragment } from 'react';
import '../css/Tech.css';

const alphabetize = (a, b) => {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();

  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  return 0;
};

const wcaMaps = [
  {
    title: 'Amazonia',
    config: 'amazonia.cfg',
    players: 2,
  },
  {
    title: 'AncientIsles',
    config: 'ai.cfg',
    players: 2,
  },
  {
    title: 'LastRefuge',
    config: 'LastRefuge.cfg',
    players: 2,
  },
];

const blizzardMaps = [
  {
    title: 'Echo Isles',
    config: 'EI.cfg',
    players: 2,
  },
  {
    title: 'Terenas Stand',
    config: 'TS.cfg',
    players: 2,
  },
  {
    title: 'Secret Valley',
    config: 'SV.cfg',
    players: 2,
  },
  {
    title: 'Plunder Isle',
    config: 'Plunder Isle.cfg',
    players: 2,
  },
  {
    title: 'Tirisfal Glades',
    config: 'tirisfalglades.cfg',
    players: 2,
  },
  {
    title: 'The Two Rivers',
    config: 'rivers.cfg',
    players: 2,
  },
  {
    title: 'Shrine Of The Ancients',
    config: 'shrineoftheancients.cfg',
    players: 2,
  },
  {
    title: 'Road To Stratholme',
    config: 'stratholme.cfg',
    players: 2,
  },
  {
    title: 'Bandit Ridge',
    config: 'tft-banditridge-obs.cfg',
    players: 2,
  },
  {
    title: 'Turtle Rock',
    config: 'TR.cfg',
    players: 4,
  },
  {
    title: 'Twisted Meadows',
    config: 'TM.cfg',
    players: 4,
  },
  {
    title: 'Tidewater Glades',
    config: 'TW.cfg',
    players: 4,
  },
  {
    title: 'Adrenaline',
    config: 'tft-adrenaline-obs.cfg',
    players: 4,
  },
  {
    title: 'Avalanche',
    config: 'avalanche.cfg',
    players: 4,
  },
  {
    title: 'Centaur Grove',
    config: 'tft-centaurgrove-obs.cfg',
    players: 4,
  },
  {
    title: 'Goldshire',
    config: 'goldshire.cfg',
    players: 4,
  },
  {
    title: 'Paradise Islands',
    config: 'paradise.cfg',
    players: 4,
  },
  {
    title: 'Lost Temple',
    config: 'rocLT.cfg',
    players: 4,
  },
  {
    title: 'Deadlock-TFT',
    config: 'DeadLock-tft.cfg',
    players: 4,
  },
  {
    title: 'Tranquil Paths',
    config: 'tranquilpaths.cfg',
    players: 4,
  },
  {
    title: 'Frostsabre',
    config: 'frostsabre.cfg',
    players: 4,
  },
  {
    title: 'Moonglade',
    config: 'moonglade.cfg',
    players: 6,
  },
  {
    title: 'Andorhal',
    config: 'andorhal.cfg',
    players: 6,
  },
  {
    title: 'Demon\'s Crossing',
    config: 'demonscrossing.cfg',
    players: 6,
  },
  {
    title: 'Gnoll Wood',
    config: 'tft-gnollwood-obs.cfg',
    players: 6,
  },
  {
    title: 'Haven Of The Damned',
    config: 'havenofthedamned.cfg',
    players: 6,
  },
  {
    title: 'Deadlock',
    config: 'deadlock.cfg',
    players: 8,
  },
  {
    title: 'Dragon Falls',
    config: 'df.cfg',
    players: 8,
  },
  {
    title: 'Feralas',
    config: 'feralas.cfg',
    players: 8,
  },
  {
    title: 'Market Square',
    config: 'tft-marketsquare-obs.cfg',
    players: 8,
  },
  {
    title: 'Northshire',
    config: 'northshire.cfg',
    players: 8,
  },
  {
    title: 'Sanctuary',
    config: 'Sanctuary.cfg',
    players: 8,
  },
  {
    title: 'Emerald Gardens',
    config: 'tft-emeraldgardens-obs.cfg',
    players: 12,
  },
  {
    title: 'Divide And Conquer',
    config: 'divideandconquer.cfg',
    players: 12,
  },
]
  .concat(wcaMaps)
  .sort(alphabetize);

const customMaps = [
  {
    title: 'Flag Runner',
    config: 'FlagRunner.cfg',
  },
  {
    title: 'FB',
    config: 'FB.cfg',
  },
  {
    title: 'Legion TD',
    config: 'Legion TD.cfg',
  },
  {
    title: 'DotA',
    config: 'DotA.cfg',
  },
  {
    title: 'Micro Arena',
    config: 'Micro Arena.cfg',
  },
  {
    title: 'Run Kitty Run',
    config: 'RKR.cfg',
  },
  {
    title: 'Ranger Tournament',
    config: 'Ranger.cfg',
  },
  {
    title: 'RangerII',
    config: 'RangerII.cfg',
  },
  {
    title: 'Slide Seal Slide',
    config: 'SSS.cfg',
  },
  {
    title: 'Banjo ball',
    config: 'banjo.cfg',
  },
  {
    title: 'Tinker',
    config: 'Tinker.cfg',
  },
  {
    title: 'GrandPrix',
    config: 'GrandPrix.cfg',
  },
  {
    title: 'ROCDemoTFT',
    config: 'ROCDemo.cfg',
  },
  {
    title: 'WarCraft IV',
    config: 'wc4.cfg',
  },
  {
    title: 'Surround',
    config: 'trainer.cfg',
  },
  {
    title: 'Green TD',
    config: 'Green TD.cfg',
  },
  {
    title: 'Uther Party',
    config: 'Uther Party.cfg',
  },
].sort(alphabetize);

const itemContentClass = 'about-item__content indent alt__font';

const Tech = () => (
  <Fragment>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">Local Hosting</div>
        <div className={itemContentClass}>
          <p>
						In order to arrange teams or host custom games without a host-bot, you will need to portforward.  This simple process will allow you to invite others to arranged team games and team tournament games as well as permit you to host your own custom games.  You will need to open ports 6112 - 6119.  To do this, first you log in to your router.  Most routers will log you in with an IP address (example: <a className="link-brand" href="https://192.168.1.1"> 192.168.1.1</a>) but some require other addresses like NetGear's <a className="link-brand" href="http://www.routerlogin.net">http://www.routerlogin.net</a>.  But most use your IP which can be found by opening your Command Prompt. A fast way to launch this window is to press the Win + R keys on your keyboard. Then, type cmd or cmd.exe and press Enter or click/tap OK.  If you have trouble finding the way to log in go to: <a className="link-brand" href="https://portforward.com/router.htm">portforward.com/router.htm</a> and look up your router make and model. The username and password are almost always: admin and password. Find the section for Port Forwarding in your menu options. The set the protocol to TCP and open ports 6112-6119. Save. And you are done.  You can also plug directly into you modem and this should also allow you to host.
          </p>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">Custom Keys</div>
        <div className={itemContentClass}>
          <p>
						Many players use custom keys to enhance their gameplay.  This allows for a more organized keyboard. Step 1: To try them out for yourself download this <a className="link-brand" download href="downloads/CustomKeys.txt">Customkeys.txt</a> file. Step 2: Find the C:/Progrom Files/Warcraft III folder. Step 3: Put “Customkeys.txt” into the folder. Double check if the name of your file is “Customkeys.txt” -Don’t rename it!- Step 4: Start/Restart Wc3 and in the gamplay options you have to check the box “Use my own Customkeys”! The file provided above keeps the arrangement of icons standard.  So for example the top row of action icons for a unit will remain: MOVE STOP HOLD ATTACK.  The difference is that now the hot keys will be Q W E R, rather than M S H A.  However, some player prefer to keep attack on A so they rearrange the icons with warkeys. For more on customKeys try: <a className="link-brand" href="http://gaming-tools.com/warcraft-3/warkey/">WarKeys</a> this program will also allow you to get your item inventory keys set to 7 8 / 4 5 / 1 2 so that the game inventory section lines up with your numberpad.
          </p>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">[iOg]Defender</div>
        <div className={itemContentClass}>
          <p>
						Defending Clan iOg against spam, trolls and hackers since 2017, [iOg]Defender is a Stealth Bot v2.7 beta Build 490.  Typing '.pingme' gets your ping or .ping &lt;user name&gt; gets another user's ping. Other commands you can use are: .votekick &lt;user&gt; | .roll &lt;#&gt; | .vote &lt;#&gt; | .math &lt;#+#&gt; | .banned | .whois | .whoami | .about | .votekick &lt;player name&gt;
          </p>
        </div>
      </div>
    </div>
    <div className="about">
      <div className="about-item">
        <div className="about-item__header">[iOg]Host-bot</div>
        <div className={itemContentClass}>
          <p className="alt__font">
						Clan iOg offers hosting through GhostPanel.net. GHostBot commands are as follows: !load &lt;.cfg name&gt;, !pub &lt;game name&gt;, !unhost, !open &lt;slot&gt;|, !comp &lt;slot&gt; &lt;difficulty 0-2&gt; &lt;team&gt;, !kick &lt;player name&gt;, !ping, !from, !checkme.  Please remember to !unhost if you decide not to use a map you hosted.  Ask LegaL_EasE for access to the host bot.  Please also do not wait in the game lobby with a hosted map for a long time as other members may want to use the bot too.  The bot can host up to 3 games at one time. You must use the !load command with a few of the letters from the config file.  SO the map Emerald Garden, for example, can be loaded by typing !load EM.  When choosing the game name please use accurate discriptions like "1v1 TM iog" for a one-on-one host on twisted meadows.  Add the tag "iog" so that other players know that it isn't an auto hosted open service and is intended for members of our clan.
          </p>
          <div className="table-responsive u-m-t">
            <table className="table alt__font">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Map</th>
                  <th scope="col">Config</th>
                  <th scope="col">Players</th>
                </tr>
              </thead>
              <tbody>
                {blizzardMaps.map(item => (
                  <tr key={item.config}>
                    <td>{item.title}</td>
                    <td>{item.config}</td>
                    <td>{item.players}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-responsive u-m-t">
            <table className="table  alt__font">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Map</th>
                  <th scope="col">Config</th>
                </tr>
              </thead>
              <tbody>
                {customMaps.map(item => (
                  <tr key={item.config}>
                    <td>{item.title}</td>
                    <td>{item.config}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Tech;