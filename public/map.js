let button = document.getElementById("button");
let post = document.querySelector(".post");
let postList = document.querySelector(".postList");
let input = document.getElementById("input");

function addPost(){
	console.log("someone made a post!");
	
	let postContent = input.value;
	input.value = '';
	
	let newPost = document.createElement('p');
	newPost.textContent = postContent;
	
	console.log(newPost);
	
	let actualPost = document.createElement('div'); 
	actualPost.className = "post";
	
	if (postContent != ""){ //only if post isn't blank
		
		//new Date() only grabs the time at the moment it is run, 
		//force new Date() to run every time a post is made to grab the current time
		var time = new Date();
	
		actualPost.textContent = postContent + "  " + time;
		postList.appendChild(actualPost);
	}	
}

button.addEventListener('click', addPost);