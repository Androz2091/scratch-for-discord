<template>
    <b-nav-item @click="forums">Forums
        <i class="fa-solid fa-circle-dot" id="forums_notification_indicator_wakeupmf_tyougotanotif_brh" style="display:none">
            <div style="position:absolute;background-color:red;width: 50%;height: 50%;left: 29%;top:15%;border-radius: 50%;color:red"></div>
            <div id="forums_notification_indicator_wakeupmf_tyougotanotif_brh_MMMMMMM" style="position:absolute;color:white;left: 22%;top:6%;font-size:smaller">1</div>
            <!--<div id="forums_notification_indicator_wakeupmf_tyougotanotif_brh_MMMMMMM" style="margin-left:180%;">1</div>-->
        </i>
    </b-nav-item>
</template>

<script>
import Blockly from "blockly";
import scratchblocks from "scratchblocks";
import localforage from 'localforage';
import JSZip from "jszip";
let mainWorkspace
const emojiObject = {}
//import Swal from "sweetalert2";
/* eslint-disable */
const workspacesCurrentlyInsideMemory = []
function flushMemoryWorkspaces() {
    workspacesCurrentlyInsideMemory.forEach(workspace => {
        workspace.dispose()
        workspacesCurrentlyInsideMemory.splice(workspacesCurrentlyInsideMemory.indexOf(workspace), 1)
    })
}
function syntaxifyString(str) {
    let newString = str
    /*
    newString = newString.replace(/((?<=(?<!((?<!\\)\\)){{)[^}]+(?=}}))/gmi, '<code>$1</code>')
    newString = newString.replace(/((?<=(?<!((?<!\\)\\))\()[^\(\)]+(?=\)))/gim, '<small>$1</small>')
    newString = newString.replace(/((?<=(?<!((?<!\\)\\)){{)[^}]+(?=}}))/gmi, '<code>$1</code>')
    newString = newString.replace(/((?<=(?<!((?<!\\)\\)){{)[^}]+(?=}}))/gmi, '<code>$1</code>')
    */
    const sbmatches = String(newString).match(/\|scratch-blocks\|[^\|\|]+\|\/scratch-blocks\|/gm)
    if (sbmatches) {
        sbmatches.forEach(match => {
            let replacedWith = match.replace("|scratch-blocks|", "").replace("|/scratch-blocks|", "").replaceAll("^^-", "&lt;").replaceAll("^^+", "&gt;")
            newString = newString.replace(match, '<pre class="blocks">' + replacedWith + '</pre><small><details><summary>Display scratch-blocks code</summary><div style="width:80%;background-color:rgb(220,220,220)"><code style="color:black">' + replacedWith + '</code></div></details></small>')
        })
    }
    const matches = String(newString).match(/\w+:\/\/\S+/gmi)
    if (matches) {
        matches.forEach(match => {
            newString = newString.replace(match, '<img alt="Icon for this Website" src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=' + encodeURIComponent(match) + '&size=16"> <a target="_blank" href="https://469-forumstest.jeremygamer13.repl.co/forums/getUrlRedirectPage/?url=' + Buffer.from(match, 'UTF8').toString('Hex') + '">' + match.replace(/(http(s|):\/\/|\/\S*)/gmi, "") + '</a>')
        })
    }
    const mmatches = String(newString).match(/@\S+/gmi)
    if (mmatches) {
        mmatches.forEach(match => {
            newString = newString.replace(match, '<b style="color:blue">' + match.replaceAll("@", `<i class="fa-solid fa-at" title="Mentioned user ${match.replaceAll("@", "")}"></i>`) + '</b>')
        })
    }
    // const emojimatch = String(newString).replace(/\s*/gmi, "").match(/((\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]\s?))/gm)
    // if (emojimatch) {
        // emojimatch.forEach(match => {
            // newString = String(newString).replaceAll(match, "<img width='20' height='20' draggable=false src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/" + emojiObject[String(match)] + "_" + String(match).codePointAt(0).toString(16) + ".png'>")
        // })
    // }
    return newString
}
function unixToDate(unix) {
    return (new Date(unix).toDateString() + ", " + new Date(unix).toLocaleTimeString())
}
function loadForumsPage(page, div) {
    document.getElementById("s4d_forums_notifications_text_div_agegeafafdafsdfsdfsdgfdsgfdddddgdhgdfff").parentElement.innerHTML = `<div id="s4d_forums_notifications_text_div_agegeafafdafsdfsdfsdgfdsgfdddddgdhgdfff"></div>`
    flushMemoryWorkspaces()
    localforage.setItem("FORUMS_PAGE", page)
    switch (page) {
        case 'register':
            div.innerHTML = `
<br>
<h3>Create an S4D Forums account</h3>
<i class="fa-solid fa-user"></i> <input type="text" id="s4d_forums_username_input" placeholder="Username">
<br>
<i class="fa-solid fa-key"></i> <input type="password" id="s4d_forums_password_input" placeholder="Password">
<br>
<p id="s4d_forums_register_displayLoadingSpinner" style="display:none;"><i class="fa-solid fa-spinner"></i> &#8226 Registering account...</p>
<input type="submit" id="s4d_forums_register_button" value="Register">
<br>
<br>
<p id="s4d_forums_redirect_to_login" class="forums-fakeUrl">Already have an account? Click here to sign in!</p>
<br>
<br>
<br>
<p style="color:rgb(100,100,100)"><i>Note: These forums accounts are for 469 forums only. Don't worry about getting perm-banned in future S4D just because you got perm-banned on here.</i></p>
`
            document.getElementById("s4d_forums_register_button").onclick = () => {
                const displaySpinner = document.getElementById("s4d_forums_register_displayLoadingSpinner")
                displaySpinner.removeAttribute("style")
                displaySpinner.innerHTML = `<i class="fa-solid fa-spinner"></i> &#8226 Registering account...`
                const username = document.getElementById("s4d_forums_username_input").value
                const password = document.getElementById("s4d_forums_password_input").value
                console.log("EPIC CLIENT: sending request to create forums account ", username)
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: String(username),
                        password: String(password),
                    })
                };
                fetch(`https://469-forumstest.jeremygamer13.repl.co/register`, requestOptions).then(result => result.json().then(json => {
                    if (result.status != 200) {
                        displaySpinner.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> &#8226 ${json.error}`
                        displaySpinner.setAttribute("style", "color:#ff0000")
                        return
                    }
                    displaySpinner.innerHTML = `<i class="fa-solid fa-check"></i> &#8226 Your account has been created! Redirecting...`
                    displaySpinner.setAttribute("style", "color:#00cf07")
                    localforage.setItem("FORUMS_USERNAME", username).then(() => {
                        localforage.setItem("FORUMS_PASSWORD", password).then(() => {
                            loadForumsPage("home", div)
                        })
                    })
                }))
            }
            document.getElementById("s4d_forums_redirect_to_login").onclick = () => {
                loadForumsPage("login", div)
            }
            break;
        case 'login':
            div.innerHTML = `
<br>
<h3>Login to your S4D Forums account</h3>
<i class="fa-solid fa-user"></i> <input type="text" id="s4d_forums_username_input" placeholder="Username">
<br>
<i class="fa-solid fa-key"></i> <input type="password" id="s4d_forums_password_input" placeholder="Password">
<br>
<p id="s4d_forums_login_displayLoadingSpinner" style="display:none;"><i class="fa-solid fa-spinner"></i> &#8226 Logging in...</p>
<input type="submit" id="s4d_forums_login_button" value="Login">
<br>
<br>
<p id="s4d_forums_redirect_to_register" class="forums-fakeUrl">Don't have an account? Click here to register!</p>
<br>
<br>
<br>
<p style="color:rgb(100,100,100)"><i>Note: These forums accounts are for 469 forums only. Don't worry about getting perm-banned in future S4D just because you got perm-banned on here.</i></p>
`
            document.getElementById("s4d_forums_login_button").onclick = () => {
                const displaySpinner = document.getElementById("s4d_forums_login_displayLoadingSpinner")
                displaySpinner.removeAttribute("style")
                displaySpinner.innerHTML = `<i class="fa-solid fa-spinner"></i> &#8226 Validating...`
                const username = (String(document.getElementById("s4d_forums_username_input").value))
                const password = (String(document.getElementById("s4d_forums_password_input").value))
                console.log("EPIC CLIENT: sending request to validate forums account", username)
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'username': username,
                        'password': password
                    }
                };
                fetch(`https://469-forumstest.jeremygamer13.repl.co/validateLogin`, requestOptions).then(result => result.json().then(json => {
                    if (!json.success) {
                        displaySpinner.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> &#8226 ${json.error}`
                        displaySpinner.setAttribute("style", "color:#ff0000")
                        return
                    }
                    displaySpinner.innerHTML = `<i class="fa-solid fa-check"></i> &#8226 Redirecting...`
                    localforage.setItem("FORUMS_USERNAME", username).then(() => {
                        localforage.setItem("FORUMS_PASSWORD", password).then(() => {
                            loadForumsPage("home", div)
                        })
                    })
                }))
            }
            document.getElementById("s4d_forums_redirect_to_register").onclick = () => {
                loadForumsPage("register", div)
            }
            // document.getElementById("s4d_forums_redirect_to_forgotPassword").onclick = () => {
            //     loadForumsPage("forgotPassword", div)
            // }
            break;
        case 'home':
            /* eslint-disable */
            div.innerHTML = `
<div style="float:right;margin-right:0.5%;text-align:right">
    <p id="s4d_forums_homeMenu_logout" class="forums-fakeUrl">Log out</p>
    <p id="s4d_forums_homeMenu_accountMenu" class="forums-fakeUrl">Edit Account</p>
</div>
<h1 id="s4d_forums_welcome_sign" class="forums-home-sideMessages">Hey!</h1>
<p id="s4d_forums_welcome_message" class="forums-home-sideMessages">An error has occurred.</p>
<br>
<div style="text-align: left;">
    <button id="s4d_forums_homeMenu_buttons_category_Announcements" style="width:50%;border-color:#cccccc;border-left: 6px solid red;text-align: left;">
        <h3>Announcements</h3>
        <i>For any announcements moderators would want to post here.</i>
        <br>
        <br>
        <b>Only moderators can post here! You are allowed to comment though.</b>
    </button>
    <br>
    <button id="s4d_forums_homeMenu_buttons_category_Support" style="width:50%;border-color:#cccccc;border-left: 6px solid #00b7ff;text-align: left;">
        <h3>Support</h3>
        <i>Having trouble with something in S4D? Let's see if we can solve it!</i>
        <br>
        <br>
        <b>Make sure to only post here if it is actually related.</b>
    </button>
    <br>
    <button id="s4d_forums_homeMenu_buttons_category_Bugs" style="width:50%;border-color:#cccccc;border-left: 6px solid #1bc900;text-align: left;">
        <h3>Bugs</h3>
        <i>Post S4D related problems in here.</i>
        <br>
        <br>
        <b>Make sure to only post bugs that haven't been posted before and aren't caused by anything you did.</b>
    </button>
    <br>
    <button id="s4d_forums_homeMenu_buttons_category_Suggestions" style="width:50%;border-color:#cccccc;border-left: 6px solid #ffd500;text-align: left;">
        <h3>Suggestions</h3>
        <i>Like an idea and want it added to S4D? Tell it to us!</i>
        <br>
        <br>
        <b>Try not to repost ideas here.</b>
    </button>
    <br>
    <button id="s4d_forums_homeMenu_buttons_category_Community" style="width:50%;border-color:#cccccc;border-left: 6px solid #a200ff;text-align: left;">
        <h3>Community</h3>
        <i>Just wanna talk with the community? Head here.</i>
        <br>
        <br>
        <b>Anyone can comment and create posts here.</b>
    </button>
</div>
`
            localforage.getItem("FORUMS_USERNAME").then(name => {
                if ((!name) || (name == null || name == "")) {
                    loadForumsPage("login", div)
                    return
                }
                document.getElementById("s4d_forums_welcome_sign").innerText = `Hey ${name}!`
            })
            const messages = [
                "Welcome back, S4D here",
                "Check out some recent stuff!",
                "Choose your favorite category post, and comment reply",
                "Let's see what's been happening recently...",
                "Fun fact: S4D forums was pretty much completed in two days",
                "Note: The API for the forums is publicly usable. If requested and allowed, blocks might be made for it.",
                "Tip: There may be some more helpers in our Discord servers than on here due to how new it is. If your question hasn't been answered for a while, try checking those.",
                "zzzzzzzzzzzzzzz...",
                "<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>",
                "<p style=\"color:green\">look at me im colored green</p>",
                "<i class=\"fa-solid fa-bullhorn\"></i> I AM THE ONE WHO DID THE POO",
                "Note: New colors may be added to the accounts menu. It'll be rare when it happens but it can.",
                "Tip: There are ways to type blocked characters without them actually needing to be the real thing. If you need to use them, try looking up how to type them in HTML.",
                "Tip: Wanna learn how to use scratchblocks? You can find some things <a href=\"https://en.scratch-wiki.info/wiki/Block_Plugin/Syntax#Arguments\">here!</a>"
            ]
            messages.push("Fun fact: There are " + messages.length + " different Home messages! Can you find them all?")
            document.getElementById("s4d_forums_welcome_message").innerHTML = messages[Math.round(Math.random() * (messages.length - 1))]
            document.getElementById("s4d_forums_homeMenu_logout").onclick = () => {
                localforage.setItem("FORUMS_USERNAME", null).then(() => {
                    localforage.setItem("FORUMS_PASSWORD", null).then(() => {
                        loadForumsPage("login", div)
                    })
                })
            }
            document.getElementById("s4d_forums_homeMenu_accountMenu").onclick = () => {
                loadForumsPage("accountMenu", div)
            }
            document.getElementById("s4d_forums_homeMenu_buttons_category_Announcements").onclick = () => {
                localforage.setItem("FORUMS_CATEGORY", "announcement").then(() => {
                    loadForumsPage("forumCategory", div)
                })
            }
            document.getElementById("s4d_forums_homeMenu_buttons_category_Support").onclick = () => {
                localforage.setItem("FORUMS_CATEGORY", "support").then(() => {
                    loadForumsPage("forumCategory", div)
                })
            }
            document.getElementById("s4d_forums_homeMenu_buttons_category_Bugs").onclick = () => {
                localforage.setItem("FORUMS_CATEGORY", "bugs").then(() => {
                    loadForumsPage("forumCategory", div)
                })
            }
            document.getElementById("s4d_forums_homeMenu_buttons_category_Suggestions").onclick = () => {
                localforage.setItem("FORUMS_CATEGORY", "suggestions").then(() => {
                    loadForumsPage("forumCategory", div)
                })
            }
            document.getElementById("s4d_forums_homeMenu_buttons_category_Community").onclick = () => {
                localforage.setItem("FORUMS_CATEGORY", "community").then(() => {
                    loadForumsPage("forumCategory", div)
                })
            }
            break;
        case 'forumCategory':
            div.innerHTML = `
<p id="s4d_forums_category_back" class="forums-fakeUrl" style="float:right;margin-right:0.5%;">Back</p>
<h1 id="s4d_forums_category_title" class="forums-home-sideMessages">{{CATEGORY}}</h1>
<p id="s4d_forums_category_contents" class="forums-home-sideMessages">Read the pinned post for info.</p>
<br>
<p id="forums_posting_category_createPost" class="forums-fakeUrl">Create a post</p>
<div id="forums_posting_category_div" style="display:none">
    <p>Post title: <input id="forums_posting_category_title" type="text" size="80" maxlength="55"></p>
    <label style="font-weight: bold;">Post contents:</label>
    <br>
    <textarea id="forums_posting_category_content" rows="8" cols="150" maxlength="875"></textarea>
    <p>Post tags: <input id="forums_posting_category_tags" type="text" size="60"><i><small> Tags are seperated by a space</small></i></p>
    <input id="forums_posting_category_file" accept=".s4d,.xml" type="file">
    <br>
    <br>
    <button id="forums_posting_category_button_Post" class="forums-postingCategoryButtons">Post</button>
    <button id="forums_posting_category_button_Cancel" class="forums-postingCategoryButtons">Cancel</button>
</div>
<br>
<p id="s4d_forums_category_loading_posts_message" style="color:gray">Loading posts, please wait...</p>
<div id="s4d_forums_category_posts" class="forums-home-sideMessages">
</div>
`
            localforage.getItem("FORUMS_USERNAME").then(name => {
                if ((!name) || (name == null || name == "")) {
                    loadForumsPage("login", div)
                    return
                }
            })
            localforage.getItem("FORUMS_CATEGORY").then(name => {
                if ((!name) || (name == null || name == "")) {
                    loadForumsPage("home", div)
                    return
                }
                document.getElementById("s4d_forums_category_title").innerText = `${name}${name == "announcement" ? "s" : ""}`
            })
            document.getElementById("s4d_forums_category_back").onclick = () => {
                localforage.setItem("FORUMS_CATEGORY", null).then(() => {
                    loadForumsPage("home", div)
                })
            }
            document.getElementById("forums_posting_category_createPost").onclick = () => {
                document.getElementById("forums_posting_category_div").removeAttribute("style")
            }
            document.getElementById("forums_posting_category_button_Cancel").onclick = () => {
                document.getElementById("forums_posting_category_div").setAttribute("style", "display:none")
            }
            const postButton = document.getElementById("forums_posting_category_button_Post")
            postButton.onclick = () => {
                postButton.innerHTML = `Posting.. <i class="fa-solid fa-spinner"></i>`
                localforage.getItem("FORUMS_USERNAME").then((username) => {
                    localforage.getItem("FORUMS_PASSWORD").then((password) => {
                        localforage.getItem("FORUMS_CATEGORY").then(name => {
                            let waitTime = 0
                            let sendingFileContent = null
                            const fileInput = document.getElementById("forums_posting_category_file")
                            if (fileInput.value != null && fileInput.value != "") {
                                waitTime = 1500
                                const fs = new FileReader()
                                const file = fileInput.files[0]
                                fs.onload = () => {
                                    if (file.type == "text/xml") {
                                        sendingFileContent = fs.result
                                        return
                                    }
                                    JSZip.loadAsync(file).then((data) => {
                                        if (data.file("blocks.xml")) {
                                            data.file("blocks.xml").async("string").then(content => {
                                                sendingFileContent = content
                                            })
                                        }
                                    })
                                }
                                fs.readAsText(file)
                            }
                            setTimeout(() => {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        title: String(document.getElementById("forums_posting_category_title").value),
                                        content: String(document.getElementById("forums_posting_category_content").value),
                                        category: String(name),
                                        tags: [...new Set(String(document.getElementById("forums_posting_category_tags").value).split(" "))],
                                        username: String(username),
                                        password: String(password),
                                        file: sendingFileContent,
                                    })
                                };
                                fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/post`, requestOptions).then(result => result.json().then(json => {
                                    if (result.status != 200) {
                                        postButton.innerHTML = `${json.error} <i class="fa-solid fa-circle-xmark"></i>`
                                        postButton.setAttribute("style", "color:#ff0000")
                                        return
                                    }
                                    postButton.innerHTML = `Redirecting... <i class="fa-solid fa-check"></i>`
                                    postButton.setAttribute("style", "color:#00cf07")
                                    localforage.setItem("FORUMS_POST_ID", json.postid).then(() => {
                                        loadForumsPage("forumPost", div)
                                    })
                                }))
                            }, waitTime);
                        })
                    })
                })
            }
            localforage.getItem("FORUMS_CATEGORY").then(name => {
                if ((!name) || (name == null || name == "")) {
                    loadForumsPage("home", div)
                    return
                }
                fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/getCategory?category=${name}`).then(result => result.json().then(json => {
                    if (result.status != 200) {
                        const loadingMessage = document.getElementById("s4d_forums_category_loading_posts_message")
                        loadingMessage.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> An unexpected error occurred when trying to load posts`
                        loadingMessage.setAttribute("style", "color:#ff0000")
                        return
                    }
                    if (!json || json.length <= 0) {
                        const loadingMessage = document.getElementById("s4d_forums_category_loading_posts_message")
                        loadingMessage.innerHTML = `There's no posts to load here.`
                        loadingMessage.setAttribute("style", "color:#999999")
                        return
                    }
                    const forumArea = document.getElementById("s4d_forums_category_posts")
                    const postsToBeLoaded = []
                    const pinnedPostsToMove = []
                    json.forEach(post => {
                        const forumPost = document.createElement("div")
                        forumPost.id = `s4d_forums_category_post`
                        forumPost.style = `background-color: white;width:65%`
                        const tags = post.tags
                        let displayTags = []
                        if (tags.length > 0) {
                            tags.forEach(tag => {
                                displayTags.push("#" + tag)
                            })
                        }
                        forumPost.innerHTML = `<div class="forums-post-author"><p id="forums_post_${post.id}_author_name">${post.author}</p> &#8226 <div class="forums-post-author-image" id="forums_post_${post.id}_author_imageContainer"><img src="https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon" width="32" height="32" alt="${post.author}"></div></div>
<h2>${syntaxifyString(post.title)}${tags.includes("pinned") ? ` &#8226 <i class="fa-solid fa-thumbtack"></i>` : ""}</h2>
<p>${syntaxifyString(String(post.desc).substring(0, 99)).replaceAll("\n", " ")}</p>
<small style="color:dodgerblue">${displayTags.join(", ")}</small>
<small><i class="fa-solid fa-user-pen"></i> ${(post.comments || []).length}, <i class="fa-solid fa-message"></i> ${(post.subposts || []).length}</small>`
                        const br = document.createElement("br")
                        if (tags.includes("pinned")) {
                            pinnedPostsToMove.push(forumPost)
                            pinnedPostsToMove.push(br)
                        }
                        forumArea.prepend(forumPost)
                        forumArea.prepend(br)
                        forumPost.onclick = () => {
                            localforage.setItem("FORUMS_POST_ID", post.id).then(() => {
                                loadForumsPage("forumPost", div)
                            })
                        }
                        postsToBeLoaded.push(post)
                    })
                    pinnedPostsToMove.forEach(post => {
                        forumArea.prepend(post)
                    })
                    document.getElementById("s4d_forums_category_loading_posts_message").innerHTML = `Loading profiles...`
                    postsToBeLoaded.forEach(post => {
                        const usernameArea = document.getElementById(`forums_post_${post.id}_author_name`)
                        const imageArea = document.getElementById(`forums_post_${post.id}_author_imageContainer`)
                        fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getUser?username=${encodeURIComponent(post.author)}`).then(result => result.json().then(json => {
                            let keepGoing = true
                            if (result.status != 200) {
                                usernameArea.innerHTML = "Unknown Account"
                                imageArea.getElementsByTagName("img").item(0).src = `https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon`
                                keepGoing = false
                            }
                            if (keepGoing) {
                                usernameArea.innerHTML = json.display + (json.moderator ? ` <i class="fa-solid fa-shield"></i> ` : "")
                                if (json.custompfp != null && json.custompfp != "") {
                                    imageArea.getElementsByTagName("img").item(0).src = json.custompfp
                                }
                            }
                        }))
                    })
                    document.getElementById("s4d_forums_category_loading_posts_message").remove()
                }))
            })
            break;
        case 'forumPost':
            div.innerHTML = `<p id="s4d_forums_post_back" class="forums-fakeUrl" style="float:right;margin-right:0.5%;">Back</p>
<center>
    <br>
    <p id="s4d_forums_post_loading_post_message" style="color:gray">Loading post, please wait...</p>
    <div id="s4d_forums_post_appendedPostItemArea">
    </div>
    <br>
    <input type="text" id="s4d_forums_post_comments_inputText" size="178" maxlength="110" placeholder="Comment something...">
    <button style="background-color:dodgerBlue;border-color:blue;color:white" id="s4d_forums_post_comments_postComment">Post</button>
    <br>
    <br>
    <div class="forums-post-commentSection" id="s4d_forums_post_comments_div">
    </div><!--
    <p>Subpost Title: <input type="text" id="s4d_forums_post_subposts_new_inputText" size="70" maxlength="55"></p>
    <p>Subpost Content:</p>
    <textarea id="s4d_forums_post_subposts_new_inputContent" rows="8" cols="150" maxlength="875"></textarea>
    <br>
    <input id="s4d_forums_post_subposts_new_inputFile" accept=".s4d,.xml" type="file">
    <br>
    <button style="background-color:dodgerBlue;border-color:blue;color:white" id="s4d_forums_post_subposts_postSubpost">Post</button>
    <br>
    <br>
    <div id="s4d_forums_comments_subposts_div">
        <div class="forums-post-subposts">
            <h2>title</h2>
            <p>description</p>
            <p>description2</p>
            <div class="forums-post-author-information">
                <div>
                    <p>Posted by <b id="s4d_forums_post_author_name">Unknown Account</b></p>
                    <img id="s4d_forums_post_author_image" width="96" height="96" src="https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon">
                </div>
            </div>
            <div style="text-align: left;margin-left:0.5%;">
                <i title="ID of this post" class="fa-solid fa-id-badge"></i> 0<br>
                <i title="Time of post" class="fa-solid fa-clock"></i> ${unixToDate(0)}
                <div id="s4d_forums_post_subpost_0_ifCanDeletePostThen_showthisDiv" style="display:none;color:#ff0000"><i title="Delete this subpost" id="s4d_forums_post_subpost_id0_deleteButton" class="fa-solid fa-trash-can"></i> Click the trash can to delete this subpost</div>
            </div>
        </div>
    </div>-->
</center>
`
            localforage.getItem("FORUMS_USERNAME").then(username => {
                if (!username) {
                    loadForumsPage("login", div)
                    return
                }
                localforage.getItem("FORUMS_PASSWORD").then(password => {
                    if (!password) {
                        loadForumsPage("login", div)
                        return
                    }
                    localforage.getItem("FORUMS_CATEGORY").then(category => {
                        if (!category) {
                            loadForumsPage("home", div)
                            return
                        }
                        localforage.getItem("FORUMS_POST_ID").then(postid => {
                            if (!postid) {
                                loadForumsPage("forumCategory", div)
                                return
                            }
                            fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/getPost?category=${category}&postid=${postid}`).then(result => result.json().then(json => {
                                document.getElementById("s4d_forums_post_loading_post_message").remove()
                                const post = json
                                const parentDiv = document.getElementById("s4d_forums_post_appendedPostItemArea")
                                const display = document.createElement("div")
                                display.id = "s4d_forums_post_div"
                                display.setAttribute("class", "forums-screen-post")
                                display.innerHTML = `<div id="s4d_forums_post_managable_div">
    <h2>${syntaxifyString(post.title)}${post.author == username ? ` &#8226 <button style="border-width:0;background-color:transparent" id="s4d_forums_post_button_title_EditAsAuthor"><i class="fa-solid fa-square-pen"></i></button>` : ""}</h2>
    <div id="s4d_forums_editing_screen_post_div" style="display:none">
        <p>Post Title: <input type="text" id="s4d_forums_editing_screen_post_input_Title" value="${post.title.replaceAll('"', '\\"')}"></p>
        <p>Post Description:</p>
        <textarea id="s4d_forums_editing_screen_post_input_Description" rows="8" cols="150" maxlength="875">${post.desc.replaceAll("<", "&lt;").replaceAll(">", "&gt;") }</textarea>
        <br>
        <input type="submit" id="s4d_forums_editing_screen_post_input_Submit" value="Edit post">
    </div>
    <p>${syntaxifyString(post.desc).replaceAll("\n", "<br>")}</p>
    <div id="s4d_forums_post_blockly_file_div"></div>
    ${post.file != null ? `<input type="submit" id="s4d_forums_screen_post_files_Download" value="Download file">` : ``}
    ${post.file != null ? `<input type="submit" id="s4d_forums_screen_post_files_Import" value="Import to S4D">` : ``}
    <div class="forums-post-author-information">
        <div>
            <p>Posted by <b id="s4d_forums_post_author_name">${post.author}</b></p>
            <img id="s4d_forums_post_author_image" width="96" height="96" src="https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon">
        </div>
    </div>
</div>
<div id="s4d_forums_post_information_div" style="text-align: left;margin-left:0.5%;">
    <!--<i title="Like this post" id="s4d_forums_post_likeButton" class="fa-solid fa-thumbs-up"></i> ${post.likes}-->
    <i title="ID of this post" class="fa-solid fa-id-badge"></i> ${post.id}
    <i title="Share this post" id="s4d_forums_post_shareButton" class="fa-solid fa-share-from-square"></i><br>
    <i title="Time of post" class="fa-solid fa-clock"></i> ${unixToDate(post.date)}
    <details>
        <summary>Show post tags</summary>
        <div id="s4d_forums_post_information_tags_div">
        </div>
    </details>
    <div id="s4d_forums_ifCanDeletePostThen_showthisDiv" style="display:none;color:#ff0000"><i title="Delete this post" id="s4d_forums_post_deleteButton" class="fa-solid fa-trash-can"></i> Click the trash can to delete this post</div>
</div>
`
                                parentDiv.append(display)
                                post.tags.forEach(tag => {
                                    const tagDiv = document.createElement("div")
                                    tagDiv.setAttribute("class", "forums-post-tag")
                                    tagDiv.innerText = tag
                                    document.getElementById("s4d_forums_post_information_tags_div").append(tagDiv)
                                })
                                fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getUser?username=${post.author}`).then(result => result.json().then(json => {
                                    if (result.status != 200) {
                                        document.getElementById("s4d_forums_post_author_name").innerHTML = "Unknown Poster"
                                        document.getElementById("s4d_forums_post_author_image").src = "https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon"
                                        return
                                    }
                                    document.getElementById("s4d_forums_post_author_name").innerHTML = json.display
                                    if (json.custompfp != null) {
                                        document.getElementById("s4d_forums_post_author_image").src = json.custompfp
                                    }
                                }))
                                const downloadFile = document.getElementById("s4d_forums_screen_post_files_Download")
                                if (downloadFile) {
                                    downloadFile.onclick = () => {
                                        console.log("clicked doownload")
                                        const xmlContent = Blockly.Xml.domToPrettyText(Blockly.Xml.textToDom(post.file));
                                        const blob = new Blob([xmlContent])
                                        const a = document.createElement("a");
                                        a.style = "display: none";
                                        document.body.appendChild(a);
                                        const url = window.URL.createObjectURL(blob);
                                        a.href = url;
                                        a.download = "forums_blocks.xml";
                                        a.click();
                                        window.URL.revokeObjectURL(url);
                                        document.body.removeChild(a);
                                    }
                                }
                                const importFile = document.getElementById("s4d_forums_screen_post_files_Import")
                                if (importFile) {
                                    importFile.onclick = () => {
                                        console.log("clicked import")
                                        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(post.file), mainWorkspace);
                                    }
                                }
                                const blocklyDiv = document.getElementById("s4d_forums_post_blockly_file_div")
                                if (post.file != null) {
                                    const BlockWorkspace = Blockly.inject(blocklyDiv, {
                                        readOnly: true,
                                        grid: {
                                            spacing: 25,
                                            length: 3,
                                            colour: "#ccc",
                                        },
                                        renderer: "zelos",
                                        zoom: {
                                            controls: true,
                                            startScale: 0.9,
                                            maxScale: 3,
                                            minScale: 0.3,
                                            scaleSpeed: 1.2
                                        },
                                        move: {
                                            scrollbars: {
                                                horizontal: true,
                                                vertical: true
                                            },
                                            drag: true,
                                            wheel: true
                                        }
                                    });
                                    workspacesCurrentlyInsideMemory.push(BlockWorkspace)
                                    try {
                                        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(post.file), BlockWorkspace)
                                    } catch {
                                        BlockWorkspace.dispose()
                                        blocklyDiv.innerHTML = `<p style="color:red"><i class="fa-solid fa-triangle-exclamation"></i> Blockly was unable to read the post's file!</p>`
                                    }
                                } else {
                                    blocklyDiv.remove()
                                }
                                const commentsArea = document.getElementById("s4d_forums_post_comments_div")
                                post.comments.forEach(comment => {
                                    const p = document.createElement("p")
                                    // <p>cry about it &#8226 <b style="color:blue">JeremyGamer13</b></p>
                                    p.innerHTML = `${syntaxifyString(comment.comment)} &#8226 <b style="color:blue">${comment.author}</b> on <i>${unixToDate(comment.time)}</i> `
                                    const trashIcon = document.createElement("i")
                                    trashIcon.setAttribute("style", "display:none")
                                    trashIcon.setAttribute("class", "fa-solid fa-trash-can")
                                    commentsArea.prepend(p)
                                    p.append(trashIcon)
                                    if (username == comment.author) {
                                        trashIcon.setAttribute("style", "color:red")
                                    } else {
                                        fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getUser?username=${username}`).then(result => result.json().then(json => {
                                            if (json.moderator == true) {
                                                trashIcon.setAttribute("style", "color:red")
                                            }
                                        }))
                                    }
                                    trashIcon.onclick = () => {
                                        const usurebro = confirm("Delete comment by " + comment.author + "?")
                                        if (usurebro) {
                                            const requestOptions = {
                                                method: 'DELETE',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    'username': username,
                                                    'password': password,
                                                    'category': category,
                                                    'post': post.id,
                                                    'comment': comment.id
                                                })
                                            };
                                            fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/deleteCommentOnPost`, requestOptions).then(result => result.json().then(json => {
                                                if (!json.error) {
                                                    loadForumsPage("forumPost", div)
                                                    return
                                                }
                                                alert(json.error)
                                            }))
                                        }
                                    }
                                })
                                scratchblocks.renderMatching('pre.blocks', { style: 'scratch3', scale: 0.75 });
                                const shareButton = document.getElementById("s4d_forums_post_shareButton")
                                shareButton.onclick = () => {
                                    localforage.getItem("FORUMS_CATEGORY").then(category => {
                                        if (!category) {
                                            loadForumsPage("home", div)
                                            return
                                        }
                                        navigator.clipboard.writeText(`See this post at https://scratch-for-discord.com/?forumcategory=${category}&forumpost=${post.id}
> ${post.title}`)
                                    shareButton.setAttribute("class", "fa-solid fa-clipboard-check")
                                    })
                                }
                                const editTitleButton = document.getElementById("s4d_forums_post_button_title_EditAsAuthor")
                                if (editTitleButton) {
                                    const submitButton = document.getElementById("s4d_forums_editing_screen_post_input_Submit")
                                    editTitleButton.onclick = () => {
                                        document.getElementById("s4d_forums_editing_screen_post_div").removeAttribute("style")
                                    }
                                    submitButton.onclick = () => {
                                        const newTitle = document.getElementById("s4d_forums_editing_screen_post_input_Title").value
                                        if (!newTitle || newTitle == "") return
                                        const newDescription = document.getElementById("s4d_forums_editing_screen_post_input_Description").value
                                        if (!newDescription || newDescription == "") return
                                        const requestOptions = {
                                            method: 'PUT',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                'username': username,
                                                'password': password,
                                                'category': category,
                                                'post': post.id,
                                                'title': newTitle,
                                                'content': newDescription
                                            })
                                        };
                                        fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/editPost`, requestOptions).then(result => result.json().then(json => {
                                            if (!json.error) {
                                                loadForumsPage("forumPost", div)
                                                return
                                            }
                                            alert(json.error)
                                        }))
                                    }
                                    
                                }
                                if (post.author == username) {
                                    document.getElementById("s4d_forums_ifCanDeletePostThen_showthisDiv").setAttribute("style", "color:#ff0000")
                                } else if (category != "announcement") {
                                    fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getUser?username=${encodeURIComponent(username)}`).then(result => result.json().then(json => {
                                        if (json.moderator == true) {
                                            document.getElementById("s4d_forums_ifCanDeletePostThen_showthisDiv").setAttribute("style", "color:#ff0000")
                                        }
                                    }))
                                }
                                const deletePostButton = document.getElementById("s4d_forums_post_deleteButton")
                                deletePostButton.onclick = () => {
                                    const confirmationCode = String(Buffer.from((String((Math.random() * 9999) + 2799)), ('UTF8')).toString(('Base64'))).substring(0, 6)
                                    const newContent = prompt(`Are you sure you want to delete this post? You CANNOT undo this! (Type ${confirmationCode} to confirm.)`, "")
                                    if (newContent != confirmationCode) return
                                    const requestOptions = {
                                        method: 'DELETE',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            'username': username,
                                            'password': password,
                                            'category': category,
                                            'post': post.id
                                        })
                                    };
                                    fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/deletePost`, requestOptions).then(result => result.json().then(json => {
                                        if (!json.error) {
                                            loadForumsPage("forumCategory", div)
                                            return
                                        }
                                        alert(json.error)
                                    }))
                                }
                                const postCommentButton = document.getElementById("s4d_forums_post_comments_postComment")
                                postCommentButton.onclick = () => {
                                    const requestOptions = {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            'username': username,
                                            'password': password,
                                            'category': category,
                                            'post': post.id,
                                            'comment': String(document.getElementById("s4d_forums_post_comments_inputText").value)
                                        })
                                    };
                                    fetch(`https://469-forumstest.jeremygamer13.repl.co/forums/commentOnPost`, requestOptions).then(result => result.json().then(json => {
                                        if (!json.error) {
                                            loadForumsPage("forumPost", div)
                                            return
                                        }
                                        alert(json.error)
                                    }))
                                }
                            }))
                        })
                    })
                })
            })
            document.getElementById("s4d_forums_post_back").onclick = () => {
                localforage.setItem("FORUMS_POST_ID", null).then(() => {
                    loadForumsPage("forumCategory", div)
                })
            }
            break;
        case 'accountMenu':
            div.innerHTML = `<p id="s4d_forums_accountMenu_back" class="forums-fakeUrl" style="float:right;">Back</p>
<center>
    <h1>Manage your account</h1>
    <p>You are currently logged in as <b id="s4d_forums_accountMenu_username">Unknown Account</b></p>
    <h3>Customization</h3>
    <img id="s4d_forums_accountMenu_profilePicture" width="326" height="326" alt="Loading image...">
    <div id="s4d_forums_accountMenu_profilePicture_modsOnly" style="display:none">
        <p><small>You're a moderator!</small><br><small>You can click the picture to set a custom profile picture.</small></p>
    </div>
    <br>
    Choose a color: <select id="s4d_forums_accountMenu_profilePicture_colorDropdown" style="display:none">
    </select>
    <br>
    <br>
    <p>Display Name: <input id="s4d_forums_accountMenu_profilePicture_displayName" type="text" placeholder="john32"></p>
    <input id="s4d_forums_accountMenu_profilePicture_displayName_update" type="submit" value="Update Display Name"><i id="s4d_forums_accountMenu_profilePicture_displayName_update_waiting" style="display:none" class="fa-solid fa-spinner"></i>
    <br>
    <br>
    <h3>Settings</h3>
    <p>Forums Notifications
    <input id="s4d_forums_accountMenu_forums_NotificationsToggle" type="checkbox"><br>
    <small>(you may need to refresh for this to take effect)</small></p>
    <br>
    <p>Change your password</p>
    <p>Old password: <input id="s4d_forums_accountMenu_profilePicture_updatePassword_old" type="password"></p>
    <p>New password: <input id="s4d_forums_accountMenu_profilePicture_updatePassword_new" type="password"></p>
    <input id="s4d_forums_accountMenu_profilePicture_updatePassword_submitButton" type="submit" value="Update Password"><i id="s4d_forums_accountMenu_profilePicture_password_update_waiting" style="display:none" class="fa-solid fa-spinner"></i>
</center>
`
            document.getElementById("s4d_forums_accountMenu_back").onclick = () => {
                loadForumsPage("home", div)
            }
            const imageArea = document.getElementById("s4d_forums_accountMenu_profilePicture")
            const colorSelection = document.getElementById("s4d_forums_accountMenu_profilePicture_colorDropdown")
            localforage.getItem("FORUMS_USERNAME").then(username => {
                if (!username) {
                    loadForumsPage("login", div)
                    return
                }
                document.getElementById("s4d_forums_accountMenu_username").innerText = username
                localforage.getItem("FORUMS_PASSWORD").then(password => {
                    if (!password) {
                        loadForumsPage("login", div)
                        return
                    }
                    fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getUser?username=${username}`).then(result => result.json().then(json => {
                        if (result.status != 200) {
                            alert(json.error)
                        }
                        imageArea.src = (json.custompfp ? json.custompfp : "https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon")
                        document.getElementById("s4d_forums_accountMenu_profilePicture_displayName").value = json.display
                        if (json.moderator == true) {
                            document.getElementById("s4d_forums_accountMenu_profilePicture_modsOnly").removeAttribute("style")
                            imageArea.onclick = () => {
                                const url = prompt("New PFP image url (make sure its appropriate!)", json.custompfp)
                                if (!url || url == "") return
                                const requestOptions = {
                                    method: 'PUT',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        'username': username,
                                        'password': password,
                                        'url': url
                                    })
                                };
                                fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/setUserCustomPFP`, requestOptions).then(result => result.json().then(json => {
                                    if (json.error) {
                                        alert(json.error)
                                        return
                                    }
                                    imageArea.src = json.success
                                }))
                            }
                        }
                        const notificationsCheckbox = document.getElementById("s4d_forums_accountMenu_forums_NotificationsToggle")
                        notificationsCheckbox.onclick = () => {
                            localforage.setItem("FORUMS_NOTIFICATIONS_ENABLED", notificationsCheckbox.checked)
                        }
                    }))
                    fetch(`https://469-forumstest.jeremygamer13.repl.co/getAllColors`).then(result => result.json().then(json => {
                        colorSelection.removeAttribute("style")
                        colorSelection.innerHTML = `<option>${json.join("</option><option>")}</option>`
                        colorSelection.onchange = (event) => {
                            const newColor = event.target.options[event.target.selectedIndex].innerText
                            const requestOptions = {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    'username': username,
                                    'password': password,
                                    'color': newColor
                                })
                            };
                            fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/setUserColor`, requestOptions).then(result => result.json().then(json => {
                                if (json.error) {
                                    alert(json.error)
                                    return
                                }
                                imageArea.src = json.success
                            }))
                        }
                    }))
                    document.getElementById("s4d_forums_accountMenu_profilePicture_displayName_update").onclick = () => {
                        document.getElementById("s4d_forums_accountMenu_profilePicture_displayName_update_waiting").removeAttribute("style")
                        const requestOptions = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                'username': username,
                                'password': password,
                                'display': String(document.getElementById("s4d_forums_accountMenu_profilePicture_displayName").value)
                            })
                        };
                        fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/setUserDisplayName`, requestOptions).then(result => result.json().then(json => {
                            document.getElementById("s4d_forums_accountMenu_profilePicture_displayName_update_waiting").setAttribute("style", "display:none")
                            if (json.error) {
                                alert(json.error)
                                return
                            }
                        }))
                    }
                    document.getElementById("s4d_forums_accountMenu_profilePicture_updatePassword_submitButton").onclick = () => {
                        const confirmationCode = String(Buffer.from((String((Math.random() * 9999) + 2799)), ('UTF8')).toString(('Base64'))).substring(0, 7).toUpperCase()
                        const newContent = prompt(`Are you sure you want to change your password? This will break ALL sessions currently logged in. (Type ${confirmationCode} to confirm.)`, "")
                        if (newContent != confirmationCode) return
                        document.getElementById("s4d_forums_accountMenu_profilePicture_password_update_waiting").removeAttribute("style")
                        const requestOptions = {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                'username': username,
                                'password': password,
                                'oldPassword': String(document.getElementById("s4d_forums_accountMenu_profilePicture_updatePassword_old").value),
                                'newPassword': String(document.getElementById("s4d_forums_accountMenu_profilePicture_updatePassword_new").value)
                            })
                        };
                        fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/setUserNewPassword`, requestOptions).then(result => result.json().then(json => {
                            document.getElementById("s4d_forums_accountMenu_profilePicture_password_update_waiting").setAttribute("style", "display:none")
                            if (json.error) {
                                alert(json.error)
                                return
                            }
                            localforage.setItem("FORUMS_PASSWORD", null).then(() => {
                                localforage.setItem("FORUMS_USERNAME", null).then(() => {
                                    loadForumsPage("login", div)
                                })
                            })
                        }))
                    }
                })
            })
            break;
        default:
            div.innerHTML = `<br><p>Unknown page type '${page.replace(/[^a-zA-Z0-9]/gmi, "_")}', please report to JeremyGamer13#7984</p>
