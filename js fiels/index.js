
fetch("https://forbes400.onrender.com/api/forbes400?limit=3")
  .then((res) => res.json())
  .then((data) => {
    const personDiv = document.getElementById("person-div");
    
    data.forEach((personData) => {
      const createPersonDiv = document.createElement("div");
      createPersonDiv.classList.add("grid");
      createPersonDiv.classList.add("grid-cols-5");
      createPersonDiv.classList.add("py-1");
      createPersonDiv.innerHTML = `
        <button class="block md:text-xl text-xs text-left hover:text-blue-950 hover:font-semibold">${personData.person.name}</button>
        <p class="md:text-xl text-xs mx-auto">${personData.countryOfCitizenship}</p>
        <p class="md:text-xl text-xs ms-auto">${personData.industries}</p>
        <p class="md:text-xl text-xs mx-auto">${personData.position}</p>
        <p class="md:text-xl text-xs"> $${personData.finalWorth} </p>
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
