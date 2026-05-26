function showPoem(response) {
  console.log("poem generator");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let topic = document.querySelector("#topic").value;
  let apiKey = "aofcd5541add57c0396398488b47at43";
  let context =
    "You are a poet who writes playful and humorous poems for all ages.";
  let prompt = `Generate a 5-6 lines of a poem about ${topic}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiUrl).then(showPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