<br>
<p id="s4d_forums_invalid_page_return" class="forums-fakeUrl">Return to Register Page</p>`
            document.getElementById("s4d_forums_invalid_page_return").onclick = () => {
                loadForumsPage("register", div)
            }
            break;
    }
    const notifications = document.getElementById("s4d_forums_notifications_text_div_agegeafafdafsdfsdfsdgfdsgfdddddgdhgdfff")
    notifications.innerHTML = ""
    const readButton = document.createElement("div")
    readButton.setAttribute("class", "forums-notifications-markAsReadButton")
    readButton.title = "Mark notifications as read"
    readButton.innerHTML = `<i class="fa-solid fa-envelope-circle-check" style="color:white"></i>`
    readButton.onclick = () => {
        localforage.getItem("FORUMS_USERNAME").then(username => {
            localforage.getItem("FORUMS_PASSWORD").then(password => {
                const requestOptions = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'username': username,
                        'password': password
                    })
                };
                fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/clearNotifications`, requestOptions).then(result => result.json().then(json => {
                    if (json.error) {
                        alert(json.error)
                    }
                    localforage.getItem("FORUMS_PAGE").then(page => {
                        loadForumsPage(page, div)
                    })
                }))
            })
        })
    }
    notifications.parentElement.append(readButton)
    notifications.parentElement.setAttribute("style", "display:none")
    function addToNotifications(notif) {
        function sanitizeString(str) {
            return String(str).replaceAll("<", "_").replaceAll("\\", "_").replaceAll("/", "_").replaceAll("\n", " ")
        }
        if (notifications.innerHTML == "") {
            notifications.innerHTML = sanitizeString(notif)
            return
        }
        notifications.innerHTML += `<br>${sanitizeString(notif)}`
    }
    localforage.getItem("FORUMS_USERNAME").then(username => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'username': username
            }
        };
        fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getNotifications`, requestOptions).then(result => result.json().then(json => {
            if (json.amount == null || json.notifications == null || json.notifications.length == null) {
                addToNotifications(`Your notifications are corrupted & unreadable. Please mark them as read to fix this.`)
                return
            }
            if (json.amount > 0) {
                notifications.parentElement.removeAttribute("style")
            } else return
            if (json.amount > json.notifications.length) addToNotifications(`Your notifications are somewhat corrupted. They may not appear correctly.`)
            json.notifications.forEach(notif => {
                switch (notif.type) {
                    case 'mention':
                        if (!notif.meta) {
                            addToNotifications("Mention notification, no Metadata provided")
                        } else {
                            switch (notif.meta.type) {
                                case 'post':
                                    addToNotifications("A post by " + notif.meta.author + " mentioned you!")
                                    break;
                                case 'postcomment':
                                case 'postComment':
                                    addToNotifications("A comment by " + notif.meta.mentioner + " on a post by " + notif.meta.author + " mentioned you!")
                                    break;
                                case 'subpost':
                                case 'subPost':
                                    addToNotifications("A subpost by " + notif.meta.mentioner + " on a post by " + notif.meta.author + " mentioned you!")
                                    break;
                                case 'subpostcomment':
                                case 'subpostComment':
                                case 'subPostcomment':
                                case 'subPostComment':
                                    addToNotifications("A comment by " + notif.meta.mentioner + " on a subpost by " + notif.meta.author + " mentioned you!")
                                    break;
                                default:
                                    addToNotifications("Mention notification, invalid mention type")
                                    break;
                            }
                        }
                        break;
                    case 'userCommented':
                        if (!notif.meta) {
                            addToNotifications("User Commented notification, no Metadata provided")
                        } else if (!notif.meta.commenter) {
                            addToNotifications("User Commented notification, invalid metadata provided")
                        } else {
                            switch (notif.meta.type) {
                                case 'post':
                                    addToNotifications(notif.meta.commenter + " commented on your post!")
                                    break;
                                case 'subpost':
                                case 'subPost':
                                    addToNotifications(notif.meta.commenter + " commented on your sub-post!")
                                    break;
                                default:
                                    addToNotifications("User Commented notification, invalid comment parent type")
                                    break;
                            }
                        }
                        break;
                    case 'outdated':
                        addToNotifications("This notification is missing information that a new forums update needs.")
                        break;
                    case 'legacy':
                        addToNotifications("Legacy Notification, no data provided")
                        break;
                    case null:
                    case undefined:
                        addToNotifications("Corrupted notification")
                        break;
                    default:
                        addToNotifications("Unknown notification type '" + notif.type + "'")
                        break;
                }
            })
        }))
    })
}
export default {
    name: "forums",
    async mounted() {
        const a = await localforage.getItem("FORUMS_PAGE")
        if (!a) {
            localforage.setItem("FORUMS_PAGE", "register")
            localforage.setItem("FORUMS_CATEGORY", null)
            localforage.setItem("FORUMS_POST_ID", null)
            localforage.setItem("FORUMS_POST_COMMENT_ID", null)
            localforage.setItem("FORUMS_USERNAME", null)
            localforage.setItem("FORUMS_PASSWORD", null)
            localforage.setItem("FORUMS_NOTIFICATIONS_ENABLED", true)
        }
        setTimeout(() => {
            mainWorkspace = this.$store.state.workspace
            let urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('forumpost') && urlParams.has('forumcategory')) {
                localforage.setItem("FORUMS_PAGE", "forumPost").then(async () => {
                    localforage.setItem("FORUMS_CATEGORY", urlParams.get("forumcategory")).then(async () => {
                        localforage.setItem("FORUMS_POST_ID", urlParams.get("forumpost")).then(async () => {
                            const html = document.createElement("div")
                            const div = document.createElement("div")
                            html.appendChild(div)
                            div.setAttribute("class", "forums-div")
                            const warning = document.createElement("div")
                            html.appendChild(warning)
                            warning.setAttribute("class", "forums-warning")
                            warning.innerHTML = `<i style="margin-left: 0.5%" class="fa-solid fa-triangle-exclamation"></i> S4D forums are in a "Beta - candidate" state. Don't hesitate to give feedback in the official Discord server.`
                            const notifications = document.createElement("div")
                            notifications.setAttribute("class", "forums-screen-notifications")
                            const notifTextDiv = document.createElement("div")
                            notifTextDiv.id = "s4d_forums_notifications_text_div_agegeafafdafsdfsdfsdgfdsgfdddddgdhgdfff"
                            notifications.appendChild(notifTextDiv)
                            html.appendChild(notifications)
                            this.$swal({
                                title: "S4D Forums",
                                className: "forums-class",
                                content: html,
                                buttons: {
                                    cancel: "Exit"
                                }
                            })
                            loadForumsPage("forumPost", div)
                        })
                    })
                })
            }
        }, 500);
        setTimeout(() => {
            function yourmother() {
                localforage.getItem("FORUMS_USERNAME").then(username => {
                    if (!username) return
                    localforage.getItem("FORUMS_PASSWORD").then(password => {
                        if (!password) return
                        const requestOptions = {
                            method: 'GET',
                            headers: {
                                'username': username
                            }
                        };
                        fetch(`https://469-forumstest.jeremygamer13.repl.co/accounts/getNotifications`, requestOptions).then(result => result.json().then(json => {
                            const notificator = document.getElementById("forums_notification_indicator_wakeupmf_tyougotanotif_brh")
                            if (json.amount > 0) {
                                notificator.setAttribute("style", "color:red;position:relative")
                                document.getElementById("forums_notification_indicator_wakeupmf_tyougotanotif_brh_MMMMMMM").innerText = String(Number(json.amount) > 9 ? "9+" : Number(json.amount))
                            } else {
                                notificator.setAttribute("style", "display:none")
                            }
                        }))
                    })
                })
            }
            yourmother()
            setInterval(yourmother, 20000);
        }, 1000);
    },
    methods: {
        async forums() {
            const html = document.createElement("div")
            const div = document.createElement("div")
            html.appendChild(div)
            div.setAttribute("class", "forums-div")
            const warning = document.createElement("div")
            html.appendChild(warning)
            warning.setAttribute("class", "forums-warning")
            warning.innerHTML = `<i style="margin-left: 0.5%" class="fa-solid fa-triangle-exclamation"></i> S4D forums are in a "Beta - candidate" state. Don't hesitate to give feedback in the official Discord server.`
            const notifications = document.createElement("div")
            notifications.setAttribute("class", "forums-screen-notifications")
            const notifTextDiv = document.createElement("div")
            notifTextDiv.id = "s4d_forums_notifications_text_div_agegeafafdafsdfsdfsdgfdsgfdddddgdhgdfff"
            notifications.appendChild(notifTextDiv)
            html.appendChild(notifications)
            this.$swal({
                title: "S4D Forums",
                className: "forums-class",
                content: html,
                buttons: {
                    cancel: "Exit"
                }
            })
            const currentPage = await localforage.getItem("FORUMS_PAGE")
            loadForumsPage(currentPage, div)
        },
    }
}
emojiObject["😀"] = "grinning-face"
emojiObject["😃"] = "grinning-face-with-big-eyes"
emojiObject["😄"] = "grinning-face-with-smiling-eyes"
emojiObject["😁"] = "beaming-face-with-smiling-eyes"
emojiObject["😆"] = "grinning-squinting-face"
emojiObject["😅"] = "grinning-face-with-sweat"
emojiObject["🤣"] = "rolling-on-the-floor-laughing"
emojiObject["😂"] = "face-with-tears-of-joy"
emojiObject["🙂"] = "slightly-smiling-face"
</script>

