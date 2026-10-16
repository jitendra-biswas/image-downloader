//making download image function
async function downloadImage() {
    const url = document.getElementById("imgURL").value;
    if(url==""){
        alert("Enter URL first!!!");
        return;
    }
    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "download_image.jpg";

    link.click();
}