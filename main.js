// function to add a new news item to the recent news section
function addNewsItem() {
	var newsList = document.querySelector('.recent-news ul');
	var newsItem = document.createElement('li');
	newsItem.innerHTML = '<a href="#">New News Item</a>';
	newsList.appendChild(newsItem);
}

// add a click event listener to the "Add News" button
var addNewsBtn = document.querySelector('#add-news-btn');
addNewsBtn.addEventListener('click', addNewsItem);
