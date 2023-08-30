const handleNews = async () => {
  const data = await fetch(
    " https://openapi.programming-hero.com/api/news/categories"
  );
  const response = await data.json();
  console.log(response);
  
};
handleNews();
