let posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const container = document.querySelector("main")


function renderPosts(){
    let post = ""
    for (let i=0;i< posts.length;i++){
        post +=`
            <section>
                    <div class="data-container">
                        <img class="avatar" src=${posts[i].avatar} />
                        <div class="data-user">
                            <h2 class="user-name">${posts[i].name}</h2>
                            <p class="user-location">${posts[i].location}</p>
                        </div>
                    </div>
                    <img class="post-image" src=${posts[i].post} />
                        <div class="icons">
                            <img class="btn-like" src="images/icon-heart.png" />
                            <img src="images/icon-comment.png" />
                            <img src="images/icon-dm.png" />
                        </div>
                        <h3 class="likes">${posts[i].likes} likes</h3>
                        <h4 class="user-comment">${posts[i].username} <span class="comment">${posts[i].comment}</span></h4>

                </section> 
        `
        
    }

    container.innerHTML = post    
}

renderPosts()

const likeButtons = document.querySelectorAll(".btn-like")
const likes = document.querySelectorAll(".likes")
const postImages = document.querySelectorAll(".post-image")

for(let i=0;i< likeButtons.length;i++){
    let like = false
    likeButtons[i].addEventListener("click",function(){
        if(like){
            likeButtons[i].classList.remove("clicked-like")
            this.src = "images/icon-heart.png"
            like=false
            posts[i].likes--
            likes[i].textContent = posts[i].likes + " likes"
        }else{
            likeButtons[i].classList.add("clicked-like")
            this.src = "images/liked.png"
            like=true
            posts[i].likes++
            likes[i].textContent = posts[i].likes + " likes"   
        }
    })
    
    postImages[i].addEventListener("dblclick",function(){
        if(like){
            likeButtons[i].classList.remove("clicked-like")
            likeButtons[i].src = "images/icon-heart.png"
            like=false
            posts[i].likes--
            likes[i].textContent = posts[i].likes + " likes"
        }else{
            likeButtons[i].classList.add("clicked-like")
            likeButtons[i].src = "images/liked.png"
            like=true
            posts[i].likes++
            likes[i].textContent = posts[i].likes + " likes"   
        }
    })    
}

