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
                      <img src="https://media.discordapp.net/attachments/935597297528610856/1003568916284588032/unknown.png?width=419&height=492" alt="New database blocks" class="img-size1"></img>
                    </details>
                    <br>
                    <p>This update comes with no cost of your old S4D projects getting corrupted!</p>
                    <p>By the way, if you are using the new database blocks but don't have Create a new database with name () & set file to ().json then this error will pops up!</p>
                    <img src="https://media.discordapp.net/attachments/935597297528610856/1003569471279083550/unknown.png" alt="Error" class="img-size1"></img>
                  </div>
                  <div>
                    <time datetime="07/31/2022">07/31/2022 - JeremyGamer13</time>
                    <h3>New <code style="color: #50a6c9;"> member () is timed out? </code> block!</h3>    
                    <img src='https://cdn.discordapp.com/attachments/935597297528610856/1003148110714900530/unknown.png' alt="Timed out block" class="img-size1">
                  </div>
                  <div>
                    <time datetime="07/29/2022
">07/29/2022 - Freslin</time>
                    <h3>Jose, Mrredo and AHQ Embeds are removed!</h3> 
                    <p><b>The removed embeds will be permanently removed once v2 arrives! So change up your codes.</b></p>
                    <p>Also these were the embeds chosen not only because of the poll, but also as they have most of the features and compatibility.</p>
                    <p>Here's an image:</p>
                    <img src='https://media.discordapp.net/attachments/935597297528610856/1002577999478141008/unknown.png' alt="Embeds" class="img-size2">
                  </div>
                  <div>
                    <time datetime="07/13/2022
">07/13/2022 - Freslin</time>
                    <h3>New <code style="color: #4C97FF;">get all members with role ()</code> block!</h3> 
                    <img src='https://cdn.discordapp.com/attachments/935597297528610856/996770502901235823/unknown.png' alt="All members with role block" class="img-size2">
                  </div>
                  <div>
                    <time datetime="07/4/2022
">07/13/2022 - JeremyGamer13</time>
                    <h3>User examples!</h3> 
                    <p>Do you want to make an example for something complicated? Now you can do it even easier with the new <b>User Uploaded Examples</b> menu!</p>
                    <p>Upload examples, find examples, all created by the community! Find this menu by going to <b>Examples > User Uploaded Examples</b>.<br>
<i>note: the server is a bit slow, so expect delays when you open user example menus</i></p>
                    <img src='https://cdn.discordapp.com/attachments/935597297528610856/993453529421328384/unknown.png' alt="User examples" class="img-size1">
                  </div>
                <h3><b>Channel Position Blocks!</b></h2>
                <h5>(Freslin)</h5>
                <br> 
                <img src='https://media.discordapp.net/attachments/935597297528610856/991985618554994708/unknown.png' width='600'>
                <h5>(Freslin)</h5>
                <br> 
                <h3><b>New Block!</b></h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/991739773616148590/unknown.png' width='600'>
                <h5>(Freslin)</h5>
                <br> 
                <h3><b>Invites Category Revamp + New Blocks!</b></h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/991546543029096518/unknown.png'>
                <h5>The invites category has been totally revamped with many new blocks!
Here's an image of the revamp and the new blocks!(Freslin)</h5>
                <br> 
                <h3><b>Follow a channel!</b></h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/991203793423302686/unknown.png'>
                <h5>Only for news/announcements channels.(Freslin)</h5>
                <br> 
                <h3><b>reg ex block</b></h2>
                <img src='https://media.discordapp.net/attachments/935597297528610856/991096256933818448/unknown.png'>
                <h5>go to THIS WEBSITE <a href="https://regex101.com/">https://regex101.com/</a> to make yo regx
