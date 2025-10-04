export interface Product {
  id: string;
  name: string;
  price: number | null | "N/A";
  category: string;
  description: string;
  images: string[];
  specifications: Record<string, any> | "N/A";
  variations?: {
    color?: string[];
    size?: string[];
    model?: string[];
  };
  inStock: boolean | "N/A";
  featured: boolean | "N/A";
  brand: string | "N/A";
}

export const categories = [
  "Motores Corredizos",
  "Motores Levadizos",
  "Motores Pivotantes",
  "Motor Cortina", // Se mantiene y agrupa con los demás motores
  "Controles Remotos",
  "Repuestos",
  "Accesorios",
  "Sistemas Completos",
  "Placa Electrónica",
  "Barreras Vehiculares",
  "Cerraduras",
  "Cremalleras"
];

export const mockProducts: Product[] = [
  // Productos en la categoría Motores Corredizos
  {
    id: "1",
    name: "Motor para portón corredizo PPA DZ Rio",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Motor potente y silencioso, ideal para portones de hasta 400 kg. Incluye 2 controles remotos y 3 metros de cremallera.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_788269-MLU75999853623_042024-O.webp"],
    specifications: {
      "Potencia": "1/4 HP",
      "Peso máximo": "400 kg",
      "Velocidad": "12 m/min",
    },
    variations: undefined,
    inStock: true,
    featured: true,
    brand: "PPA",
  },
  {
    id: "9",
    name: "Equipo Motic Compac 500",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo para portón corredizo de uso domiciliar para portones de hasta 500 kg. Kit compuesto por motor, placa electrónica, dos controles remotos y 3 metros de cremallera de hierro.",
    images: ["https://www.seguridadtotal.com.ar/uploads/media/2029/2029-2029-compact-smart-500-5775.png"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Peso máximo del portón": "500 kg",
      "Desplazamiento": "12 m/min",
      "Cremallera": "hierro",
      "Placa electrónica": "Q50",
      "Frecuencia": "433",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Motic",
  },
  {
    id: "10",
    name: "Equipo Motic Compac 600",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo para portón corredizo de uso domiciliar para portones de hasta 600 kg. Kit compuesto por motor, placa electrónica, dos controles remotos y 3 metros de cremallera de hierro.",
    images: ["https://motic.com.ar/wp-content/uploads/2023/09/motor-compact-600-porton-corredizo.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Peso máximo del portón": "600 kg",
      "Desplazamiento": "12 m/min",
      "Cremallera": "hierro",
      "Placa electrónica": "Q50",
      "Frecuencia": "433",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Motic",
  },
  {
    id: "12",
    name: "Equipo Corredizo APC 500",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo para uso domiciliar en portones de hasta 500 kg. Kit compuesto por motor, 3.00 mts de cremallera, dos controles remotos y placa electrónica.",
    images: ["https://brimet.com.ar/wp-content/uploads/2023/04/apc-500-png-copia-e1681908476275.png"],
    specifications: {
      "Alimentación": "220V",
      "Consumo de corriente": "2 amper",
      "Velocidad de apertura": "10 m/min",
      "Peso máximo del portón": "500 kg",
      "Uso": "domiciliar",
      "RPM": "56",
      "Engranaje de salida": "Z14",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Vivaldi",
  },
  {
    id: "11",
    name: "Equipo Motic Compac 4000",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo industrial Compac 4000, soporta hasta 4000 kg. Motorreductor electromecánico en baño de aceite. Kit compuesto por motor, placa electrónica y dos controles remotos.",
    images: ["https://motic.com.ar/wp-content/uploads/2023/09/motor-compact-1200-porton-corredizo-300x300.webp"],
    specifications: {
      "Peso máximo del portón": "4000 kg",
      "Potencia": "1200 W",
      "Piñón": "Z16",
      "Velocidad": "15 m/min",
      "Tipo de motor": "monofásico",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Motic",
  },
  {
    id: "14",
    name: "Equipo Corredizo Vivaldi 2000",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo industrial para portones de hasta 2000 kg, disponible en versiones monofásica y trifásica. Incluye placa electrónica y dos controles remotos.",
    images: ["https://brimet.com.ar/wp-content/uploads/2023/04/apc-2000.jpg"],
    specifications: {
      "Uso": "industrial",
      "Peso máximo del portón": "2000 kg",
      "Versión monofásica": {
        "Alimentación": "220V",
        "Consumo": "7 amper",
        "Velocidad de apertura": "10 m/min",
        "RPM": "36",
        "Embrague": "mecánico",
        "Engranaje de salida": "Z22 acero",
      },
      "Versión trifásica": {
        "Alimentación": "380V",
        "Consumo": "1.5 amper",
        "Velocidad de apertura": "10 m/min",
        "RPM": "36",
        "Embrague": "mecánico",
        "Engranaje de salida": "Z22 acero",
      },
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Vivaldi",
  },
  {
    id: "16",
    name: "Equipo Corredizo Force 1600",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo de uso industrial, soporta hasta 1600 kg. Kit compuesto por motor, placa electrónica, dos controles remotos y 3.00 mts de cremallera. Uso intensivo.",
    images: ["https://d22fxaf9t8d39k.cloudfront.net/205df374cfff557d9a053fdae343e1451d67301314c874de11cca7c83ee1336d251113.jpg"],
    specifications: {
      "Uso": "industrial",
      "Peso máximo del portón": "1600 kg",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Apriclass",
  },
  {
    id: "13",
    name: "Equipo Corredizo Vivaldi 800",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo que soporta hasta 800 kg. Kit compuesto por motor, 3.00 mts de cremallera, placa electrónica y dos controles remotos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_721756-MLA80258360535_102024-O.webp"],
    specifications: {
      "Peso máximo del portón": "800 kg",
      "Uso": "domiciliar / semi industrial",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Vivaldi",
  },
  {
    id: "15",
    name: "Equipo Corredizo Force 800",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo semi industrial. Kit compuesto por motor, placa electrónica, dos controles remotos y 3.00 mts de cremallera.",
    images: ["https://dcdn-us.mitiendanube.com/stores/858/640/products/768977-mla27327933999_052018-o-2886fd09992eb13c9c15372733080153-1024-1024.jpg"],
    specifications: {
      "Uso": "semi industrial",
      "Peso máximo del portón": "800 kg",
      "Alimentación": "220V",
      "Tipo de motor": "monofásico",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Apriclass",
  },
  {
    id: "6",
    name: "Motor para portón corredizo Stark Home 400",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Este motor para portón corredizo domiciliar.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_779706-MLA86800653983_062025-O.webp"],
    specifications: "N/A",
    variations: undefined,
    inStock: "N/A",
    featured: true,
    brand: "Stark Home",
  },
  {
    id: "7",
    name: "Motor Corredizo Stark",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Este motor para portón corredizo domiciliar. Kit compuesto por motor 1/5 hp, dos controles remotos, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_765717-MLA76244438257_052024-O.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Control": "analógico con imanes",
      "Peso máximo del portón": "300 kg",
      "Ciclos / hora": "20",
      "Tiempo de cierre (3.00 mts)": "13 segundos",
      "Piñón de salida": "aluminio",
      "Base del motor": "aluminio",
      "Placa electrónica": "agility",
      "Accesorios": "kit de fijación",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Stark",
  },
  {
    id: "8",
    name: "Motor Corredizo Dz Stark Jet Flex",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Motor para portón corredizo domiciliar. Kit compuesto por motor 1/5 hp, dos controles remotos, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://www.grupoasa.com.ar/wp-content/uploads/2024/07/destacada.jpg"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Control": "analógico con imanes",
      "Peso máximo del portón": "300 kg",
      "Ciclos / hora": "20",
      "Tiempo de cierre (3.00 mts)": "13 segundos",
      "Piñón de salida": "aluminio",
      "Base del motor": "aluminio",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Stark",
  },
  {
    id: "17",
    name: "Motor Corredizo DZ Rio",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Kit compuesto por motor 1/4 hp, dos controles remotos, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://www.infinityseguridad.com.ar/wp-content/uploads/2020/08/motor3.png"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Control": "analógico con imanes",
      "Peso máximo del portón": "500 kg",
      "Ciclos / hora": "20",
      "Tiempo de cierre (3.00 mts)": "12 segundos",
      "Piñón de salida": "aluminio",
      "Base del motor": "aluminio",
      "Placa electrónica": "agility",
      "Accesorios": "kit de fijación",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "18",
    name: "Motor Corredizo DZ Rio (Jet Flex)",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Motor para portón corredizo domiciliar y portones pesados. Kit compuesto por motor 1/4 hp, dos controles remotos, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_800330-MLA41916857015_052020-O.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Control": "analógico con imanes",
      "Peso máximo del portón": "500 kg",
      "Ciclos / hora": "30",
      "Tiempo de cierre (3.00 mts)": "6 segundos",
      "Piñón de salida": "aluminio",
      "Base del motor": "aluminio",
      "Placa electrónica": "triflex",
      "Accesorios": "kit de fijación",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "20",
    name: "Motor Corredizo Steel Jet Flex",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo para portón corredizo domiciliar y portones pesados de hasta 800 kg. Kit compuesto por motor de 1/2 hp, placa electrónica triflex, dos controles remotos y 3.00 mts de cremallera reforzada.",
    images: ["https://www.seguridadtotal.com.ar/uploads/media/1675/thumbs/1675-1675-new-home-jet-flex-4736.jpg"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Control": "analógico con imanes",
      "Peso máximo del portón": "600 kg",
      "Ciclos / hora": "60",
      "Tiempo de cierre (3.00 mts)": "6 segundos",
      "Piñón de salida": "aluminio",
      "Base del motor": "aluminio",
      "Placa electrónica": "triflex",
      "Accesorios": "kit de fijación",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Steel",
  },
  {
    id: "21",
    name: "Equipo Industrial DZ BRUTALLE 2.0T",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Equipo de uso industrial que soporta hasta 2.000 kg de peso de portón.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRtoHJ8BfY3MSav9c0Fw5xRV7ViCq9IESDQ&s"],
    specifications: {
      "Peso máximo": "2000 kg",
      "Frecuencia": "100 ciclos",
      "Tipo de motor": "monofásico",
      "Final de carrera": "híbridos",
      "Accesorios": "kit de fijación",
      "Cremallera": "pvc industrial",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "22",
    name: "Equipo Industrial DZ BRUTALLE 3.0T",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Kit compuesto por motor, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://solutimp.cl/1813-home_default/motor-dz-brutalle-30t-jetflex-ppa.jpg"],
    specifications: {
      "Peso máximo": "3000 kg",
      "Tipo de motor": "monofásico",
      "Final de carrera": "híbridos",
      "Frecuencia": "100 ciclos",
      "Accesorios": "kit de fijación",
      "Cremallera": "pvc industrial",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "45",
    name: "Motor Corredizo Stark (Base Aluminio)",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Motor para portón corredizo domiciliar. Kit compuesto por motor 1/5hp, dos controles remotos, placa electrónica Agility y 3.00 mts de cremallera. Se distingue por tener base de motor en aluminio.",
    images: ["https://ppalatam.com/wp-content/uploads/2024/05/PPA-Dz-Stark-Legero-1123_01_1699363962200_E02249102.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Peso máximo del portón": "300 kg",
      "Ciclos / hora": "20",
      "Tiempo de cierre (3.00 mts)": "13 segundos",
      "Base del motor": "aluminio",
      "Placa electrónica": "agility",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Stark",
  },
  {
    id: "46",
    name: "Motor Corredizo DZ Stark Jet Flex (Alta Velocidad)",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Motor para portón corredizo domiciliar de alta velocidad (Jet Flex). Kit compuesto por motor 1/5 hp, dos controles remotos, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://dcdn-us.mitiendanube.com/stores/017/403/products/dz-stark-jeteflex-59d8fa5c8fb0ba3ecb17386215684362-480-0.jpg"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Peso máximo del portón": "300 kg",
      "Ciclos / hora": "20",
      "Tiempo de cierre (3.00 mts)": "13 segundos",
      "Piñón de salida": "aluminio",
      "Base del motor": "aluminio",
      "Placa electrónica": "triflex",
    },
    variations: undefined,
    inStock: "N/A",
    featured: true,
    brand: "Stark",
  },
  {
    id: "47",
    name: "Motor Corredizo Steel",
    price: "N/A",
    category: "Motores Corredizos", // ¡ACTUALIZADO!
    description: "Motor para portón corredizo domiciliar. Kit compuesto por motor 1/4 hp, dos controles remotos, placa electrónica y 3.00 mts de cremallera.",
    images: ["https://http2.mlstatic.com/D_Q_NP_649297-MLA44060337228_112020-O.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Potencia": "1/4 hp",
      "Peso máximo del portón": "500 kg (estimado)",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "Steel",
  },
  // Productos en la categoría Motores Levadizos
  {
    id: "23",
    name: "Equipo Levadizo Torsión (Agility)",
    price: "N/A",
    category: "Motores Levadizos", // ¡NUEVA CATEGORÍA!
    description: "Equipo para portones levadizos contrapesados de uso domiciliar. Kit compuesto por motor, lanza telescópica con buje, placa electrónica, dos controles remotos y base de fijación.",
    images: ["https://acdn-us.mitiendanube.com/stores/001/530/390/products/d_nq_np_2x_925518-mla49437944969_032022-f-89c71d93567727cd5717244309922867-480-0.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Final de carrera": "analógico con imán",
      "Ciclos": "60",
      "Potencia": "1/2 hp",
      "Corona interna": "bronce",
      "Tiempo de cierre": "12 segundos",
      "Placa": "agility",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "24",
    name: "Equipo Levadizo Torsión (Triflex)",
    price: "N/A",
    category: "Motores Levadizos", // ¡NUEVA CATEGORÍA!
    description: "Equipo para portones levadizos contrapesados de uso domiciliar. Kit compuesto por motor, lanza telescópica con buje, placa electrónica, dos controles remotos y base de fijación.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_738862-MLA41904830643_052020-O.webp"],
    specifications: {
      "Tipo de motor": "monofásico",
      "Final de carrera": "analógico con imán",
      "Ciclos": "60",
      "Potencia": "1/2 hp",
      "Corona interna": "bronce",
      "Tiempo de cierre": "6 segundos",
      "Placa": "triflex",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "43",
    name: "Equipo Levadizo APL",
    price: "N/A",
    category: "Motores Levadizos", // ¡NUEVA CATEGORÍA!
    description: "Equipo levadizo para portones contrapesados, disponible en versiones de 0.20 hp y 0.33 hp. Kit compuesto por motor, accionador telescópico, buje, placa electrónica y dos controles remotos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_980639-MLA81396765215_122024-O.webp"],
    specifications: {
      "Uso": "domiciliar",
      "Alimentación": "220V",
      "RPM": "1.5",
      "Versión 0.20 hp": {
        "Potencia": "0.20 hp"
      },
      "Versión 0.33 hp": {
        "Potencia": "0.33 hp",
        "Consumo": "2.5 A"
      },
      "Componentes": "corona de bronce, sinfín de acero, lubricación con grasa de litio"
    },
    variations: undefined,
    inStock: "N/A",
    featured: true,
    brand: "N/A"
  },
  // Productos en la categoría Motores Pivotantes
  {
    id: "25",
    name: "Equipo Pivotante Home Standar",
    price: "N/A",
    category: "Motores Pivotantes", // ¡NUEVA CATEGORÍA!
    description: "Kit para portón domiciliar pivotante doble, con hojas de hasta 1.5 mts c/u.",
    images: ["https://dcdn-us.mitiendanube.com/stores/002/064/209/products/6-a-pivo-home-std-doble1-84c4953f1ea3310f5c16464083397834-480-0.png"],
    specifications: "N/A",
    variations: undefined,
    inStock: "N/A",
    featured: true,
    brand: "N/A"
  },
  {
    id: "44",
    name: "Equipo Pivotante Doble APR",
    price: "N/A",
    category: "Motores Pivotantes", // ¡NUEVA CATEGORÍA!
    description: "Equipo para portones pivotantes dobles, de uso domiciliar o industrial. El kit incluye dos motores, placa electrónica, dos controles remotos, herrajes de fijación y llave de destrabe.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_918548-MLA88623553327_072025-O.webp"],
    specifications: {
      "Uso": "domiciliar / industrial",
      "Tamaño máximo de hoja": "3.5 m² (monofásico) / 7 m² (trifásico)",
      "Peso máximo del portón": "350 kg (monofásico) / 700 kg (trifásico)",
      "Versión monofásica": {
        "Alimentación": "220V",
        "Consumo": "2 A"
      },
      "Versión trifásica": {
        "Alimentación": "380V",
        "Consumo": "2.5 A"
      }
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "49",
    name: "Equipo Pivotante Domo",
    price: "N/A",
    category: "Motores Pivotantes", // ¡NUEVA CATEGORÍA!
    description: "Equipo pivotante doble para portones de dos hojas de hasta 2.00 mts c/u. Robusto, inyectado en aluminio. Kit completo con dos accionadores a sin fin, placa electrónica y dos controles remotos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_619593-MLA73037263602_112023-O.webp"],
    specifications: {
      "Tipo de portón": "Pivotante Doble",
      "Ancho máximo por hoja": "2.00 mts",
      "Potencia nominal": "2500 N",
      "Velocidad de apertura": "17 seg",
      "Recorrido de pistón": "300 mm",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A", // Se puede estimar Motic por el contexto
  },
 {
    id: "50",
    name: "Equipo Pivotante Maxi Domo (Industrial)",
    price: "N/A",
    category: "Motores para Portones",
    description: "Equipo de uso industrial o para portones grandes y pesados con alta frecuencia de uso. Ancho máximo por hoja de 5.00 mts. Disponible en kit simple (un motor) o doble (dos motores).",
    images: ["https://http2.mlstatic.com/D_NQ_NP_636245-MLA72964008770_112023-O.webp"],
    specifications: {
      "Uso": "Industrial / Pesado",
      "Ancho máximo por hoja": "5.00 mts",
      "Potencia nominal": "250 W",
      "Velocidad de apertura": "17 seg",
      "Recorrido del actuador": "460 mm",
      "Grado de protección": "IP 54",
    },
    variations: {
      model: ["Simple", "Doble"]
    },
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A", // Se puede estimar Motic por el contexto
  },
  // Productos en la categoría Motor Cortina
  {
    id: "40",
    name: "Motor Cortina Metálica",
    price: "N/A",
    category: "Motor Cortina", // Se mantiene
    description: "Motor PM 600, el más versátil para cortinas metálicas de hasta 420 kg. Incluye seguro anti-caída y elementos de montaje.",
    images: ["https://motic.com.ar/wp-content/uploads/2023/09/motor-pm600-cortinas-metalicas.webp"],
    specifications: {
      "Peso máximo": "420 kg",
      "Torque": "412 Nm",
      "Diámetro": "130/152 mm"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  // Productos en otras categorías (sin cambios)
  {
    id: "2",
    name: "Control remoto PPA ZAP",
    price: "N/A",
    category: "Controles Remotos",
    description: "Control remoto de dos canales con tecnología de código variable, compatible con toda la línea de motores PPA.",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWvVGXpczYFcGnQYr52jOUWTBdusmu_bHAA&s"],
    specifications: {
      "Canales": "2",
      "Frecuencia": "433 MHz",
      "Material": "Plástico resistente",
    },
    variations: {
      color: ["Negro"],
    },
    inStock: true,
    featured: false,
    brand: "PPA",
  },
  {
    id: "39",
    name: "Controles Copiadores",
    price: "N/A",
    category: "Controles Remotos",
    description: "Controles copiadores con frecuencia de 433.",
    images: ["/control.png"],
    specifications: {
      "Frecuencia": "433"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "3",
    name: "Engranaje de repuesto PPA",
    price: "N/A",
    category: "Repuestos",
    description: "Engranaje interno de repuesto para motores de portones PPA. Fabricado con materiales de alta resistencia para una mayor durabilidad.",
    images: ["https://dcdn-us.mitiendanube.com/stores/002/064/209/products/screenshot_20240331-202814-50568244019db8e12417119290160598-480-0.png"],
    specifications: {
      "Compatibilidad": "Motores PPA 1/4 HP",
      "Material": "Polímero de alta densidad",
    },
    variations: undefined,
    inStock: true,
    featured: false,
    brand: "PPA",
  },
  {
    id: "29",
    name: "Corona Interna Reforzada",
    price: "N/A",
    category: "Repuestos",
    description: "Corona interna reforzada con 23 dientes.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_698668-MLA31610076029_072019-O.webp"],
    specifications: {
      "Dientes": "23"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "30",
    name: "Eje Completo",
    price: "N/A",
    category: "Repuestos",
    description: "Eje completo para motor DZ Rio 1/4.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_618180-MLA75676832400_042024-O.webp"],
    specifications: {
      "Compatibilidad": "Motor DZ Rio 1/4"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "31",
    name: "Final de Carrera",
    price: "N/A",
    category: "Repuestos",
    description: "Final de carrera para equipos analógicos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_686770-MLA80042604289_102024-O.webp"],
    specifications: {
      "Compatibilidad": "Equipos analógicos"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "32",
    name: "Imán con Soporte",
    price: "N/A",
    category: "Repuestos",
    description: "Imán con soporte para equipos analógicos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_755576-MLA52232194042_112022-O.webp"],
    specifications: {
      "Compatibilidad": "Equipos analógicos"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "33",
    name: "Destrabe Completo",
    price: "N/A",
    category: "Repuestos",
    description: "Palanca de destrabe completa para motores corredizos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_640314-MLA74937646300_032024-O.webp"],
    specifications: {
      "Compatibilidad": "Motores corredizos"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "34",
    name: "Bujes",
    price: "N/A",
    category: "Repuestos",
    description: "Buje interno para motor corredizo.",
    images: ["https://http2.mlstatic.com/D_Q_NP_2X_868710-MLA71588594287_092023-T.webp"],
    specifications: {
      "Compatibilidad": "Motor corredizo"
    },
    variations: undefined,
    inStock: "N/A",
    featured: false,
    brand: "N/A"
  },
  {
    id: "35",
    name: "Electro Cerradura (12V)",
    price: "N/A",
    category: "Repuestos",
    description: "Electro cerradura de 12 voltios.",
    images: ["https://siccba.com.ar/wp-content/uploads/2020/07/M-ELEC-SIC2.01-1.webp"],
    specifications: {
      "Voltaje": "12V"
    },
    variations: undefined,
    inStock: "N/A",
    featured: false,
    brand: "N/A"
  },
  {
    id: "36",
    name: "Electro Cerradura (220V)",
    price: "N/A",
    category: "Repuestos",
    description: "Electro cerradura de 220 voltios.",
    images: ["https://http2.mlstatic.com/D_Q_NP_951595-MLA79966009275_102024-O.webp"],
    specifications: {
      "Voltaje": "220V"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "37",
    name: "Modulo Wi-Fi",
    price: "N/A",
    category: "Repuestos",
    description: "Modulo Wi-Fi para control de equipos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_619920-MLB47145587712_082021-O.webp"],
    specifications: "N/A",
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "48",
    name: "Eje Simple",
    price: "N/A",
    category: "Repuestos",
    description: "Eje simple de repuesto para motor DZ Rio 1/4.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_685653-MLA40041549614_122019-O.webp"],
    specifications: {
      "Compatibilidad": "Motor DZ Rio 1/4",
      "Tipo": "Simple",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A",
  },
   {
  id: "4",
  name: "Semáforo Led para Garage con Sonido",
  price: "N/A",
  category: "Accesorios",
  description: "Semáforo avanzado con **tecnología LED** y **sonido de alerta**, diseñado para un control de tráfico eficiente y seguro en diversos entornos. Incluye **timer** y **fotocélula** para una instalación y funcionamiento automáticos. Su bajo consumo y diseño compacto lo hacen ideal para una amplia gama de aplicaciones.",
  images: [
    "/images/semaforo.jpg"
  ],
  specifications: {
    Voltaje: "220V (Alimentación del sistema), Fuente 12V (Máximo 25 metros)",
    TipoDeLuz: "LED (120° de apertura lumínica)",
    Consumo: "Menor a 1W",
    Impermeabilidad: "Pintura poliuretánica resistente al agua (No se especifica IP, se usa la descripción)",
    Medidas: "14cm alto x 11cm ancho x 12cm de profundidad",
    Instalacion: "Diseño adaptado para montaje en caja miñon estándar",
    Conexion: "Fácil conexión mediante 4 cables / 3C"
  },
  variations: undefined,
  inStock: true,
  featured: true,
  brand: "N/A",
},
  {
    id: "38",
    name: "Cremallera PVC POP",
    price: "N/A",
    category: "Cremalleras",
    description: "Cremalleras disponibles en PVC, aluminio y hierro.",
    images: ["https://hst-portones.com.ar/wp-content/uploads/2016/11/Cremalllera-3-juntas-1.jpg"],
    specifications: {
      "Material": "PVC, Aluminio, Hierro"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "43",
    name: "Cremallera de Aluminio",
    price: "N/A",
    category: "Cremalleras",
    description: "cremallera de aluminio para portones corredizos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_982177-MLA93192621327_092025-O.webp"],
    specifications: {
      "Material": "Aluminio",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "44",
    name: "Cremallera de Hierro",
    price: "N/A",
    category: "Cremalleras",
    description: "cremallera de hierro para portones corredizos.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_848477-MLA93451407983_092025-O.webp"],
    specifications: {
      "Material": "Hierro",
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "5",
    name: "Kit completo portón batiente doble hoja",
    price: "N/A",
    category: "Sistemas Completos",
    description: "Kit completo para automatizar portones batientes de dos hojas. Incluye motor, central de comando y sensores de seguridad.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_960225-MLA48717167891_122021-O.webp"],
    specifications: {
      "Tipo de portón": "Batiente doble",
      "Largo máximo hoja": "2.5 m",
      "Peso máximo hoja": "250 kg",
    },
    variations: undefined,
    inStock: true,
    featured: false,
    brand: "PPA",
  },
  {
    id: "26",
    name: "Placa Electrónica Agility",
    price: "N/A",
    category: "Placa Electrónica",
    description: "Placa electrónica monofásica para portones corredizos y levadizos.",
    images: ["https://http2.mlstatic.com/D_696573-MLB92317231729_092025-C.jpg"],
    specifications: {
      "Frecuencia": "433",
      "Final de carrera": "analógico / digital"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "27",
    name: "Placa Electrónica Duppla",
    price: "N/A",
    category: "Placa Electrónica",
    description: "Placa electrónica monofásica para portones pivotantes dobles.",
    images: ["https://www.seguridadtotal.com.ar/uploads/media/920/920-920-central-dupla-ramp-4170.png"],
    specifications: {
      "Frecuencia": "433",
      "Final de carrera": "analógico"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "28",
    name: "Placa Electrónica Triflex",
    price: "N/A",
    category: "Placa Electrónica",
    description: "Placa electrónica monofásica para motores de alta velocidad.",
    images: ["https://www.seguridadtotal.com.ar/uploads/media/918/918-ppa-triflex-213.jpg"],
    specifications: {
      "Frecuencia": "433"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "41",
    name: "Barrera Vehicular",
    price: "N/A",
    category: "Barreras Vehiculares",
    description: "Barrera vehicular con brazo lineal y gabinete con pintura epoxi.",
    images: ["https://www.grupoasa.com.ar/wp-content/uploads/2020/11/BARRIER-JETFLEX-BRUSHLESs9.png"],
    specifications: {
      "Motor": "1/2 hp",
      "Velocidad de cierre": "1.5 segundos / minuto",
      "Velocidad de apertura": "1.5 segundos / minuto",
      "Tipo de motor": "monofásico",
      "Alimentación": "220V",
      "Ciclos por hora": "180"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
  {
    id: "42",
    name: "Cerradura Inteligente",
    price: "N/A",
    category: "Cerraduras",
    description: "Cerradura inteligente con múltiples opciones de apertura y registro de eventos. Acceso a través de huella, código, tarjeta y llave.",
    images: ["https://http2.mlstatic.com/D_NQ_NP_793536-MLA80529064268_112024-O.webp"],
    specifications: {
      "Métodos de acceso": "huella, código, tarjeta, llave",
      "Funciones": "registro de eventos, historial de aperturas, gestión de usuarios"
    },
    variations: undefined,
    inStock: "N/A",
    featured: "N/A",
    brand: "N/A"
  },
];

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((product) => product.id === id);
}

export function getRelatedProducts(productId: string, category: string): Product[] {
  return mockProducts.filter((product) => product.id !== productId && product.category === category).slice(0, 4);
}

export function formatPrice(price: number | null | "N/A"): string {
  if (price === null || price === "N/A") {
    return "Consultar";
  }
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
}