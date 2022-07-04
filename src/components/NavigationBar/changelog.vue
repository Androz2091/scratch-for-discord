<template>
        <b-nav-item @click="changelog">Changelog</b-nav-item>
</template>



<script>
import Swal from "sweetalert2";
export default {
    name: "Changelog",
    methods: {
        changelog() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                width: "900px",
                html:`
                <h3 style="color:#CB4335;"><b>User examples!</b></h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/993453529421328384/unknown.png' width='600'>
                <h5>Do you want to make an example for something complicated?
Now you can do it even easier with the new User Uploaded Examples menu!
Upload examples, find examples, all created by the community!
Find this menu by going to Examples > User Uploaded Examples.
note: the server is a bit slow, so expect delays when you open user example menus.(JeremyGamer13)</h5>
                <br> 
                <h3><b>Channel Position Blocks!</b></h2>
                <img src='https://cdn.discordapp.com/attachments/935597297528610856/992465063107637348/unknown.png' width='600'>
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
                                                           <!-- new content -->
                                        <h5 style = "border-bottom: 6px solid red">New content</h5> 
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
                <h3><b>Added scheduled events! It will be updated soon!</b></h3>`,
                confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
            })
        },
    }
}
</script>
