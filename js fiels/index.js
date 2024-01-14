

fetch("https://forbes400.onrender.com/api/forbes400?limit=4")
  .then((res) => res.json())
  .then((data) => {
    const personDiv = document.getElementById("person-div");
    
    data.forEach((personData) => {
      const createPersonDiv = document.createElement("div");
      createPersonDiv.classList.add("grid");
      createPersonDiv.classList.add("grid-cols-5");
      createPersonDiv.classList.add("py-1");
      createPersonDiv.innerHTML = `
        <button class="block text-xl text-left hover:text-blue-950 hover:font-semibold">${personData.person.name}</button>
        <p class="text-xl  ">${personData.countryOfCitizenship}</p>
        <p class="text-xl ">${personData.industries}</p>
        <p class="text-xl ">${personData.position}</p>
        <p class="text-xl "> $${personData.finalWorth} </p>
        `;
      personDiv.appendChild(createPersonDiv);
    });
    let totalWorth = 0;
    data.map((personData) => {
      totalWorth = totalWorth + personData.finalWorth;
    });
    const worth = document.getElementById("total-worth");
    worth.innerText = totalWorth;
  });
