const data = [
  { id: 1, title: "123 Bedford Ave, Brooklyn", price: "$3,200/month", img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Greenwich_Village_building_with_fire_escape.jpg", email: "jenny@trikey.com" },
  { id: 2, title: "200 Kent Ave, Brooklyn", price: "$4,500/month", img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ivy_Covered_Building_Greenwich_St_NYC.jpg", email: "marco@trikey.com" },
  { id: 3, title: "87 North 7th St, Brooklyn", price: "$2,800/month", img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=60", email: "lee@trikey.com" },
  { id: 4, title: "45 South 4th St, Brooklyn", price: "$5,400/month", img: "https://images.unsplash.com/photo-1613977257363-707ba9348229?auto=format&fit=crop&w=800&q=60", email: "sara@trikey.com" },
  { id: 5, title: "302 Wythe Ave, Brooklyn", price: "$3,000/month", img: "https://images.unsplash.com/photo-1520963942033-6e928109d2c5?auto=format&fit=crop&w=800&q=60", email: "dana@trikey.com" }
];

const container = document.getElementById("listings");

data.forEach(listing => {
  const div = document.createElement("div");
  div.className = "listing";
  div.innerHTML = `
    <img src="${listing.img}" alt="Apartment">
    <div class="details">
      <h2>${listing.title}</h2>
      <p>${listing.price}</p>
      <div class="contact">Contact Agent: <a href="mailto:${listing.email}">${listing.email}</a></div>
    </div>
    <div class="favorite" onclick="toggleSave(${listing.id}, this)">🔑</div>
  `;
  container.appendChild(div);
});

function toggleSave(id, el) {
  const saved = JSON.parse(localStorage.getItem("savedListings") || "[]");
  if (saved.includes(id)) {
    el.classList.remove("active");
    localStorage.setItem("savedListings", JSON.stringify(saved.filter(x => x !== id)));
  } else {
    el.classList.add("active");
    saved.push(id);
    localStorage.setItem("savedListings", JSON.stringify(saved));
  }
}
