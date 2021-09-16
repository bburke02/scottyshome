const API_URL =
  "https://api.us.gov/crime/fbi/sapi/api/agencies?api_key=AuAwBej1rL8w1K4LvlVDcZOvrDTW3KpLw2mic8h4";

const requestFbi = async function () {
  const t = fetch(API_URL);
  res = await (await t).json();
  console.log(res);
};

var outerScopeVar;
helloCatAsync();
alert(outerScopeVar);

function helloCatAsync() {
  setTimeout(function () {
    outerScopeVar = "Nya";
  }, Math.random() * 2000);
}

requestFbi();
