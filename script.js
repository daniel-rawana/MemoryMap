
let map;

const locations = [
  {
  title: "10 Toporowski Ave, Richmond Hill, ON",
  lat: 43.8902,
  lng: -79.4326,
  images: [
    "images/10Toporowski/1.jpg",
    "images/10Toporowski/2.jpg",
    "images/10Toporowski/IMG_1091.jpg",
    "images/10Toporowski/IMG_1095.jpg",
    "images/10Toporowski/IMG_1107.jpg",
    "images/10Toporowski/IMG_1324.jpg",
    "images/10Toporowski/IMG_1325.jpg",
    "images/10Toporowski/IMG_1337.jpg"
  ]
},
  { title: "Barrie", lat: 44.3894, lng: -79.6903, images: [
  "images/Barrie/IMG_1489.jpg",
  "images/Barrie/IMG_1497.jpg"
]
 },
  { title: "Cancun", lat: 21.1619, lng: -86.8515, images: [
  "images/Cancun/IMG_1112.jpg",
  "images/Cancun/IMG_2462.jpg",
  "images/Cancun/IMG_2465.jpg",
  "images/Cancun/IMG_2503.jpg"
]
},
  { title: "Downtown Toronto", lat: 43.651070, lng: -79.347015, images: [
  "images/DowntownToronto/IMG_0106.jpg",
  "images/DowntownToronto/IMG_0139.jpg",
  "images/DowntownToronto/IMG_1118.jpg",
  "images/DowntownToronto/IMG_1637.jpg",
  "images/DowntownToronto/IMG_1768.jpg",
  "images/DowntownToronto/IMG_2588.jpg",
  "images/DowntownToronto/IMG_2898.jpg",
  "images/DowntownToronto/IMG_4121.jpg",
  "images/DowntownToronto/IMG_0110.jpg",
  "images/DowntownToronto/IMG_1106.jpg",
  "images/DowntownToronto/IMG_1464.jpg",
  "images/DowntownToronto/IMG_1642.jpg",
  "images/DowntownToronto/IMG_2446.jpg",
  "images/DowntownToronto/IMG_2603.jpg",
  "images/DowntownToronto/IMG_2905.jpg",
  "images/DowntownToronto/IMG_5136.jpg",
  "images/DowntownToronto/IMG_0135.jpg",
  "images/DowntownToronto/IMG_1116.jpg",
  "images/DowntownToronto/IMG_1468.jpg",
  "images/DowntownToronto/IMG_1766.jpg",
  "images/DowntownToronto/IMG_2538.jpg",
  "images/DowntownToronto/IMG_2893.jpg",
  "images/DowntownToronto/IMG_4080.jpg",
  "images/DowntownToronto/IMG_6650.jpg"
]
},
  { title: "Ft. Lauderdale", lat: 26.1224, lng: -80.1373, images: [
  "images/FtLauderdale/1.jpg",
  "images/FtLauderdale/2.jpg",
  "images/FtLauderdale/IMG_0754.jpg",
  "images/FtLauderdale/IMG_0770.jpg",
  "images/FtLauderdale/IMG_0773.jpg",
  "images/FtLauderdale/IMG_0774.jpg",
  "images/FtLauderdale/IMG_0775.jpg",
  "images/FtLauderdale/IMG_6543.jpg",
  "images/FtLauderdale/IMG_6553.jpg"
]
 },
  { title: "Grand River", lat: 43.2200, lng: -80.2600, images: [
  "images/GrandRiver/IMG_1090.jpg",
  "images/GrandRiver/IMG_1327.jpg",
  "images/GrandRiver/IMG_2195.jpg"
]
 }, // Approximate near Brantford/Cambridge
  { title: "Jackson's Point", lat: 44.3492, lng: -79.3689, images: [
  "images/JacksonsPoint/IMG_1418.jpg",
  "images/JacksonsPoint/IMG_1422.jpg",
  "images/JacksonsPoint/IMG_1425.jpg",
  "images/JacksonsPoint/IMG_1427.jpg",
  "images/JacksonsPoint/IMG_1447.jpg"
]
 },
  { title: "London, ON", lat: 42.9849, lng: -81.2453, images: [
  "images/London/IMG_0029.jpg",
  "images/London/IMG_1102.jpg",
  "images/London/IMG_1142.jpg",
  "images/London/IMG_1143.jpg",
  "images/London/IMG_1144.jpg",
  "images/London/IMG_1145.jpg",
  "images/London/IMG_1203.jpg",
  "images/London/IMG_1204.jpg",
  "images/London/IMG_1232.jpg",
  "images/London/IMG_1233.jpg",
  "images/London/IMG_1246.jpg",
  "images/London/IMG_1247.jpg",
  "images/London/IMG_1252.jpg",
  "images/London/IMG_1256.jpg",
  "images/London/IMG_1257.jpg",
  "images/London/IMG_1260.jpg",
  "images/London/IMG_1521.jpg",
  "images/London/IMG_1525.jpg",
  "images/London/IMG_2220.jpg",
  "images/London/IMG_2229.jpg",
  "images/London/IMG_2233.jpg",
  "images/London/lp_image.jpg"
]
 },
  { title: "Markham", lat: 43.8561, lng: -79.3370, images: [
  "images/Markham/IMG_0914.jpg",
  "images/Markham/IMG_1099.jpg",
  "images/Markham/IMG_1100.jpg",
  "images/Markham/IMG_1311.jpg",
  "images/Markham/IMG_2359.jpg",
  "images/Markham/IMG_2362.jpg",
  "images/Markham/IMG_2386.jpg",
  "images/Markham/IMG_2430.jpg",
  "images/Markham/IMG_2433.jpg",
  "images/Markham/IMG_2436.jpg",
  "images/Markham/IMG_2939.jpg"
]
 },
  { title: "Miami", lat: 25.7617, lng: -80.1918, images: [
  "images/Miami/1.jpg",
  "images/Miami/IMG_0781.jpg",
  "images/Miami/IMG_0947.jpg",
  "images/Miami/IMG_1021.jpg",
  "images/Miami/IMG_1041.jpg",
  "images/Miami/IMG_6494.jpg",
  "images/Miami/IMG_6495.jpg",
  "images/Miami/IMG_6501.jpg",
  "images/Miami/IMG_6614.jpg",
  "images/Miami/IMG_6629.jpg"
]
 },
  { title: "Montreal", lat: 45.5019, lng: -73.5674, images: [
  "images/Montreal/IMG_2834.jpg",
  "images/Montreal/IMG_2836.jpg",
  "images/Montreal/IMG_2838.jpg",
  "images/Montreal/IMG_2841.jpg",
  "images/Montreal/IMG_2843.jpg",
  "images/Montreal/IMG_2844.jpg",
  "images/Montreal/IMG_2846.jpg",
  "images/Montreal/IMG_2852.jpg",
  "images/Montreal/IMG_2854.jpg",
  "images/Montreal/IMG_2856.jpg"
]
},
  { title: "North York", lat: 43.7615, lng: -79.4111, images: [] },
  { title: "Richmond Hill", lat: 43.8828, lng: -79.4403, images: [] },
  { title: "Schomberg", lat: 44.0042, lng: -79.6842, images: [] },
  { title: "Toronto Island", lat: 43.6205, lng: -79.3781, images: [] },
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
