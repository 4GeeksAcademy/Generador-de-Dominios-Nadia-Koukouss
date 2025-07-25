window.onload = function () {
  const arrPronoun = ["the", "our", "my", "your", "his", "her"];
  const arrAdj = ["great", "big", "fast", "smart", "crazy", "cool"];
  const arrNoun = ["jogger", "racoon", "tiger", "ninja", "pirate", "wizard"];
  const selectedExtensions = [];

  function getRandomDomain(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateDomain() {
    let domainWrapper = document.getElementById("domain-wrapper");

    let pronoun = getRandomDomain(arrPronoun);
    let adj = getRandomDomain(arrAdj);
    let noun = getRandomDomain(arrNoun);

    const alert = document.getElementById("alert");

    if (selectedExtensions.length === 0) {
      alert.innerHTML = "Please, extension is required!";
      return;
    } else {
      alert.innerHTML = "";
    }

    let ext = getRandomDomain(selectedExtensions);

    let domain = `${pronoun}${adj}${noun}${ext}`;
    console.log(domain);
    domainWrapper.innerHTML = domain;
  }

  const searchDomain = document.getElementById("search-domain");

  searchDomain.addEventListener("click", () => {
    generateDomain();
  });

  const extensions = document.querySelectorAll(".extensions");
  extensions.forEach((extension) => {
    extension.addEventListener("click", () => {
      extension.classList.add("selected");
      const value = extension.dataset.value;

      if (!selectedExtensions.includes(value)) {
        selectedExtensions.push(value);
      }
    });
  });
};
