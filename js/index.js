const handleNews = async () => {
  const response = await fetch(
    " https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  //   console.log(data);
  //   console.log(data.data.news_category);
  const newsCategory = data.data.news_category;
  const linkContainer = document.getElementById("link-container");
  newsCategory.slice(0, 4).forEach((singleNewsCategory) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a class="tab font-semibold text-2xl" onclick="handleCategoryId('${singleNewsCategory.category_id}')">${singleNewsCategory.category_name}</a>
    `;
    linkContainer.appendChild(div);
  });
};
handleNews();

const handleCategoryId = async (id) => {
  //   console.log(id);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await response.json();
  console.log(data.data);
  const newsCategory = data.data;
  const cardContainer = document.getElementById("card-container");
  //   console.log(cardContainer);
  newsCategory.forEach((news) => {
    const div = document.createElement("div");
    // div.classList.add("card w-96 bg-base-100 shadow-xl");
    div.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
          <img
            src=${news.image_url}
            alt="journalist"
          />
    </figure>
<div class="card-body">
    <h2 class="card-title">${news.title} </h2>
    <p>${news.details.slice(0, 200)} </p>
    <div class="flex justify-between">
    <div class="flex gap-3">
        <img src=${news.author.img} alt="" class="w-[20%] rounded-full">
        <h5>${news.author.name}
        </h5>
    </div>
      <button class="btn btn-primary">Show more</button>
    </div>
  </div>
    </div>
    `;
    cardContainer.appendChild(div);
  });
};
