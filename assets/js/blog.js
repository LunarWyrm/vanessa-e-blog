const formEl=document.getElementById("form");

function loadBlogs() {
    const blogs = JSON.parse(localStorage.getItem("blogs"));
    formEl.textContent=""
    for (let i = 0; i < blogs.length; i++) {
        formEl.innerHTML=formEl.innerHTML + `
    <div>
        <div>
            <hr>
            <h3>${blogs[i].title}</h3>
            <hr>
            <p>${blogs[i].post}</p>
            <h4>Posted by: ${blogs[i].username}</h4>
            <hr>
        </div>
    </div>`
    }
}
loadBlogs();