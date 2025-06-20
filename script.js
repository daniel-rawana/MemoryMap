
let map;

const locations = [
    { title: "Toronto Island", lat: 43.6205, lng: -79.3781, images: [] },
    { title: "Montreal", lat: 45.5019, lng: -73.5674, images: [] },
    { title: "Jackson's Point", lat: 44.3492, lng: -79.3689, images: [] },
    { title: "Downtown Toronto", lat: 43.651070, lng: -79.347015, images: [] },
    { title: "Markham", lat: 43.8561, lng: -79.3370, images: [] },
    { title: "Barrie", lat: 44.3894, lng: -79.6903, images: [] },
    { title: "Schomberg", lat: 44.0042, lng: -79.6842, images: [] },
    { title: "London, ON", lat: 42.9849, lng: -81.2453, images: [] },
    { title: "North York", lat: 43.7615, lng: -79.4111, images: [] },
    { title: "LA (Future)", lat: 34.0522, lng: -118.2437, images: [], message: "To be written..." }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.7, lng: -79.4 },
        zoom: 5,
    });

    locations.forEach((loc) => {
        const marker = new google.maps.Marker({
            position: { lat: loc.lat, lng: loc.lng },
            map,
            title: loc.title
        });

        marker.addListener("click", () => {
            document.getElementById("modal-title").textContent = loc.title;
            const body = document.getElementById("modal-body");
            body.innerHTML = "";

            if (loc.images && loc.images.length > 0) {
                loc.images.forEach((img) => {
                    const image = document.createElement("img");
                    image.src = img;
                    image.style.width = "100%";
                    image.style.marginBottom = "10px";
                    body.appendChild(image);
                });
            } else {
                const p = document.createElement("p");
                p.textContent = loc.message || "No images yet.";
                body.appendChild(p);
            }

            document.getElementById("modal").classList.remove("hidden");
        });
    });

    document.getElementById("modal").addEventListener("click", (e) => {
        if (e.target.id === "modal") closeModal();
    });
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