works with (in text () replace () with ()) block aswell HYAYYYAYYAYAYAYYAA
they might get updates because idk all of the regex stuff you can do with it(JeremyGamer13)</h5>
                <br>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/990837321668624394/unknown.png'>
                <h5>(cat soup)</h5>
                <br>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/990520210652037150/unknown.png'>
                <h5>(cat soup)</h5>
                <br>
                <h3><b>New Block!</b></h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/990498236525584456/unknown.png'>
                <h5>(Freslin)</h5>
                <br>
                <h3>Updated search category to use the epic new technology!!!!</h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/989826004384112720/unknown.png'>
                <h5>Felt this would be a better way to search then to right click on the workspace and search like that (JeremyGamer13)</h5>
                <br>
                <h2 style="color:#CB4335;">Lots of blocks were merged to find blocks more easier!</h2>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/986238992024489994/unknown.png'>
                <h5>(LimeNade)</h5>
                <br>
                <h3>Webhook blocks have gotten a bit of an upgrade!</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/987584184388296784/screenshot_9.png' width='475'>
                <h5>On another note, we are inching towards a member categoryless 469...(JeremyGamer13)</h5>
                <br>
                <h3>audit log blocks</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/985859194894823454/unknown-42.png'>
                <h5>(JeremyGamer13)</h5>
                <br>
                <h3>switch blocks</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/984931074805231706/unknown.png'>
                <h5>(lasercat)</h5>
                <br>
                <h3>SQLite database</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/984006702808567828/unknown.png'>
                <h5>(Retro)</h5>
                <br>
                <h3>Comment blocks</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983951159872073768/unknown.png'>
                <h5>add comment blocks either floating or in events, also exported in js(JeremyGamer13)</h5>
                <br>
                <h3>collection blocks yayayay</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983859943847387177/unknown.png'>
                <h5>(for those who know JS, these are Maps), you can basically just store data with a label and use that label to get the data(JeremyGamer13)</h5>
                <br>
                <h3>AES and SHA256 encryption,"Securing" category</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983689993430114374/unknown.png'>
                <h5>(cat soup)</h5>
                <br>
                <h3>send messages with user & role pings disabled</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983685918386970634/unknown.png' width='475'>
                <h5>To disable pings or only ping certain IDs, put a list in the input. To only ping certain IDs, make a list with the role or member IDs you want to mention. If you want to use the default mentioning, just dont put an input there.(JeremyGamer13)</h5>
                <br>
                <h3>Updated attachement blocks</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983290976342769694/unknown.png' width='475'>
                <br>
                <h3>Last messages</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983266366138249316/unknown.png'>
                <br>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/983266366360543282/unknown.png'>
                <h5>get last messages is in Channels category message properties & id of message block are in the Messages category ID of message block is mainly for the "last message #()" block (JeremyGamer13)</h5>
                <br>
                <h3>Roblox blocks</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/980949794069577738/unknown.png' width='475'>
                <h5>some simple roblox blocks(JeremyGamer13)</h5>
                <br>
                <h3>Server Settings</h3>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/980201472245510224/screenshot.png' width='475'>
                <h5>Set or get info about server settings (LimeNade)</h5>
                <br>                      
                <h3>Hopefully you like Minecraft, because we have some <b>Minecraft Blocks</b> now!</h3>
                <img src='https://media.discordapp.net/attachments/914411539887456296/980028856176111626/unknown.png?width=797&height=676' width='797' height='676'>
                <h5>Bedrock blocks are limited until Minecraft allows more server features.</h5>
                <h2>Advanced JSON Request is here!</h2>
                <img src='https://media.discordapp.net/attachments/914411539887456296/979818169176829972/unknown.png?width=569&height=676' width='569' height='676'>
                <br>
                <h5>Blocks in the member categories will also be moved out soon, obviously starting with the JSON request blocks.</h5>
                <br>
                <h2>A couple more Alt shortcuts have been added, mainly Alt + Ctrl to duplicate.</h2>
                <br>
                <h3>Hmm, I wonder what this button does...</h3>
                <img src='https://media.discordapp.net/attachments/898783648491397191/979460678907731968/unknown.png'>
                <h4><i>(Credit to frostzzone & RllyNotFox!)</i></h4>
                <br>
                <h2>You can now use Alt + T and Alt + N to spawn a text or number block!</h2>
                <br>
                <h2><b>Scheduled Events!</b></h2>
                <br>
                <img src='https://cdn.discordapp.com/attachments/898783648491397191/979041343542267954/unknown.png?size=4096' width='475' height='519'>
                <br>
                <h3><b>Added scheduled events! It will be updated soon!</b></h3>
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
