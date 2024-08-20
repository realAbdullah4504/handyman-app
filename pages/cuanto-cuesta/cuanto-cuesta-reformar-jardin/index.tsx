import Head from 'next/head';

const ReformarJardinCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la reforma de un jardín y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar un jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: 500€ - 2,000€</p>
            <p>Incluye limpieza, poda y plantación de nuevas plantas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Intermedia: 2,000€ - 5,000€</p>
            <p>Incluye nivelación del terreno, instalación de césped y plantación de arbustos.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: 5,000€ - 15,000€</p>
            <p>Incluye diseño paisajístico, instalación de sistema de riego, y plantación de árboles.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del jardín.</li>
          <li>Tipo y cantidad de plantas y árboles.</li>
          <li>Preparación y nivelación del terreno.</li>
          <li>Instalación de sistemas de riego.</li>
          <li>Elementos adicionales como caminos, iluminación y mobiliario.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio para Reformar un Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: 500€ - 2,000€, incluye limpieza, poda y plantación de nuevas plantas.
          </li>
          <li>
            <strong>Reforma Intermedia</strong>: 2,000€ - 5,000€, incluye nivelación del terreno, instalación de césped y plantación de arbustos.
          </li>
          <li>
            <strong>Reforma Completa</strong>: 5,000€ - 15,000€, incluye diseño paisajístico, instalación de sistema de riego, y plantación de árboles.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Reformar un Jardín</h2>
        <p>1. <strong>Planificación del Diseño</strong>: Planifica el diseño del jardín para maximizar el espacio y la estética.</p>
        <p>2. <strong>Selección de Plantas</strong>: Elige plantas adecuadas para el clima y suelo de tu área.</p>
        <p>3. <strong>Preparación del Terreno</strong>: Asegúrate de preparar el terreno adecuadamente antes de plantar.</p>
        <p>4. <strong>Sistema de Riego</strong>: Considera la instalación de un sistema de riego para mantener el jardín saludable.</p>
        <p>5. <strong>Presupuesto Realista</strong>: Define un presupuesto claro y añade un margen para imprevistos.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para reformar tu jardín según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para crear un espacio verde hermoso y funcional.
        </p>
      </section>
    </div>
  );
};

export default ReformarJardinCost;
