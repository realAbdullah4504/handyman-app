import Head from 'next/head';

const AbrillantarSueloCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta abrillantar un suelo? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el abrillantado de suelos y cómo planificar tu presupuesto para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-abrillantar-suelo`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta abrillantar un suelo?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Abrillantado Básico: 5€ - 8€ por m²</p>
            <p>Incluye abrillantado básico de suelos con máquina pulidora estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Abrillantado Profesional: 8€ - 15€ por m²</p>
            <p>Incluye tratamiento especializado, eliminación de manchas difíciles y acabados de alto brillo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Área: Superficie total que se va a abrillantar.</li>
          <li>Estado del Suelo: Necesidad de reparaciones previas, pulido adicional o eliminación de manchas.</li>
          <li>Tipo de Suelo: Material del suelo (mármol, granito, terrazo, etc.) que puede requerir técnicas específicas.</li>
          <li>Accesibilidad: Dificultad para acceder al área de trabajo dentro de la propiedad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Abrillantar Suelo</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Abrillantado Básico</strong>: 5€ - 8€ por m², incluyendo abrillantado básico con máquina pulidora estándar.
          </li>
          <li>
            <strong>Abrillantado Profesional</strong>: 8€ - 15€ por m², incluyendo tratamiento especializado y acabados de alto brillo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Área</strong>: Medición y evaluación de la superficie a abrillantar.</p>
        <p>2. <strong>Estado del Suelo</strong>: Inspección para identificar necesidades de reparación, pulido o tratamiento adicional.</p>
        <p>3. <strong>Selección de Tratamiento</strong>: Discusión sobre opciones de brillo, sellado y tratamiento específico para el suelo.</p>
        <p>4. <strong>Accesibilidad y Logística</strong>: Consideración de la accesibilidad y horarios para minimizar interrupciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el presupuesto para abrillantar un suelo, puedes mejorar la apariencia y durabilidad del suelo dentro de un rango de costos predefinido.
        </p>
      </section>
    </div>
  );
};

export default AbrillantarSueloCoste;