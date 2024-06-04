const usernameEl=document.getElementById("username");
const titleEl=document.getElementById("title");
const postEl=document.getElementById("post");
const formEl=document.getElementById("form");

const blogs = JSON.parse(localStorage.getItem("blogs")) || []


function saveBlog(event) {
    event.preventDefault();
    const blog = {
        username: usernameEl.value,
        title: titleEl.value,
        post: postEl.value
    }
    blogs.push(blog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    location.assign("./blog.html")
}

formEl.addEventListener("submit", saveBlog);