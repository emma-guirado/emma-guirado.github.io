
/*==================== Element declarations ====================*/
const articles = document.getElementsByTagName("article");
const navList = document.getElementById('nav');

/*==================== Function declarations ====================*/
function showSection () {
    navList.addEventListener('click', function showContent (event) {
        let elementToDisplay = event.target.id;
        // console.log("element to display:"+elementToDisplay);
        if (elementToDisplay != navList.id)
        {
            for (article of articles) {
            // console.log(article);
            article.style.display = "none";
            let element = document.querySelector(".panel_"+elementToDisplay);
            element.style.display = "block";
            }
        }
    })
}

/*==================== Execute functions ====================*/
showSection();