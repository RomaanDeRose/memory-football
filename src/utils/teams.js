const TEAMS = [
  {
    id: 1,
    name: "Boca Juniors",
    city: "La Boca, Buenos Aires",
    founded: 1905,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Boca_escudo.png",
  },
  {
    id: 2,
    name: "River Plate",
    city: "Núñez, Buenos Aires",
    founded: 1901,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_River_Plate.png",
  },
  {
    id: 3,
    name: "Independiente",
    city: "Avellaneda, Buenos Aires",
    founded: 1905,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Escudo_del_Club_Atl%C3%A9tico_Independiente.svg/1945px-Escudo_del_Club_Atl%C3%A9tico_Independiente.svg.png",
  },
  {
    id: 4,
    name: "Racing Club",
    city: "Avellaneda, Buenos Aires",
    founded: 1903,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Escudo_de_Racing_Club_%282014%29.svg/1200px-Escudo_de_Racing_Club_%282014%29.svg.png",
  },
  {
    id: 5,
    name: "San Lorenzo",
    city: "Boedo, Buenos Aires",
    founded: 1908,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Escudo_del_Club_Atl%C3%A9tico_San_Lorenzo_de_Almagro.png",
  },
  {
    id: 6,
    name: "Vélez Sarsfield",
    city: "Liniers, Buenos Aires",
    founded: 1910,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Escudo_V%C3%A9lez_Sarsfield.png",
  },
  {
    id: 7,
    name: "Estudiantes de La Plata",
    city: "La Plata, Buenos Aires",
    founded: 1905,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Escudo_de_Estudiantes_de_La_Plata.svg/1246px-Escudo_de_Estudiantes_de_La_Plata.svg.png",
  },
  {
    id: 8,
    name: "Newell's Old Boys",
    city: "Rosario, Santa Fe",
    founded: 1903,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Escudo_del_Club_Atl%C3%A9tico_Newell%27s_Old_Boys_de_Rosario.svg/1665px-Escudo_del_Club_Atl%C3%A9tico_Newell%27s_Old_Boys_de_Rosario.svg.png",
  },
  {
    id: 9,
    name: "Rosario Central",
    city: "Rosario, Santa Fe",
    founded: 1889,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2024/06/RC-escudo.png",
  },
  {
    id: 10,
    name: "Gimnasia y Esgrima de La Plata",
    city: "La Plata, Buenos Aires",
    founded: 1887,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2024/06/GIM-escudo.png",
  },
  {
    id: 11,
    name: "Talleres",
    city: "Ciudad de Córdoba, Córdoba",
    founded: 1913,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2024/06/TAL-escudo.png",
  },
  {
    id: 12,
    name: "Belgrano",
    city: "Alberdi, Ciudad de Córdoba",
    founded: 1905,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Escudo_Oficial_del_Club_Atl%C3%A9tico_Belgrano.png",
  },
  {
    id: 13,
    name: "Instituto",
    city: "Alta Córdoba, Ciudad de Córdoba",
    founded: 1918,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Escudo_Instituto_Atletico_Central_Cordoba.png",
  },
  {
    id: 14,
    name: "Argentinos Juniors",
    city: "La Paternal, Ciudad Autónoma de Buenos Aires",
    founded: 1904,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Escudo_de_la_Asociaci%C3%B3n_Atl%C3%A9tica_Argentinos_Juniors.svg/2045px-Escudo_de_la_Asociaci%C3%B3n_Atl%C3%A9tica_Argentinos_Juniors.svg.png",
  },
  {
    id: 15,
    name: "Tigre",
    city: "Tigre, Buenos Aires",
    founded: 1902,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2024/06/TIG-escudo.png",
  },
  {
    id: 16,
    name: "Platense",
    city: "Vicente López, Ciudad Autónoma de Buenos Aires",
    founded: 1905,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/Escudo_platense.png",
  },
  {
    id: 17,
    name: "Barracas Central",
    city: "Barracas, Buenos Aires",
    founded: 1904,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Barracas_central_logo.svg/1200px-Barracas_central_logo.svg.png",
  },
  {
    id: 18,
    name: "Huracán",
    city: "Parque Patricios, Ciudad Autónoma de Buenos Aires",
    founded: 1908,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2024/06/HUR-escudo.png",
  },
  {
    id: 19,
    name: "Lanús",
    city: " Lanús, Buenos Aires",
    founded: 1915,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Escudo_de_Lan%C3%BAs_2025.png",
  },
  {
    id: 20,
    name: "Banfield",
    city: "Banfield, Buenos Aires",
    founded: 1896,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/42/Escudo_de_Banfield.png",
  },
  {
    id: 21,
    name: "Defensa y Justicia",
    city: "Florencio Varela, Buenos Aires",
    founded: 1935,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Escudo_defensa_y_justicia.png",
  },
  {
    id: 22,
    name: "Unión",
    city: "Ciudad de Santa Fe, Santa Fe",
    founded: 1907,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Union_de_Santa_Fe.png",
  },
  {
    id: 23,
    name: "Colón",
    city: "Rivera, Buenos Aires",
    founded: 1905,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Escudo_del_Club_Atl%C3%A9tico_Col%C3%B3n.png",
  },
  {
    id: 24,
    name: "Ferro Carril Oeste",
    city: "Caballito, Ciudad Autónoma de Buenos Aires",
    founded: 1904,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Escudo_del_Club_Ferro_Carril_Oeste.svg/2048px-Escudo_del_Club_Ferro_Carril_Oeste.svg.png",
  },
  {
    id: 25,
    name: "Godoy Cruz",
    city: "Godoy Cruz, Mendoza",
    founded: 1921,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Escudo_del_Club_Deportivo_Godoy_Cruz_Antonio_Tomba.svg/2048px-Escudo_del_Club_Deportivo_Godoy_Cruz_Antonio_Tomba.svg.png",
  },
  {
    id: 26,
    name: "San Martín de San Juan",
    city: "Ciudad de San Juan, San Juan",
    founded: 1907,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Escudo_de_San_Martin_de_San_Juan.svg/1200px-Escudo_de_San_Martin_de_San_Juan.svg.png",
  },
  {
    id: 27,
    name: "Atlético Tucumán",
    city: "San Miguel de Tucumán, Tucumán",
    founded: 1902,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Escudo_del_Club_Atletico_Tucuman.svg/1746px-Escudo_del_Club_Atletico_Tucuman.svg.png",
  },
  {
    id: 28,
    name: "San Martín de Tucumán",
    city: "San Miguel de Tucumán, Tucumán",
    founded: 1909,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/63/San_martin_tucuman.png",
  },
  {
    id: 29,
    name: "Independiente Rivadavia",
    city: "Parque General San Martín, Mendoza",
    founded: 1913,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Escudo_del_Club_Independiente_Rivadavia.svg/1017px-Escudo_del_Club_Independiente_Rivadavia.svg.png",
  },
  {
    id: 30,
    name: "Sarmiento",
    city: "Junín, Buenos Aires",
    founded: 1911,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2024/06/Escudo_del_Club_Atletico_Sarmiento_de_Junin.svg-1024x1005.png",
  },
  {
    id: 31,
    name: "Deportivo Riestra",
    city: "Villa Soldati, Ciudad Autónoma de Buenos Aires",
    founded: 1931,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Escudo_del_Club_Deportivo_Riestra.svg/1200px-Escudo_del_Club_Deportivo_Riestra.svg.png",
  },
  {
    id: 32,
    name: "Aldosivi",
    city: "Mar del Plata, Buenos Aires",
    founded: 1913,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2025/01/ALD-Escudo.png",
  },
  {
    id: 33,
    name: "Central Córdoba",
    city: "Ciudad de Santiago del Estero, Santiago del Estero",
    founded: 1919,
    image:
      "https://www.ligaprofesional.ar/wp-content/uploads/2025/01/Central-Cordoba-Escudo-2025.png",
  },
];

export { TEAMS };
