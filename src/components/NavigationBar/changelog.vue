<template>
        <b-nav-item @click="changelog">Changelog</b-nav-item>
</template>



<script>
import Swal from "sweetalert2";

/* eslint-disable */
function convertBlocklyHTMLElementToDisplayableContent(path, width, height) {
    let newPath = path
    newPath = path.replace(/transform="translate\([0-9\.\-]*,[0-9\.\-]*\)">/mi, `transform="translate(0,0)">`)
    let returned = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" class="blocklySvg" tabindex="0" width="${width}px" height="${height}px" style="display: inline;position: inherit;fill: white;font: bold 11px Helvetica Neue, Segoe UI, Helvetica, sans-serif">` + newPath
    returned += "</svg>"
    return returned
}

export default {
    name: "Changelog",
    methods: {
        changelog() {
            Swal.fire({
                position: 'center',
                width: "900px",
                html: `
                  <style>
                    h2, h3 {
                      font-weight: bold;
                    }

                    .past-changes {
                      text-align: center;
                      font-weight: bold;
                    }

                    details > div {
                      height: 30em;
                      overflow: auto;
                    }

                    details * {
                      text-align: left;
                    }

                    time {
                      font-size: 80%;
                      
                    }

                    .latest-change, details > div > div {
                      border: solid 2px;
                      padding: 1em;
                      border-radius: 0.25em;
                      margin: 0.5em 0;
                    }

                    details img {
                      margin-left: auto;
                      margin-right: auto;
                      display: block;
                    }

                    .img-size1 {
                      width: 80%;
                    }

                    .img-size2 {
                      width: 45%;
                    }
                  </style>
                  <h2>Changelog</h2>
                  </div>
                  <p style="font-weight: bold;">Detailed logs are posted in our official <a style="color: #ff4500;" href="https://www.reddit.com/r/s4d/">r/s4d</a> Subreddit</p>
                  <div class="latest-change">
                    <time datetime="08/09/2022">08/09/2022 - Eruption</time>
                    <h3>Thread blocks are revamped with a bunch of new features!</h3>  
                    <iframe id="reddit-embed" src="https://www.redditmedia.com/r/s4d/comments/wk4koo/thread_blocks_are_revamped_with_a_bunch_of_new/?ref_source=embed&amp;ref=share&amp;embed=true" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" height="631" width="80%" scrolling="no"></iframe>
                  </div>
                  <details>
                  <summary class="past-changes">Click here to view past changes</summary>
                  <div>
                    <div>
                      <time datetime="08/01/2022">08/01/2022 - Eruption</time>
                      <h3>Dootabase and Database have been merged into new and improved database blocks!</h3>    
                      <details>
                        <summary>You can now</summary>
                        <ul>
                          <li>Not get confused by what "Dootabase" is (because it's been removed).</li>
                          <li>Create multiple .json files for your database.</li>
                          <li>Have different database names (variables).</li>
                        </ul>
                        <img src="https://media.discordapp.net/attachments/935597297528610856/1003568916284588032/unknown.png?width=419&height=492" alt="New database blocks" class="img-size2"></img>
                      </details>
                      <br>
                      <p>This update comes with no cost of your old S4D projects getting corrupted!</p>
                      <p>By the way, if you are using the new database blocks but don't have <code style="color: #5ba58b;">Create a new database with name () & set file to ().json</code> then this error will pops up!</p>
                      <img src="https://media.discordapp.net/attachments/935597297528610856/1003569471279083550/unknown.png" alt="Error" class="img-size1"></img>
                    </div>
                    <div>
                      <time datetime="07/31/2022">07/31/2022 - JeremyGamer13</time>
                      <h3>New <code style="color: #50a6c9;"> member () is timed out? </code> block!</h3>    
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/1003148110714900530/unknown.png' alt="Timed out block" class="img-size1">
                    </div>
                    <div>
                      <time datetime="07/29/2022">07/29/2022 - Freslin</time>
                      <h3>Jose, Mrredo and AHQ Embeds are removed!</h3> 
                      <p><b>The removed embeds will be permanently removed once v2 arrives! So change up your codes.</b></p>
                      <p>Also these were the embeds chosen not only because of the poll, but also as they have most of the features and compatibility.</p>
                      <p>Here's an image:</p>
                      <img src='https://media.discordapp.net/attachments/935597297528610856/1002577999478141008/unknown.png' alt="Embeds" class="img-size2">
                    </div>
                    <div>
                      <time datetime="07/13/2022">07/13/2022 - Freslin</time>
                      <h3>New <code style="color: #4C97FF;">get all members with role ()</code> block!</h3> 
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/996770502901235823/unknown.png' alt="All members with role block" class="img-size2">
                    </div>
                    <div>
                      <time datetime="07/4/2022">07/13/2022 - JeremyGamer13</time>
                      <h3>User examples!</h3> 
                      <p>Do you want to make an example for something complicated? Now you can do it even easier with the new <b>User Uploaded Examples</b> menu!</p>
                      <p>Upload examples, find examples, all created by the community! Find this menu by going to <b>Examples > User Uploaded Examples</b>.<br>
  <i>note: the server is a bit slow, so expect delays when you open user example menus</i></p>
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/993453529421328384/unknown.png' alt="User examples" class="img-size1">
                    </div>
                    <div>
                      <time datetime="07/01/2022">07/01/2022 - Freslin</time>
                      <h3>New channel position blocks!</h3> 
                      <img src='https://media.discordapp.net/attachments/935597297528610856/991985618554994708/unknown.png' alt="Channel position blocks" class="img-size1">
                    </div>
                    <div>
                      <time datetime="06/29/2022">06/29/2022 - Freslin</time>
                      <h3>New moderation blocks!</h3> 
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/991739773616148590/unknown.png' alt="Moderation blocks" class="img-size1">
                      <br>
                      <h3>Invites category revamp + New blocks!</h3>
                      <p>The invites category has been totally revamped with many new blocks!</p>
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/991546543029096518/unknown.png' alt="Invite blocks" class="img-size2">
                    </div>
                    <div>
                      <time datetime="06/28/2022">06/28/2022 - Freslin</time>
                      <h3>Follow a channel!</h3>
                      <p>Only for news/announcements channels.</p>
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/991203793423302686/unknown.png' alt="Follow channel block" class="img-size2">
                    </div>
                    <div>
                      <time datetime="06/28/2022">06/28/2022 - JeremyGamer13</time>
                      <h3>New regex blocks!</h3>
                      <p>Go to <a href="https://regex101.com/">https://regex101.com/</a> to make your own regex.<br>Works with <code style="color: #5ba58b">in text () replace () with ()</code>.</p>
                      <img src='https://media.discordapp.net/attachments/935597297528610856/991096256933818448/unknown.png' alt="RegEx blocks" class="img-size1">
                    </div>
                    <div>
                      <time datetime="06/26/2022">06/26/2022 - cat soup</time>
                      <h3>New <code style="color: #5b67a5;">bot startup time</code> block!</h3>
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/990520210652037150/unknown.png' alt="bot startup time block" class="img-size2">
                    </div>
                    <div>
                      <time datetime="06/26/2022">06/26/2022 - Freslin</time>
                      <h3>New <code style="color: #4C97FF;">random role in server ()</code> block!</h3>
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/990498236525584456/unknown.png' alt="Random role in server block" class="img-size2">
                    </div>
                    <div>
                      <time datetime="06/26/2022">06/24/2022 - JeremyGamer13</time>
                      <h3>Updated search category to use the epic new technology!</h3>
                      <p>This is a better way to search than to right click on the workspace and search like that.</p>
                      <img src='https://cdn.discordapp.com/attachments/935597297528610856/989826004384112720/unknown.png' alt="Search category" class="img-size1">
                    </div>
                    <div>
                      <time datetime="06/18/2022">06/18/2022 - JeremyGamer13</time>
                      <h3>Webhook blocks have gotten a bit of an upgrade!</h3>
                      <p>On another note, we are inching towards a member categoryless 469...</p>
                      <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1006871253606481930/screenshot_8.png' alt="Webhook blocks" class="img-size1">
                    </div> 
                    <div>
                      <time datetime="06/14/2022">06/14/2022 - LimeNade</time>
                      <h3>Lots of blocks were merged to find blocks more easier!</h3>
                      <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007146250103177326/IMG_7700.png' alt="Merged blocks" class="img-size1">
                    </div>
                    <div>
                      <time datetime="06/13/2022">06/13/2022 - JeremyGamer13</time>
                      <h3>Audit log blocks!</h3>
                      <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007160221002641418/IMG_7701.png' alt="Audit log blocks" class="img-size2">
                    </div>
                    <div>
                      <time datetime="06/08/2022">06/08/2022 - Retro</time>
                      <h3>SQLite database!</h3>
                      <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007162614498988083/IMG_7702.png' alt="SQL blocks" class="img-size2">
                    </div>
                    <div>
                       <time datetime="06/08/2022">06/08/2022 - JeremyGamer13</time>
                      <h3>Added comment blocks!</h3>
                      <p>Comment blocks can either float, or be used in events. They are exported to JavaScript too!</p>
                      <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007167856322027581/IMG_7704.png' alt="Comment blocks" class="img-size2">
                      <br>
                      <h3>Collection blocks yayayay!</h3>
                      <p>For anyone who doesn't know JavaScript, these are Maps. You can  store data with a label and use that label to get the data.</p>
                       <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007170448359960606/IMG_7705.png' alt="Collection blocks" class="img-size2">
                  </div>
                  <div> 
                    <time datetime="06/07/2022">06/07/2022 - cat soup</time>
                    <h3>AES and SHA256 encryption,"Securing" category!</h3>
                    <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007172345821134948/IMG_7706.png' alt="Securing blocks" class="img-size2">
                  </div>
                  <div> 
                    <time datetime="06/07/2022">06/07/2022 - JeremyGamer13</time>
                    <h3>Send messages with user & role pings disabled!</h3>
                    <p>To disable pings or only ping certain IDs, put a list in the input. To only ping certain IDs, make a list with the role or member IDs you want to mention. If you want to use the default mentioning then don't put an input there.</p>
                    <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1006868556186660915/unknown.png' alt="No ping blocks" class="img-size1">
                  </div>
                  <div>
                    <time datetime="06/06/2022">06/06/2022 - JeremyGamer13</time>
                    <h3>Updated attachement blocks!</h3>
                    <p>The old attachment blocks can be found by searching "att" in the search category.
  Please let JeremyGamer13 know if these new blocks are causing problems so he can fix them or revert the change.</p>
                    <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007175944462684170/IMG_7707.png' alt="Attachment blocks" class="img-size1"> 
                    <br>
                     <h3>Last messages!</h3>
                    <p>Get the last messages (in the "Channels" category). The message properties & the <code style="color: #4C97FF;">ID of message ()</code> blocks are in the "Messages" category. The <code style="color: #4C97FF;">ID of message ()</code> block is mainly used for <code style="color: #4C97FF;">last message #()</code>.</p>
                    <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1006871251744215080/screenshot_1.png' alt="Last messages blocks" class="img-size1"> 
                  </div>
                  <div>
                     <time datetime="05/31/2022">05/31/2022 - JeremyGamer13</time>
                     <h3>New Roblox blocks!</h3>
                     <p>More will be added in the future.</p>
                     <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1006871254717968384/screenshot.png' alt="Roblox blocks" class="img-size1"> 
                  </div>
                  <div>
                     <time datetime="05/29/2022">05/29/2022 - LimeNade</time>
                     <h3>Server settings!</h3>
                     <p>Set or get info about the server's settings.</p>
                     <img src='https://cdn.discordapp.com/attachments/1006868250598064198/1007182947335553034/IMG_7708.png' alt="Server settings blocks" class="img-size1"> 
                  </div>
                  <div>
                  <time datetime="05/28/2022">05/28/2022 - JeremyGamer13</time>
                  <h3>Hopefully you like Minecraft, because we have some Minecraft Blocks now!</h3>
                  <p>Bedrock blocks are limited until Minecraft allows more server features.</p>
                  <img src='https://media.discordapp.net/attachments/914411539887456296/980028856176111626/unknown.png' alt="Minecraft blocks" class="img-size1">
                  <br>
                  <h2>Advanced JSON requests are here!</h2>
                  <p>Blocks in the member categories will also be moved out soon, obviously starting with the JSON request blocks.</p>
                  <img src='https://media.discordapp.net/attachments/914411539887456296/979818169176829972/unknown.png' alt="Advanced JSON requests blocks" class="img-size1">
                  </div>
                  <div>
                    <time datetime="05/26/2022">05/26/2022 - JeremyGamer13</time>
                    <h2>A couple hotkeys have been added!</h2>
                    <ul>
                      <li><code style="color: gray;">Alt + Ctrl</code> to duplicate.</li>
                      <li><code style="color: gray;">Alt + T</code> to spawn a text block.</li>
                      <li><code style="color: gray;">Alt + N</code> to spawn a number block.
                    </ul>
                    <img src='https://media.discordapp.net/attachments/1006868250598064198/1007211280706310174/screenshot.png' alt="Hotkeys" class="img-size2">
                    <br>
                    <h3>Hmm, I wonder what this button does...</h3>
                    <p><i>(Credit to frostzzone & RllyNotFox!)</i></p>
                    <img src='https://media.discordapp.net/attachments/1006868250598064198/1007212879075872828/unknown.png' alt="Button" style="width: 10%;">
                  </div>
                  <div>
                     <time datetime="05/25/2022">05/25/2022 - LimeNade</time>
                    <h3>Scheduled events!</h3>
                    <p>Added scheduled events! It will be updated soon!</p>
                    <img src='https://media.discordapp.net/attachments/1006868250598064198/1007215550918828112/unknown.png' alt="Schedule events" class="img-size2">
                  </div>
                </div>
                </details>
                `,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
