//create and add element using JavaScript
const li = document.createElement('li');
li.innerText = 'Blog-5'

//where to add
const ul = document.getElementById('blog-list');
//add element
ul.appendChild(li);


//add article

const article = document.createElement('article');
article.classList.add('blog');
const h3 = document.createElement('h3');
h3.innerHTML = 'My Awesome Blog-5';
const p = document.createElement('p');
p.innerText = 'Iste tempore reiciendis provident in eligendi iure illum consequatur ipsum dignissimos explicabo, ex harum. Vel quam ad velit, sit ea, dolorem dicta unde placeat incidunt quae culpa, aliquid reiciendis doloribus?';

article.appendChild(h3);
article.appendChild(p);

//parent of article

const blogSection = document.getElementById('blogs');
blogSection.appendChild(article);