async function getPost() {
    const response = await fetch(" https://dummyjson.com/products ");
    const posts = await response.json();
    console.log(posts);
    const data = posts.products;
    console.log(data);

    const result = data.map(function (ele) {
            return `
        <div class="product_item">
                <h2>${ele.title}</h2>
                <a href="${ele.id}.html"> 
                    <img src="${ele.thumbnail}">
                </a>
                 <div class="product_desc">
                   <span>${ele.price}$</span>
                   <span>${ele.brand}</span>
                 </div>
                

        </div>

                 `;
        })
        .join("");
    document.querySelector(".product_sec").innerHTML = result;
}

getPost();

      
