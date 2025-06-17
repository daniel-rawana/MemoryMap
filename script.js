
let map;

const locations = [
    {
        title: "Toronto Island",
        lat: 43.6205,
        lng: -79.3781,
        images: []
    },
    {
        title: "Montreal Trip",
        lat: 45.5017,
        lng: -73.5673,
        images: []
    },
    {
        title: "LA (Future)",
        lat: 34.0522,
        lng: -118.2437,
        images: [],
        message: "To be written..."
    }
];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 43.7, lng: -79.4 },
        zoom: 4,
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
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}
