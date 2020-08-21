let base_url = "https://cors-anywhere.herokuapp.com/http://api.football-data.org/v2/";

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}

// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}

// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}

// Blok kode Areas
function getAreas() {
  if ("caches" in window) {
    caches.match(base_url + "areas").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          let footballsHTML = "";
          data.areas.forEach(function (football) {
            footballsHTML += `
                  <div class="card">
                    <a href="./football.html?id=${football.id}">
                      <div class=" waves-effect waves-block waves-light">
                        <span class="card-title truncate">${football.name}</span>
                      </div>
                    </a>
                    <div class="card-content">
                      <p>parentAreaId: ${football.parentAreaId}</p>
                      <p>parentArea: ${football.parentArea}</p>
                    </div>
                  </div>
                `;
          });
          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("areas").innerHTML = footballsHTML;
        });
      }
    });
  }

  fetch(base_url + "areas")
    .then(status)
    .then(json)
    .then(function (data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.

      // Menyusun komponen card artikel secara dinamis
      let footballsHTML = "";
      data.areas.forEach(function (football) {
        footballsHTML += `
              <div class="card">
                <a href="./football.html?id=${football.id}">
                  <div class=" waves-effect waves-block waves-light">
                    <span class="card-title truncate">${football.name}</span>
                  </div>
                </a>
                <div class="card-content">
                  <p>parentAreaId: ${football.parentAreaId}</p>
                  <p>parentArea: ${football.parentArea}</p>
                </div>
              </div>
            `;
      });
      // Sisipkan komponen card ke dalam elemen dengan id #content
      document.getElementById("areas").innerHTML = footballsHTML;
    })
    .catch(error);
}

// Blok kode Competitions
function getCompetitions() {
  if ("caches" in window) {
    caches.match(base_url + "competitions").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          let footballsHTML = "";
          data.competitions.forEach(function (football) {
            footballsHTML += `
                  <div class="card">
                    <a href="./football.html?id=${football.id}">
                      <div class=" waves-effect waves-block waves-light">
                        <span class="card-title truncate">${football.name}</span>
                      </div>
                    </a>
                    <div class="card-content">
                      <p>lastUpdated: ${football.lastUpdated}</p>
                    </div>
                  </div>
                `;
          });
          // Sisipkan komponen card ke dalam elemen dengan id #content
          document.getElementById("competitions").innerHTML = footballsHTML;
        });
      }
    });
  }

  fetch(base_url + "competitions")
    .then(status)
    .then(json)
    .then(function (data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.

      // Menyusun komponen card artikel secara dinamis
      let footballsHTML = "";
      data.competitions.forEach(function (football) {
        footballsHTML += `
              <div class="card">
                <a href="./football.html?id=${football.id}">
                  <div class=" waves-effect waves-block waves-light">
                    <span class="card-title truncate">${football.name}</span>
                  </div>
                </a>
                <div class="card-content">
                  <p>lastUpdated: ${football.lastUpdated}</p>
                </div>
              </div>
            `;
      });
      // Sisipkan komponen card ke dalam elemen dengan id #content
      document.getElementById("competitions").innerHTML = footballsHTML;
    })
    .catch(error);
}

// Blok kode untuk melakukan request data json
// function getArticles() {
//   if ("caches" in window) {
//     caches.match(base_url + "competitions").then(function (response) {
//       if (response) {
//         response.json().then(function (data) {
//           let footballsHTML = "";
//           data.competitions.forEach(function (football) {
//             footballsHTML += `
//                   <div class="card">
//                     <a href="./football.html?id=${football.id}">
//                       <div class=" waves-effect waves-block waves-light">
//                         <span class="card-title truncate">${football.name}</span>
//                       </div>
//                     </a>
//                     <div class="card-content">
//                       <p>${football.lastUpdated}</p>
//                     </div>
//                   </div>
//                 `;
//           });
//           // Sisipkan komponen card ke dalam elemen dengan id #content
//           document.getElementById("footbals").innerHTML = footballsHTML;
//         });
//       }
//     });
//   }

//   fetch(base_url + "competitions")
//     .then(status)
//     .then(json)
//     .then(function (data) {
//       // Objek/array JavaScript dari response.json() masuk lewat data.

//       // Menyusun komponen card artikel secara dinamis
//       let footballsHTML = "";
//       data.competitions.forEach(function (football) {
//         footballsHTML += `
//               <div class="card">
//                 <a href="./football.html?id=${football.id}">
//                   <div class=" waves-effect waves-block waves-light">
//                     <span class="card-title truncate">${football.name}</span>
//                   </div>
//                 </a>
//                 <div class="card-content">
//                   <p>${football.lastUpdated}</p>
//                 </div>
//               </div>
//             `;
//       });
//       // Sisipkan komponen card ke dalam elemen dengan id #content
//       document.getElementById("footballs").innerHTML = footballsHTML;
//     })
//     .catch(error);
// }

// function getArticleById() {
//   return new Promise(function (resolve, reject) {
//     // Ambil nilai query parameter (?id=)
//     let urlParams = new URLSearchParams(window.location.search);
//     let idParam = urlParams.get("id");

//     if ("caches" in window) {
//       caches.match(base_url + "football/" + idParam).then(function (response) {
//         if (response) {
//           response.json().then(function (data) {
//             let articleHTML = `
//             <div class="card">
//               <div class="card-image waves-effect waves-block waves-light">
//                 <img src="${data.result.cover}" />
//               </div>
//               <div class="card-content">
//                 <span class="card-title">${data.result.post_title}</span>
//                 ${snarkdown(data.result.post_content)}
//               </div>
//             </div>
//           `;
//             // Sisipkan komponen card ke dalam elemen dengan id #content
//             document.getElementById("body-content").innerHTML = articleHTML;

//             // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
//             resolve(data);
//           });
//         }
//       });
//     }

//     fetch(base_url + "football/" + idParam)
//       .then(status)
//       .then(json)
//       .then(function (data) {
//         // Objek JavaScript dari response.json() masuk lewat variabel data.
//         // console.log(data);
//         // Menyusun komponen card artikel secara dinamis
//         let articleHTML = `
//           <div class="card">
//             <div class="card-image waves-effect waves-block waves-light">
//               <img src="${data.result.cover}" />
//             </div>
//             <div class="card-content">
//               <span class="card-title">${data.result.post_title}</span>
//               ${snarkdown(data.result.post_content)}
//             </div>
//           </div>
//         `;
//         // Sisipkan komponen card ke dalam elemen dengan id #content
//         document.getElementById("body-content").innerHTML = articleHTML;
//         // Kirim objek data hasil parsing json agar bisa disimpan ke indexed db
//         resolve(data);
//       });
//   });
// }
