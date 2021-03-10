window.onload = function () {
  //menu
  var menuButton = document.getElementById("menu-button");
  var menu = document.getElementById("menu");
  console.log(menuButton);
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("-active");
  });
  //video-cover
  var playVideo = document.getElementById("video-player");
  var coverVideo = document.querySelector(".video-cover");
  playVideo.onclick = () => {
    coverVideo.classList.toggle("-inactive");
  };
  console.log(playVideo);

  //efeito sanfona
  var clickItem = document.querySelectorAll(".item");
  for (var item of clickItem) {
    item.onclick = function () {
      this.classList.toggle("-active");
    };
    console.log(item);
  }

  // carregamento de conteudo
  function fetchData() {
    return new Promise((resolve, reject) => {
      fetch(
        "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein&origin=*"
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  fetchData().then((wikipediaData) =>
    console.log(wikipediaData.query.pages["736"].extract)
  );

  // carregando modal
  var buttonModal = document.getElementById("button-modal");
  var openModal = document.querySelector(".modal-wiki");
  var closeModal = document.getElementById("close-modal");
  buttonModal.onclick = function () {
    openModal.classList.toggle("modal-wiki-active");
  };
};