<style>

.swal_forums_instructions {
    width: 60%;
    overflow: auto;
}

.forums-div {
    background-color: rgb(232, 232, 232);
    width: 100%;
    height: 38em;
    overflow: auto;
}

.forums-warning {
    text-align: left;
    background-color: rgb(255, 208, 0);
}

.forums-class {
    width: 90%;
    height: 88%;
    overflow: auto;
}

.forums-fakeUrl {
    text-decoration-line: underline;
    color: dodgerblue;
}

.forums-home-sideMessages {
    text-align: left;
    margin-left: 0.5%;
}

.forums-postingCategoryButtons {
    border-width: 0px;
    background-color: white;
}

.forums-post-author {
    float: right;
    display: flex;
    align-items: right;
    flex-direction: row;
    font-size: 130%;
}

.forums-post-author-image {
    width: 32px;
    height: 32px;
    overflow: hidden;
    border-radius: 50%;
}

.forums-screen-post {
    width: 90%;
    background-color: white;
}

.forums-post-subposts {
    width: 80%;
    background-color: white;
}

.forums-post-tag {
    background-color: rgb(107, 176, 255);
    color: white;
    border-radius: 25%;
    width: 20%;
    text-align: center;
}

.forums-post-author-information {
    margin-left: 50%;
    padding: 1%;
    text-align: right;
    background-color: rgb(110, 173, 255);
    color: white;
    width: 20%;
}

.forums-post-commentSection {
    background-color: rgb(209, 209, 209);
    width: 90%;
}

#s4d_forums_post_blockly_file_div {
    width: 85%;
    height: 30em;
    overflow: hidden;
}

.forums-screen-notifications {
    position: absolute;
    background-color: red;
    color: white;
    width: 50%;
    height: 4.3em;
    margin-top: 0.5%;
    text-align: left;
    font-weight: 600;
    overflow: auto;
}

div.forums-screen-notifications > div {
    margin-left: 0.5%;
}

.forums-notifications-markAsReadButton {
    position: absolute;
    top: 0%;
    right: 0.5%;
}

</style>