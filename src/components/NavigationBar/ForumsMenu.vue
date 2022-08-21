<template>
    <b-nav-item @click="forums">Forums</b-nav-item>
</template>

<script>
import Blockly from "blockly";
import localforage from 'localforage';
import JSZip from "jszip";
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
    const matches = String(newString).match(/\w+:\/\/\S*/gmi)
    if (matches) {
        matches.forEach(match => {
            newString = newString.replace(match, '<a target="_blank" href="https://469-forumstest.jeremygamer13.repl.co/forums/getUrlRedirectPage/?url=' + Buffer.from(match, 'UTF8').toString('Hex') + '">' + match + '</a>')
        })
    }
    return newString
}
function unixToDate(unix) {
    return (new Date(unix).toDateString() + ", " + new Date(unix).toLocaleTimeString())
}
function loadForumsPage(page, div) {
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
<p id="s4d_forums_homeMenu_logout" class="forums-fakeUrl" style="float:right;margin-right:0.5%;">Log out</p>
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
                "Tip: There is some special text stuff you can use when creating posts/comments like [bold] and (small). Try using them!",
                "Note: The API for the forums is publicly usable. If requested and allowed, blocks might be made for it.",
                "Tip: There may be some more helpers in our Discord servers than on here due to how new it is. If your question hasn't been answered for a while, try checking those.",
                "zzzzzzzzzzzzzzz...",
                "<a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>",
                "<p style=\"color:green\">look at me im colored green</p>",
                "<i class=\"fa-solid fa-bullhorn\"></i> I AM THE ONE WHO DID THE POO"
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
<p>${syntaxifyString(String(post.desc).substring(0, 99).replaceAll("\n", " "))}</p>
<small style="color:dodgerblue">${displayTags.join(", ")}</small>`
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
    </div>
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
    <p>${post.author == username ? `<button style="border-width:0;background-color:transparent" id="s4d_forums_post_button_content_EditAsAuthor"><i class="fa-solid fa-square-pen"></i></button> &#8226 ` : ""}${syntaxifyString(post.desc.replaceAll("\n", "<br>"))}</p>
    <div id="s4d_forums_post_blockly_file_div"></div>
    <div class="forums-post-author-information">
        <div>
            <p>Posted by <b id="s4d_forums_post_author_name">${post.author}</b></p>
            <img id="s4d_forums_post_author_image" width="96" src="https://469-forumstest.jeremygamer13.repl.co/getFallbackIcon">
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
                                    p.innerHTML = `${comment.comment} &#8226 <b style="color:blue">${comment.author}</b> on <i>${unixToDate(comment.time)}</i> `
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
                                    editTitleButton.onclick = () => {
                                        const newTitle = prompt("Post Title", post.title)
                                        if (!newTitle || newTitle == "") return
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
                                                'title': newTitle
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
                                const editContentButton = document.getElementById("s4d_forums_post_button_content_EditAsAuthor")
                                if (editContentButton) {
                                    editContentButton.onclick = () => {
                                        const newContent = prompt("Post Content (use < for new lines)", "").replaceAll("<", "\n")
                                        if (!newContent || newContent == "") return
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
                                                'content': newContent
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
        default:
            div.innerHTML = `<br><p>Unknown page type '${page.replace(/[^a-zA-Z0-9]/gmi, "_")}', please report to JeremyGamer13#7984</p>
<br>
<p id="s4d_forums_invalid_page_return" class="forums-fakeUrl">Return to Register Page</p>`
            document.getElementById("s4d_forums_invalid_page_return").onclick = () => {
                loadForumsPage("register", div)
            }
            break;
    }
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
        }
        setTimeout(() => {
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
</script>

<style>



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

</style>