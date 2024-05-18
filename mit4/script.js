

let sub = document.getElementById("submit");

sub.addEventListener("click",function(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dept = document.getElementById("dept").value;
    let college = document.getElementById("college").value;

    let list = JSON.parse(localStorage.getItem("dataset")) || [];

    list.push({
        id:this.id,
        name: name,
        email:email,
        dept:dept,
        college:college
    });

    localStorage.setItem("dataset", JSON.stringify(list));

    let post = document.getElementById("post");

    post.innerHTML += ` <h1></h1>
                       <span class="sname"><strong>Name:</strong> ${name}</span>
                       <span class="semail"><strong>Email:</strong> ${email}</span>
                       <span class="sdept"><strong>Dept:</strong> ${dept}</span>
                       <span class="scollege"><strong>College:</strong> ${college}</span>
                       <span>
                            <button onclick="del(event)">Delete</button>
                            <button onclick="del()">Delete</button>
                       </span>`;

    post.style.display = "flex";
    post.style.flexDirection = "column";
     post.style.gap = "50px";

})
