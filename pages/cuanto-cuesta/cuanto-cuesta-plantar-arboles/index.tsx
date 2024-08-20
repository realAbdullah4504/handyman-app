import Head from 'next/head';

const PlantarArbolesCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta plantar árboles? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a plantar árboles y cómo planificar esta actividad según tus necesidades y presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-plantar-arboles`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta plantar árboles?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Plantación Básica: 50€ - 200€ por árbol</p>
            <p>Incluye árboles pequeños y mano de obra estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Plantación Avanzada: 200€ - 500€ por árbol</p>
            <p>Incluye árboles grandes o especies específicas con preparación del suelo y cuidados adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y tipo de árbol seleccionado.</li>
          <li>Preparación del terreno y condiciones del suelo.</li>
          <li>Necesidad de riego y mantenimiento inicial.</li>
          <li>Ubicación y acceso al sitio de plantación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Plantación de Árboles</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Plantación Básica</strong>: 50€ - 200€ por árbol, incluye árboles pequeños y mano de obra estándar.
          </li>
          <li>
            <strong>Plantación Avanzada</strong>: 200€ - 500€ por árbol, incluye árboles grandes o especies específicas con preparación del suelo y cuidados adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para Plantar Árboles</h2>
        <p>1. <strong>Selecciona la Especie Correcta</strong>: Escoge árboles que sean adecuados para tu clima y tipo de suelo.</p>
        <p>2. <strong>Prepara el Sitio de Plantación</strong>: Asegúrate de preparar el suelo adecuadamente para promover el crecimiento saludable.</p>
        <p>3. <strong>Planifica el Riego y Mantenimiento</strong>: Establece un plan de riego inicial y cuidados para los árboles recién plantados.</p>
        <p>4. <strong>Consulta con Profesionales</strong>: Considera contratar servicios de expertos en jardinería o arboricultura para obtener mejores resultados.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para plantar árboles según tus necesidades y asegúrate de considerar todos los factores relevantes para una plantación exitosa.
        </p>
      </section>
    </div>
  );
};

export default PlantarArbolesCost;