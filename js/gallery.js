document.addEventListener("DOMContentLoaded", function () {
    const featuredImage = document.getElementById("featured-image");
    const imageCaption = document.getElementById("image-caption");
    const thumbnailList = document.getElementById("thumbnail-list");

    // Array of image data using JavaScript objects
    const imageData = [
        { large: "images/flowers-yellow-large.jpg", small: "images/flowers-yellow-small.jpg", title: "Sunflowers in the hamlet Dernekamp", info: "Beautiful sunflowers in Germany" },
        { large: "images/flowers-red-large.jpg", small: "images/flowers-red-small.jpg", title: "Poppies in cornfield", info: "Vivid red poppies in a cornfield" },
        { large: "images/flowers-white-large.jpg", small: "images/flowers-white-small.jpg", title: "Daffodils in Sentmaring park", info: "White daffodils in a park in Germany" },
        { large: "images/flowers-purple-large.jpg", small: "images/flowers-purple-small.jpg", title: "Sentmaring Park", info: "Scenic view of Sentmaring Park" },
        { large: "images/flowers-pink-large.jpg", small: "images/flowers-pink-small.jpg", title: "Market in Münster", info: "Colorful market scene in Münster" }
        // Add more image data objects as needed
    ];

    // Dynamically build thumbnail list
    imageData.forEach((data, index) => {
        const listItem = document.createElement("li");
        const thumbnail = document.createElement("img");
        thumbnail.src = data.small;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        listItem.appendChild(thumbnail);
        thumbnailList.appendChild(listItem);

        // Add click event to each thumbnail
        thumbnail.addEventListener("click", function () {
            featuredImage.src = data.large;
            imageCaption.innerText = data.title;
            imageCaption.innerHTML += "<br>" + data.info; // Add information to the caption
            updateActiveThumbnail(index);
        });
    });

    // Function to update active thumbnail styling
    function updateActiveThumbnail(activeIndex) {
        const thumbnails = thumbnailList.getElementsByTagName("li");
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].classList.remove("active");
        }
        thumbnails[activeIndex].classList.add("active");
    }
});
