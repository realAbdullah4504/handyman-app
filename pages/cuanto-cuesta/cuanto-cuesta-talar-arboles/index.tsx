import Head from 'next/head';

const TalarArbolesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta talar árboles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a la tala de árboles y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-talar-arboles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta talar árboles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tala de Árbol Pequeño: 100€ - 500€</p>
            <p>Incluye tala y eliminación básica de residuos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Tala de Árbol Grande: 500€ - 2000€</p>
            <p>Incluye tala de árboles de mayor tamaño y eliminación de residuos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de árbol.</li>
          <li>Accesibilidad al árbol (ubicación y entorno).</li>
          <li>Necesidad de equipos especiales (grúas, escaleras, etc.).</li>
          <li>Eliminación de residuos y limpieza del área.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Tala de Árboles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Tala de Árbol Pequeño</strong>: 100€ - 500€, incluye tala y eliminación básica de residuos.
          </li>
          <li>
            <strong>Tala de Árbol Grande</strong>: 500€ - 2000€, incluye tala de árboles de mayor tamaño y eliminación de residuos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Talar Árboles</h2>
        <p>1. <strong>Evaluación del Árbol</strong>: Determina el tamaño y tipo de árbol antes de proceder con la tala.</p>
        <p>2. <strong>Contratación de Profesionales</strong>: Considera contratar servicios profesionales con experiencia en tala de árboles.</p>
        <p>3. <strong>Permiso y Normativas</strong>: Verifica los permisos y regulaciones locales para la tala de árboles.</p>
        <p>4. <strong>Eliminación de Residuos</strong>: Asegúrate de que el servicio incluya la eliminación adecuada de residuos y limpieza del área.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para talar árboles según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para una tala segura y eficiente.
        </p>
      </section>
    </div>
  );
};

export default TalarArbolesCost;