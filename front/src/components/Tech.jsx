import React from 'react';
import '../css/Tech.css';

const Tech = () => (
  <div className="tech">
   <div className="tech-item">
      <div className="tech-item__header">Local Hosting</div>
      <div className="tech-item__content">
        <p>
          In order to arrange teams or host custom games without a host-bot, you will need to portforward.  This simple process will all you to invite others to arranged team games and team tournament games as well as permit you to host your own custom games.  You will need to open ports 6112 - 6119.  To do this, first you log in to your router.  Most routers will log you in with an IP address (example: <a href="https://192.168.1.1"> 192.168.1.1</a>) but some require other addresses like NetGear's <a href="http://www.routerlogin.net">http://www.routerlogin.net</a>.  But most use your IP which can be found by opening your Command Prompt. A fast way to launch this window is to press the Win + R keys on your keyboard. Then, type cmd or cmd.exe and press Enter or click/tap OK.  If you have trouble findnig the way to log in go to: <a href="https://portforward.com/router.htm">portforward.com/router.htm</a> and look up your router make and model. The username and password are almost always: admin and password. Find the section for Port Forwarding in your menu options. The set the protocol to TCP and open ports 6112-6119. Save. And you are done.  You can also plug directly into you modem and this should also allow you to host.
        </p>
      </div>
    </div>
    <hr/>
    <div className="tech-item">
      <div className="tech-item__header">Custom Keys</div>
      <div className="tech-item__content">
        <p>
          Many players use custom keys to enhance their gameplay.  This allows for a more organized keyboard. Step 1: To try them out for yourself download this <a href="downloads/CustomKeys.txt">Customkeys.txt</a> file. Step 2: Find the C:/Progrom Files/Warcraft III folder. Step 3: Put “Customkeys.txt” into the folder. Double check if the name of your file is “Customkeys.txt” -Don’t rename it!- Step 4: Start/Restart Wc3 and in the gamplay options you have to check the box “Use my own Customkeys”! The file provided above keeps the arrangement of icons standard.  So for example the top row of action icons for a unit will remain: MOVE STOP HOLD ATTACK.  The difference is that now the hot keys will be Q W E R, rather than M S H A.  However, some player prefer to keep attack on A so they rearrange the icons with warkeys. For more on customKeys try: <a href="http://gaming-tools.com/warcraft-3/warkey/">WarKeys</a> this program will also allow you to get your item inventory keys set to 7 8 / 4 5 / 1 2 so that the game inventory section lines up with your numberpad.

        </p>
	</div>

   </div>
   	  	<hr/>
      <div className="tech-item">

		<div className="tech-item__header">Bot Commands</div>
      <div className="tech-item__content">
        <h3>[iOg]Defender</h3>
		<p>
          Defending Clan iOg against spam, trolls and hackers since 2017, [iOg]Defender is a Stealth Bot v2.7 beta Build 490.  Typing '.pingme' gets your ping or .ping &lt;user name&gt; gets another user's ping. Other commands you can use are: .votekick &lt;user&gt; | .roll &lt;#&gt; | .vote &lt;#&gt; | .math &lt;#+#&gt; | .banned | .whois | .whoami | .about | .votekick &lt;player name&gt;</p>
		  <h3>[ioG]Host-bot</h3>
		  <p>
		  Clan iOg offers hosting through GhostPanel.net. GHostBot commands are as follows: !load &lt;.cfg name&gt;, !pub &lt;game name&gt;, !unhost, !open &lt;slot&gt;|, !comp &lt;slot&gt; &lt;difficulty 0-2&gt; &lt;team&gt;, !kick &lt;player name&gt;, !ping, !from, !checkme.  Please remember to !unhost if you decide not to use a map you hosted.  Ask LegaL_EasE for access to the host bot.  Please also do not wait in the game lobby with a hosted map for a long time as other members may want to use the bot too.  The bot can host up to 3 games at one time. You must use the !load command with a few of the letters from the config file.  SO the map Emerald Garden, for example, can be loaded by typing !load EM.  When choosing the game name please use accurate discriptions like "1v1 TM iog" for a one-on-one host on twisted meadows.  Add the tag "iog" so that other players know that it isn't an auto hosted open service and is intended for members of our clan.
		  </p>
		  <p>The following is a complete list of maps hosted by Clan iOg:</p>
		  
						<p>Key: Map	----------------------- config-file</p>

						<p>Blizzard Maps</p>
						<li>Echo Isles -2-	-----------------------	Ei.cfg	   </li>
						<li>Emerald Gardens-12- ----------------------- tft-emeraldgardens-obs.cfg	   </li>
						<li>Bandit Ridge -2-	----------------------- tft-banditridge-obs.cfg	   	</li>
						<li>Melting Valley -2-	----------------------- MV.cfg	   </li>
						<li>Road To Stratholme -2-	----------------------- stratholme.cfg	   	</li>
						<li>Secret Valley -2-	----------------------- sv.cfg	</li>
						<li>Shrine Of The Ancients -2-	shrineoftheancients.cfg	 	</li>
						<li>STerenas Stand -2- -----------------------	TS.cfg</li>
						<li>SThe Two Rivers -2-	 -----------------------	rivers.cfg	  </li>
						<li>Tirisfal Glades -2-	 -----------------------	tirisfalglades.cfg	   </li>
						<li>Adrenaline -4-	 -----------------------	tft-adrenaline-obs.cfg	   </li>
						<li>Avalanche -4-	 -----------------------	avalanche.cfg	   </li>
						<li>Centaur Grove -4-	 -----------------------	tft-centaurgrove-obs.cfg</li>
						<li>Goldshire -4-	 -----------------------	goldshire.cfg	   </li>
						<li>Paradise Islands -4-	 -----------------------	paradise.cfg	   </li>
						<li>Tidewater Glades -4-	TW.cfg	   </li>
						<li>Turtle Rock -4-	 -----------------------	TR.cfg	   </li>
						<li>Twisted Meadows -4-	 -----------------------	tm.cfg	   </li>
						<li>Andorhal -6-		 -----------------------	andorhal.cfg	   </li>
						<li>Demon's Crossing -6-	 -----------------------	demonscrossing.cfg	   </li>
						<li>Gnoll Wood -6-	 -----------------------	tft-gnollwood-obs.cfg	   </li>
						<li>Haven Of The Damned -6-	 -----------------------	havenofthedamned.cfg	   </li>
						<li>Deadlock -8-	 -----------------------	deadlock.cfg	     </li>
						<li>Dragon Falls -8-	 -----------------------	df.cfg	     </li>
						<li>Feralas -8-	 -----------------------	feralas.cfg	     </li>
						<li>Market Square -8-	 -----------------------	tft-marketsquare-obs.cfg  </li>
						<li>Northshire -8-	 -----------------------	northshire.cfg	     </li>
						<li>Sanctuary -8-	 -----------------------	sanctuary.cfg	     </li>
						<li>Divide And Conquer -12-	 -----------------------	divideandconquer.cfg	  </li>
						<li>Ice Crown -12-	 -----------------------	icecrown.cfg	   	    </li>
						<li>Plunder Isle -2-	 -----------------------	Plunder Isle.cfg	   	    </li>
						<li>Frostsabre -4-	 -----------------------	frostsabre.cfg	   	    </li>
						<li>Legends -4-		 -----------------------	legends.cfg	   	    </li>
						<li>Lost Temple -4-	 -----------------------	rocLT.cfg	   	    </li>
						<li>Tranquil Paths -4-	 -----------------------	tranquilpaths.cfg	   	   </li>
						<li> Moonglade -6-	 -----------------------	moonglade.cfg	   	    </li>
						<li>TFTdeadlock-4-		 -----------------------	DeadLock-tft		  </li>
						<hr/>
						<p>Wc3Arena Maps</p>
						<li>-2-Amazonia			 -----------------------	amazonia.cfg		  </li>
						<li>-2-AncientIsles		 -----------------------		ai.cfg	  </li>
						<li>-2-LastRefuge		 -----------------------		LastRefuge.cfg		  </li>
						<hr/>
						<p>Custom Game Maps</p>
						<li>FlagRunner			 -----------------------	FlagRunner.cfg		  </li>
						<li>FB				 -----------------------	FB.cfg	   </li>
						<li>Green TD		 -----------------------		Green TD.cfg	  </li>
						<li>Uther Party		 -----------------------		Uther Party.cfg	    </li>
						<li>Legion TD		 -----------------------		Legion TD.cfg	  </li>
						<li>DoTa			 -----------------------		Dota.cfg		  </li>
						<li>Surround		 -----------------------		 trainer.cfg		  </li>
						<li>Micro arena		 -----------------------		micro arena.cfg  </li>
						<li>Run Kitty Run	 -----------------------			RKR.cfg		    </li>
						<li>Bf				 -----------------------	bf.cfg		  </li>
						<li>Ranger	Tournament	 -----------------------		Ranger.cfg	    </li>
						<li>RangerII			 -----------------------	RangerII.cfg	    </li>
						<li>Slide Seal Slide	 -----------------------			SSS.cfg		  </li>
						<li>Banjo ball			 -----------------------	banjo.cfg	  </li>
						<li>tinker	 			 -----------------------	 tinker.cfg	  </li>
						<li>GrandPrix			 -----------------------	GrandPrix.cfg	  </li>
						<li>ROCDemoTFT			 -----------------------	ROCDemo.cfg		  </li>
						<li>-4-WarCraft IV		 -----------------------		Wc4.cfg		    </li>		  
 
      </div>
  </div>
  </div>



)

export default Tech;