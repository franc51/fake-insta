async function getData() {
  const response = await fetch(
    "https://mocki.io/v1/9df2bd90-2565-45cc-ba79-f105294f0686"
  );
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let story = document.getElementById("st-" + i);
    story.innerHTML = data[i].name;
    let story_img = document.getElementById("st-img-" + i);
    story_img.src = data[i].photo;
  }
}
getData();
