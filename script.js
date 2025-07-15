    let searchbtn = document.getElementById('submit');
    let dish = document.getElementById('dish');

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
        .then((response) => response.json())
        .then((actualData) => {
            filterProduct(actualData);
        })
        .catch((error) => {
            console.log(error);
            alert("Something went wrong");
        });

    function filterProduct(data) {
        data.meals.forEach(element => {
            let product = document.createElement('div');
            product.className = "product-card";

            let mealName = document.createElement('h1'); 
            mealName.className = "heading"; 
            mealName.innerText = element.strMeal; 
            let image = document.createElement("img");
            image.setAttribute("src", element.strMealThumb); 

            let button = document.createElement('button');
            button.innerText = "View Recipe";
            button.className = "product-btn";

            product.append(mealName, image, button);
            dish.append(product);
        });
    }