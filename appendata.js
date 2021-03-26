const root = document.getElementById("root");

fetch("/shorthands.json")
  .then((res) => res.json())
  .then((data) => appendData(data))
  .catch((err) => console.log(err));

function appendData(data) {
  for (let i = 0; i < data.length; i++) {
    const syntaxContainer = document.createElement("div");
    syntaxContainer.classList.add("w-full", "py-5");

    syntaxContainer.innerHTML = `<div class="flex items-center" id="${data[i].id}">
          <img src="./hashtag.svg" alt="hashlink" class="w-8" />
          <h1 class="text-white text-3xl">${data[i].name}</h1>
        </div>
        <div class="mt-5 ml-2 text-white">
          <p class="text-lg">longhand</p>
          <pre id="pre" class="language-css">
          <code class="language-css">${data[i].longhand}
              </code></pre>
        </div>
        <div class="mt-5 ml-2 text-white">
          <p class="text-lg">shorthand</p>
          <pre><code class="language-css ">${data[i].shorthand}
              </code></pre>
        </div>

        </div>
        `;

    root.appendChild(syntaxContainer);
  }
}
