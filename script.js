
let map;
let currentImageIndex = 0;
let currentImages = [];


const locations = [
  {
  title: "10 Toporowski Ave, Richmond Hill, ON",
  lat: 43.8902,
  lng: -79.4326,
 images: [
  "images/10Toporowski/1.jpg",
  "images/10Toporowski/2.jpg",
  "images/10Toporowski/IMG_1091.JPG",
  "images/10Toporowski/IMG_1095.JPEG",
  "images/10Toporowski/IMG_1107.JPG",
  "images/10Toporowski/IMG_1324.JPG",
  "images/10Toporowski/IMG_1325.JPG",
  "images/10Toporowski/IMG_1337.JPEG"
]
},
  { title: "Barrie", lat: 44.3894, lng: -79.6903, images: [
  "images/Barrie/IMG_1489.JPEG",
  "images/Barrie/IMG_1497.JPEG"
]
 },
  { title: "Cancun", lat: 21.1619, lng: -86.8515, images: [
  "images/Cancun/IMG_1112.JPG",
  "images/Cancun/IMG_2462.JPEG",
  "images/Cancun/IMG_2465.JPEG",
  "images/Cancun/IMG_2503.JPEG"
]
},
  { title: "Downtown Toronto", lat: 43.651070, lng: -79.347015, images: [
  "images/DowntownToronto/IMG_0106.JPEG",
  "images/DowntownToronto/IMG_0110.JPEG",
  "images/DowntownToronto/IMG_0135.JPEG",
  "images/DowntownToronto/IMG_0139.JPEG",
  "images/DowntownToronto/IMG_1106.JPG",
  "images/DowntownToronto/IMG_1116.JPEG",
  "images/DowntownToronto/IMG_1118.JPG",
  "images/DowntownToronto/IMG_1464.JPG",
  "images/DowntownToronto/IMG_1468.JPG",
  "images/DowntownToronto/IMG_1637.JPEG",
  "images/DowntownToronto/IMG_1642.JPEG",
  "images/DowntownToronto/IMG_1766.JPEG",
  "images/DowntownToronto/IMG_1768.JPEG",
  "images/DowntownToronto/IMG_2446.JPEG",
  "images/DowntownToronto/IMG_2538.JPEG",
  "images/DowntownToronto/IMG_2588.JPEG",
  "images/DowntownToronto/IMG_2603.JPEG",
  "images/DowntownToronto/IMG_2893.JPEG",
  "images/DowntownToronto/IMG_2898.JPEG",
  "images/DowntownToronto/IMG_4080.JPEG",
  "images/DowntownToronto/IMG_4121.JPEG",
  "images/DowntownToronto/IMG_5136.JPEG",
  "images/DowntownToronto/IMG_6650.JPEG"
]
},
  { title: "Ft. Lauderdale", lat: 26.1224, lng: -80.1373, images: [
  "images/FtLauderdale/1.jpg",
  "images/FtLauderdale/2.jpg",
  "images/FtLauderdale/IMG_0754.JPEG",
  "images/FtLauderdale/IMG_0770.JPEG",
  "images/FtLauderdale/IMG_0773.JPEG",
  "images/FtLauderdale/IMG_0774.JPEG",
  "images/FtLauderdale/IMG_0775.JPEG",
  "images/FtLauderdale/IMG_6543.JPEG",
  "images/FtLauderdale/IMG_6553.JPEG"
]
 },
  { title: "Grand River", lat: 43.2200, lng: -80.2600, images: [
  "images/GrandRiver/IMG_1090.JPG",
  "images/GrandRiver/IMG_1327.JPEG",
  "images/GrandRiver/IMG_2195.JPEG"
]
 },
  { title: "Jackson's Point", lat: 44.3492, lng: -79.3689, images: [
  "images/JacksonsPoint/IMG_1418.JPEG",
  "images/JacksonsPoint/IMG_1422.JPEG",
  "images/JacksonsPoint/IMG_1425.JPEG",
  "images/JacksonsPoint/IMG_1427.JPEG",
  "images/JacksonsPoint/IMG_1447.JPEG"
]
 },
  { title: "London, ON", lat: 42.9849, lng: -81.2453, images: [
  "images/London/IMG_0029.JPEG",
  "images/London/IMG_1102.JPG",
  "images/London/IMG_1142.JPEG",
  "images/London/IMG_1143.JPEG",
  "images/London/IMG_1144.JPG",
  "images/London/IMG_1145.JPG",
  "images/London/IMG_1204.JPG",
  "images/London/IMG_1232.JPG",
  "images/London/IMG_1233.JPG",
  "images/London/IMG_1246.JPEG",
  "images/London/IMG_1247.JPEG",
  "images/London/IMG_1252.JPG",
  "images/London/IMG_1256.JPG",
  "images/London/IMG_1257.JPG",
  "images/London/IMG_1260.JPG",
  "images/London/IMG_1521.JPEG",
  "images/London/IMG_1525.JPEG",
  "images/London/IMG_2220.JPEG",
  "images/London/IMG_2229.JPEG",
  "images/London/IMG_2233.JPEG",
  "images/London/lp_image.JPEG"
]
 },
  { title: "Markham", lat: 43.8561, lng: -79.3370, images: [
  "images/Markham/IMG_0914.JPEG",
  "images/Markham/IMG_1099.JPG",
  "images/Markham/IMG_1100.JPG",
  "images/Markham/IMG_1311.JPG",
  "images/Markham/IMG_2359.JPEG",
  "images/Markham/IMG_2362.JPEG",
  "images/Markham/IMG_2386.JPEG",
  "images/Markham/IMG_2430.JPEG",
  "images/Markham/IMG_2433.JPEG",
  "images/Markham/IMG_2436.JPEG",
  "images/Markham/IMG_2939.JPEG"
]
 },
  { title: "Miami", lat: 25.7617, lng: -80.1918, images: [
  "images/Miami/1.jpg",
  "images/Miami/IMG_0781.JPEG",
  "images/Miami/IMG_1021.JPEG",
  "images/Miami/IMG_1041.JPEG",
  "images/Miami/IMG_6494.JPEG",
  "images/Miami/IMG_6495.JPEG",
  "images/Miami/IMG_6501.JPEG",
  "images/Miami/IMG_6614.JPEG",
  "images/Miami/IMG_6629.JPEG"
]
 },
  { title: "Montreal", lat: 45.5019, lng: -73.5674, images: [
  "images/Montreal/IMG_2834.JPEG",
  "images/Montreal/IMG_2836.JPEG",
  "images/Montreal/IMG_2838.JPEG",
  "images/Montreal/IMG_2841.JPEG",
  "images/Montreal/IMG_2843.JPEG",
  "images/Montreal/IMG_2844.JPEG",
  "images/Montreal/IMG_2846.JPEG",
  "images/Montreal/IMG_2852.JPEG",
  "images/Montreal/IMG_2854.JPEG",
  "images/Montreal/IMG_2856.JPEG"
]
},
  { title: "North York", lat: 43.7615, lng: -79.4111, images: [
  "images/NorthYork/1.JPEG",
  "images/NorthYork/IMG_1475.JPEG",
  "images/NorthYork/IMG_1481.JPG"
]
 },
  { title: "Richmond Hill", lat: 43.8828, lng: -79.4403, images: [
  "images/RichmondHill/IMG_1093.JPEG",
  "images/RichmondHill/IMG_1094.JPEG",
  "images/RichmondHill/IMG_1289.JPEG",
  "images/RichmondHill/IMG_1292.JPEG",
  "images/RichmondHill/IMG_1518.JPEG",
  "images/RichmondHill/IMG_2408.JPG"
]
 },
  { title: "Schomberg", lat: 44.0042, lng: -79.6842, images: [
  "images/Schomberg/IMG_1550.JPG",
  "images/Schomberg/IMG_1566.JPG"
]
 },
  { title: "Toronto Island", lat: 43.6205, lng: -79.3781, images: [
  "images/TorontoIsland/IMG_0033.JPEG",
  "images/TorontoIsland/IMG_0036.JPEG",
  "images/TorontoIsland/IMG_0054.JPEG",
  "images/TorontoIsland/IMG_0055.JPEG"
]
 },
  { title: "LA (Future)", lat: 34.0522, lng: -118.2437, images: [], message: "To be written..." }
];


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, // Default zoom before fitBounds
  });

  const bounds = new google.maps.LatLngBounds();

  locations.forEach((loc) => {
    const position = { lat: loc.lat, lng: loc.lng };
    const marker = new google.maps.Marker({
      position,
      map,
      title: loc.title
    });

    bounds.extend(position);

    marker.addListener("click", () => {
      openSlideshow(loc);
    });
  });

  map.fitBounds(bounds);
}

function openSlideshow(loc) {
  currentImages = loc.images || [];
  currentImageIndex = 0;
  document.getElementById("modal-title").textContent = loc.title;
  updateSlideshowImage();
  document.getElementById("modal").classList.remove("hidden");
}

function updateSlideshowImage() {
  const img = document.getElementById("slideshow-image");
  if (currentImages.length > 0) {
    img.src = currentImages[currentImageIndex];
  } else {
    img.src = "";
  }
}

function changeSlide(direction) {
  if (currentImages.length === 0) return;
  currentImageIndex = (currentImageIndex + direction + currentImages.length) % currentImages.length;
  updateSlideshowImage();
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close-button").addEventListener("click", closeModal);
  document.getElementById("prev").addEventListener("click", () => changeSlide(-1));
  document.getElementById("next").addEventListener("click", () => changeSlide(1));
});


