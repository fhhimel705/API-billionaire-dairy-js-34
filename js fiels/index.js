document.getElementById("loadMore").addEventListener("click", function () {
  showLoading(true);
  document.getElementById("loadMore").classList.add('hidden');
  let limit = "limit=20";
  showPersonData(limit);
});
const showPersonData = (limit) => {
  
  fetch(
    `https://forbes400.onrender.com/api/forbes400?${limit ? limit : "limit=5"}`
  )
    .then((res) => res.json())
    .then((data) => {
      const personDiv = document.getElementById("person-div");
      personDiv.innerText = "";
      const BillionaireDiv = document.getElementById("billionaire-div");
      BillionaireDiv.innerText = "";
      showLoading(true);

      data.forEach((personData) => {
        const createPersonDiv = document.createElement("div");
        createPersonDiv.classList.add("grid");
        createPersonDiv.classList.add("grid-cols-5");
        createPersonDiv.classList.add("py-1");
        createPersonDiv.innerHTML = `
          <button class="block md:text-xl text-xs text-left hover:text-blue-950 hover:font-semibold">${personData.person.name}</button>
          <p class="md:text-xl text-xs md:mr-auto mx-auto">${personData.countryOfCitizenship}</p>
          <p class="md:text-xl text-xs md:mx-auto text-center ml-auto">${personData.industries}</p>
          <p class="md:text-xl text-xs md:mx-auto mx-auto">${personData.position}</p>
          <p class="md:text-xl text-xs  mx-auto" > $${personData.finalWorth} </p>
          `;
        personDiv.appendChild(createPersonDiv);

        const createBillionaireDiv = document.createElement("div");
        createBillionaireDiv.classList.add("bg-blue-950");
        createBillionaireDiv.classList.add("p-5");
        createBillionaireDiv.classList.add("text-white");

        createBillionaireDiv.innerHTML = `
        <h4 class="text-center font-semibold text-2xl pb-3">${
          personData.person.name
        }</h4>
        <div class="grid grid-cols-2 ">
            <div class=" border-e-2 pe-3">
                <img src="${personData.squareImage}" class="pb-2" alt="">
                <p> <span class="font-bold">Source : </span>${
                  personData.source
                }</p>
            </div>
            <div class="p-3">
                <p><span class="text-lg font-bold">Citizenship : </span> ${
                  personData.countryOfCitizenship
                }</p>
                <p><span class="text-lg font-bold">State : </span> ${
                  personData.state ? personData.state : "No Data"
                }</p>
                <p><span class="text-lg font-bold">City : </span> ${
                  personData.city
                }</p>
                <p><span class="text-lg font-bold">Total Shares : </span> ${personData.financialAssets[0].numberOfShares.toFixed(
                  2
                )}</p>
                <p><span class="text-lg font-bold">Share Price : </span> $${personData.financialAssets[0].sharePrice.toFixed(
                  2
                )}</p>
            </div>
        </div>
        `;
        BillionaireDiv.appendChild(createBillionaireDiv);
        showLoading(false);
      });
      let totalWorth = 0;
      data.map((personData) => {
        totalWorth = totalWorth + personData.finalWorth;
      });
      const worth = document.getElementById("total-worth");
      worth.innerText = totalWorth.toFixed(2);
    });
};
showPersonData();
const showLoading = (isLoading) => {
  const loading02 = document.getElementById("loading-02");
  if (isLoading) {
    loading02.classList.remove("hidden");
  } else {
    loading02.classList.add("hidden");
  }
};
