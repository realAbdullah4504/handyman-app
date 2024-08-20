import Head from 'next/head';

const MudanzaBarataCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una mudanza barata? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a una mudanza barata y cómo planificar tu presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mudanza-barata`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una mudanza barata?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Básico: 300€ - 800€</p>
            <p>Para una mudanza básica de un apartamento pequeño o una habitación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo Medio: 800€ - 1500€</p>
            <p>Para mudanzas de apartamentos medianos o casas pequeñas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Distancia y Ubicación.</li>
          <li>Tamaño del Hogar y Volumen de Objetos.</li>
          <li>Embalaje y Servicios Adicionales.</li>
          <li>Seguro de Mudanza y Temporada del Año.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Mudanza Barata</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo Básico</strong>: 300€ - 800€, para mudanzas pequeñas y locales.
          </li>
          <li>
            <strong>Costo Medio</strong>: 800€ - 1500€, para apartamentos medianos o casas pequeñas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Ahorrar en tu Mudanza</h2>
        <p>1. <strong>Planifica con Anticipación</strong>: Reserva servicios con tiempo para obtener mejores tarifas.</p>
        <p>2. <strong>Empaca Eficientemente</strong>: Organiza y etiqueta tus pertenencias para minimizar el tiempo de carga.</p>
        <p>3. <strong>Comparación de Precios</strong>: Obtén cotizaciones de varias empresas de mudanzas para encontrar la mejor oferta.</p>
        <p>4. <strong>Servicios Adicionales</strong>: Considera hacer tú mismo el embalaje y desembalaje para reducir costos.</p>
      </section>

      <section>
        <p className="text-lg">
          Planea tu mudanza barata con anticipación y asegúrate de seleccionar opciones que se ajusten a tu presupuesto y necesidades específicas.
        </p>
      </section>
    </div>
  );
};

export default MudanzaBarataCost;
