let tableBody = document.getElementById("table");

function search() {
  let i = 0;
  tableBody.innerHTML = "";
  const year = document.getElementById("year");
  const slectedlanguage = document.getElementById("language");
  // alert("Year is: " + year.value + " & Language is: " + slectedlanguage.value);

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((movie) => {
        let rDate = movie.release_date.split("");
        rDate = rDate.slice(0, 4);
        rDate = rDate.join("");
        if (
          (year.value === rDate &&
            movie.original_language === slectedlanguage.value) ||
          (year.value === "all" &&
            movie.original_language === slectedlanguage.value)
        ) {
          console.log(movie.id);
          const row = document.createElement("tr");
          row.className = "row";
          tableBody.appendChild(row);

          const sno = document.createElement("td");
          i += 1;
          sno.innerHTML = i;
          row.appendChild(sno);

          const mid = document.createElement("td");
          mid.innerHTML = movie.id;
          row.appendChild(mid);

          const mName = document.createElement("td");
          const title = document.createElement("b");
          const genres = document.createElement("div");
          title.innerHTML = movie.title;
          let time = movie.runtime / 60;
          genres.innerHTML = movie.genres + " * " + time.toFixed(1) + " Hours";
          row.appendChild(mName);
          mName.appendChild(title);
          mName.appendChild(genres);

          let mYear = document.createElement("td");
          rDate = movie.release_date.split("");
          rDate = rDate.slice(0, 4);
          rDate = rDate.join("");
          mYear.innerHTML = rDate;
          row.appendChild(mYear);
          console.log(movie.title);
        }
      });
    });
}
