const tabs = document.querySelectorAll(".tab-heading li");
const cards = document.querySelectorAll(".tab-cards .card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active class from all tabs
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // hide all cards
    cards.forEach(card => card.classList.remove("active"));

    // show selected card
    const id = tab.dataset.id;
    document.getElementById(id).classList.add("active");
  });
});
