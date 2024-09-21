// Datos simulados de la API para los municipios de El Progreso
const datosMunicipios = {
    "Guastatoya": {
        hombres: 5000,
        mujeres: 5300,
        edad_014: 1500,
        edad_65: 600,
        edad_1564: 8200,
        urbana: 7200,
        rural: 3100,
        maya: 500,
        garifuna: 100,
        xinka: 200,
        afro: 50,
        ladino: 9400,
        extranjero: 50,
        coords: [14.853, -90.064]
    },
    "Morazán": {
        hombres: 3000,
        mujeres: 3300,
        edad_014: 900,
        edad_65: 300,
        edad_1564: 4500,
        urbana: 4200,
        rural: 2100,
        maya: 300,
        garifuna: 50,
        xinka: 150,
        afro: 30,
        ladino: 4700,
        extranjero: 20,
        coords: [14.891, -89.903]
    },
    "San Agustín Acasaguastlán": {
        hombres: 2500,
        mujeres: 2700,
        edad_014: 800,
        edad_65: 250,
        edad_1564: 3700,
        urbana: 3200,
        rural: 2000,
        maya: 150,
        garifuna: 20,
        xinka: 100,
        afro: 10,
        ladino: 4900,
        extranjero: 20,
        coords: [14.936, -89.904]
    },
    "San Cristóbal Acasaguastlán": {
        hombres: 2700,
        mujeres: 2900,
        edad_014: 850,
        edad_65: 280,
        edad_1564: 4200,
        urbana: 3500,
        rural: 2100,
        maya: 180,
        garifuna: 30,
        xinka: 120,
        afro: 15,
        ladino: 5200,
        extranjero: 25,
        coords: [14.951, -89.920]
    },
    "El Jícaro": {
        hombres: 2300,
        mujeres: 2400,
        edad_014: 700,
        edad_65: 230,
        edad_1564: 3800,
        urbana: 3300,
        rural: 1400,
        maya: 130,
        garifuna: 25,
        xinka: 110,
        afro: 20,
        ladino: 4600,
        extranjero: 15,
        coords: [14.916, -90.020]
    },
    "Sansare": {
        hombres: 3200,
        mujeres: 3400,
        edad_014: 1000,
        edad_65: 340,
        edad_1564: 5100,
        urbana: 4300,
        rural: 2300,
        maya: 220,
        garifuna: 40,
        xinka: 160,
        afro: 25,
        ladino: 6300,
        extranjero: 35,
        coords: [14.712, -90.005]
    },
    "Sanarate": {
        hombres: 5400,
        mujeres: 5600,
        edad_014: 1800,
        edad_65: 520,
        edad_1564: 8700,
        urbana: 7100,
        rural: 3900,
        maya: 350,
        garifuna: 60,
        xinka: 200,
        afro: 40,
        ladino: 10600,
        extranjero: 60,
        coords: [14.823, -90.192]
    },
    "San Antonio La Paz": {
        hombres: 2100,
        mujeres: 2200,
        edad_014: 600,
        edad_65: 200,
        edad_1564: 3500,
        urbana: 3100,
        rural: 1200,
        maya: 120,
        garifuna: 10,
        xinka: 90,
        afro: 5,
        ladino: 4200,
        extranjero: 10,
        coords: [14.710, -90.185]
    }
};

// Inicializar el mapa usando Leaflet
const map = L.map('map').setView([14.853, -90.064], 8); // Coordenadas de El Progreso
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ocultar la sección de datos inicialmente
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('municipio-data').style.display = 'none';
});

function mostrarDatosMunicipio() {
    const municipio = document.getElementById('municipios').value;

    if (municipio && datosMunicipios[municipio]) {
        // Mostrar la sección de datos del municipio
        document.getElementById('municipio-data').style.display = 'block';
        document.getElementById('nombre-municipio').textContent = municipio;

        // Actualizar datos de población por sexo
        document.getElementById('hombres-municipio').textContent = datosMunicipios[municipio].hombres;
        document.getElementById('mujeres-municipio').textContent = datosMunicipios[municipio].mujeres;

        // Actualizar datos de población por grupos de edad
        document.getElementById('edad_014_municipio').textContent = datosMunicipios[municipio].edad_014;
        document.getElementById('edad_65_municipio').textContent = datosMunicipios[municipio].edad_65;
        document.getElementById('edad_1564_municipio').textContent = datosMunicipios[municipio].edad_1564;

        // Actualizar datos de población por área
        document.getElementById('urbana-municipio').textContent = datosMunicipios[municipio].urbana;
        document.getElementById('rural-municipio').textContent = datosMunicipios[municipio].rural;

        // Actualizar datos de población por pueblos
        document.getElementById('maya-municipio').textContent = datosMunicipios[municipio].maya;
        document.getElementById('garifuna-municipio').textContent = datosMunicipios[municipio].garifuna;
        document.getElementById('xinka-municipio').textContent = datosMunicipios[municipio].xinka;
        document.getElementById('afro-municipio').textContent = datosMunicipios[municipio].afro;
        document.getElementById('ladino-municipio').textContent = datosMunicipios[municipio].ladino;
        document.getElementById('extranjero-municipio').textContent = datosMunicipios[municipio].extranjero;

        // Mover el mapa a la ubicación del municipio
        const coords = datosMunicipios[municipio].coords;
        map.setView(coords, 8); // Ajustar el nivel de zoom
        L.marker(coords).addTo(map)
            .bindPopup(`Municipio: ${municipio}`)
            .openPopup();
    } else {
        document.getElementById('municipio-data').style.display = 'none';
        alert("Municipio no encontrado. Por favor ingrese un nombre válido.");
    }
}
