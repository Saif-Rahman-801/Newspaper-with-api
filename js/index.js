const handleNews = async () => {
  const response = await fetch(
    " https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  //   console.log(data);
  console.log(data.data.news_category);
  const newsCategory = data.data.news_category;
  const linkContainer = document.getElementById("link-container");
  newsCategory.slice(0, 4).forEach((singleNewsCategory) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a class="tab font-semibold text-2xl">${singleNewsCategory.category_name}</a>
    `;
    linkContainer.appendChild(div);
  });
};
handleNews();
