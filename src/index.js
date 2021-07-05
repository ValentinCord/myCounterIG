const counter = document.getElementById("counter");
const submitBtn = document.getElementById("submitBtn");

function setOnClick() {
    const updateCounter = async () => {
        const data = await fetch(
          "https://api.countapi.xyz/hit/mycounterformydrive/visits"
        );
        const count = await data.json();
        counter.innerHTML = count.value;
        counter.style.filter = "blur(0)";
        counter.style.color = "#EDAE49";
      };
      
    updateCounter();

    submitBtn.disabled = true;
}

