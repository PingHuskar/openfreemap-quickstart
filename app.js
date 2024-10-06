const [lat, lng] = [13.744971, 100.533743];
const body = document.body
const m = document.createElement(`div`)
m.setAttribute("id", "map");
body.appendChild(m)
const map = new maplibregl.Map({
  style: "https://tiles.openfreemap.org/styles/liberty",
  center: [lng, lat],
  zoom: 15,
  container: "map",
});
marker([lat, lng]).addTo(map);