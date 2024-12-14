function upDate(previewPic) {
    // Log to check if the function is triggered
    console.log("Mouse over event triggered!");

    // Log the alt and src attributes of the hovered image
    console.log("Alt:", previewPic.alt, "Src:", previewPic.src);

    // Update the text content of the div with the ID "image"
    const imageDiv = document.getElementById("image");
    imageDiv.innerText = previewPic.alt;

    // Change the background image of the div with the ID "image"
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
}

function undo() {
    // Reset the background image of the div with the ID "image"
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    // Reset the text content of the div with the ID "image"
    imageDiv.innerText = "Hover over an image below to display here.";
}
