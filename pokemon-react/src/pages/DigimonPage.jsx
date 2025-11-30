import { useEffect, useState } from "react";

function DigimonPage() {
  const [digimons, setDigimons] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  // Función para obtener 10 Digimon aleatorios
  function getRandomDigimons(list, count = 10) {
    const result = [];
    const used = new Set();

    while (result.length < count) {
      const index = Math.floor(Math.random() * list.length);
      if (!used.has(index)) {
        used.add(index);
        result.push(list[index]);
      }
    }

    return result;
  }

  useEffect(() => {
    async function loadDigimon() {
      try {
        setCargando(true);
        setError(false);

        const res = await fetch(
          "https://digimon-api.vercel.app/api/digimon"
        );

        if (!res.ok) throw new Error("Error en la API de Digimon");

        const data = await res.json();
        const randomTen = getRandomDigimons(data, 10);

        setDigimons(randomTen);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setCargando(false);
      }
    }

    loadDigimon();
  }, []);

  if (cargando) return <p className="message">Cargando Digimon...</p>;
  if (error)
    return (
      <div className="error-container">
        <p>Error cargando Digimon...</p>
        <img src="/404.png" alt="error" className="error-image" />
      </div>
    );

  return (
    <div>
      <h2 className="page-title">Digimon Aleatorios</h2>

      <div className="cards-grid">
        {digimons.map((digi) => (
          <div key={digi.name} className="card">
            <img
              src={digi.img}
              alt={digi.name}
              className="card-image"
            />
            <h3 className="card-title">{digi.name}</h3>
            <p className="card-text">Nivel: {digi.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DigimonPage;
