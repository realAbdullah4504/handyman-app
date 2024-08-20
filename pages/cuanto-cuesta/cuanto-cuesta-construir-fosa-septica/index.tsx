import Head from 'next/head';

const ConstruirFosaSepticaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una fosa séptica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la construcción de una fosa séptica y cómo planificar tu presupuesto para esta instalación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-fosa-septica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una fosa séptica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Fosa Séptica Estándar: 1,500€ - 3,000€</p>
            <p>Incluye excavación, materiales básicos y mano de obra.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Fosa Séptica Premium: 3,000€ - 6,000€</p>
            <p>Incluye sistemas avanzados de tratamiento y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la fosa séptica requerida basada en el número de personas en el hogar.</li>
          <li>Profundidad y accesibilidad del área de excavación.</li>
          <li>Tipo de suelo y nivel de complicaciones durante la instalación.</li>
          <li>Opciones adicionales como sistemas de drenaje o filtración.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Sitio</strong>: Determinar las condiciones del suelo y la ubicación ideal para la fosa séptica.</p>
        <p>2. <strong>Costos de Materiales</strong>: Obtener cotizaciones de diferentes proveedores para materiales de calidad y durabilidad.</p>
        <p>3. <strong>Mano de Obra</strong>: Contratar a profesionales con experiencia en la instalación de fosas sépticas.</p>
        <p>4. <strong>Consideraciones de Mantenimiento</strong>: Incluir costos de mantenimiento periódico y posibles reparaciones futuras.</p>
      </section>

      <section>
        <p className="text-lg">
          Construir una fosa séptica puede variar significativamente en costos según las necesidades específicas y las condiciones del sitio, asegúrate de planificar adecuadamente tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirFosaSepticaCoste;