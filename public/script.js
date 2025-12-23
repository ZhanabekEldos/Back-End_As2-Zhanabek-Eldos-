const btn = document.getElementById("btn");
const userDiv = document.getElementById("user");

btn.addEventListener("click", async () => {
  userDiv.innerHTML = "Loading...";

  // 1️⃣ получаем random user
  const userRes = await fetch("/api/random-user");
  const user = await userRes.json();

  // 2️⃣ получаем страну по имени
  const countryRes = await fetch(`/api/country/${user.country}`);
  const country = await countryRes.json();

  userDiv.innerHTML = `
    <div class="card">
      <img src="${user.picture}" alt="User">
      <h2>${user.firstName} ${user.lastName}</h2>

      <p><b>Gender:</b> ${user.gender}</p>
      <p><b>Age:</b> ${user.age}</p>
      <p><b>Date of Birth:</b> ${new Date(user.dob).toDateString()}</p>
      <p><b>City:</b> ${user.city}</p>
      <p><b>Country:</b> ${user.country}</p>
      <p><b>Address:</b> ${user.address}</p>

      <hr>

      <h3>Country Information</h3>
      <img src="${country.flag}" width="120">
      <p><b>Capital:</b> ${country.capital}</p>
      <p><b>Languages:</b> ${country.languages}</p>
      <p><b>Currency:</b> ${country.currency}</p>
    </div>
  `;
});
