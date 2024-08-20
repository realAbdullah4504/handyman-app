import Head from 'next/head';

const PlantarJardinCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta plantar un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la plantación de un jardín y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-plantar-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta plantar un jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Jardín Pequeño: 300€ - 1,000€</p>
            <p>Incluye plantas básicas, césped y preparación del terreno.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Jardín Mediano: 1,000€ - 3,000€</p>
            <p>Incluye una variedad de plantas, arbustos, césped y preparación del terreno.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Jardín Grande: 3,000€ - 10,000€</p>
            <p>Incluye árboles, arbustos, césped, sistema de riego y diseño paisajístico.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del jardín.</li>
          <li>Tipo y cantidad de plantas.</li>
          <li>Preparación del terreno.</li>
          <li>Instalación de sistemas de riego.</li>
          <li>Diseño paisajístico y mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Plantar un Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Jardín Pequeño</strong>: 300€ - 1,000€, incluye plantas básicas, césped y preparación del terreno.
          </li>
          <li>
            <strong>Jardín Mediano</strong>: 1,000€ - 3,000€, incluye una variedad de plantas, arbustos, césped y preparación del terreno.
          </li>
          <li>
            <strong>Jardín Grande</strong>: 3,000€ - 10,000€, incluye árboles, arbustos, césped, sistema de riego y diseño paisajístico.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Plantar un Jardín</h2>
        <p>1. <strong>Selección de Plantas</strong>: Elige plantas adecuadas para el clima y suelo de tu área.</p>
        <p>2. <strong>Planificación del Diseño</strong>: Planifica el diseño del jardín para maximizar el espacio y la estética.</p>
        <p>3. <strong>Preparación del Terreno</strong>: Asegúrate de preparar el terreno adecuadamente antes de plantar.</p>
        <p>4. <strong>Sistema de Riego</strong>: Considera la instalación de un sistema de riego para mantener el jardín saludable.</p>
        <p>5. <strong>Presupuesto Realista</strong>: Define un presupuesto claro y añade un margen para imprevistos.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para plantar tu jardín según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para crear un espacio verde hermoso y sostenible.
        </p>
      </section>
    </div>
  );
};

export default PlantarJardinCost;