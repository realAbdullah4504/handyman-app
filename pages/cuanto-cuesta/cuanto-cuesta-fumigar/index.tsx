import Head from 'next/head';

const FumigacionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta fumigar? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la fumigación y cómo planificar tu presupuesto para estos servicios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-fumigar`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta fumigar?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Fumigación Básica: 100€ - 200€ por tratamiento</p>
            <p>Incluye métodos estándar y aplicaciones básicas para fumigación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Fumigación Avanzada: 200€ - 500€ por tratamiento</p>
            <p>Incluye técnicas avanzadas y productos especializados para fumigación efectiva.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Espacio: Área que necesita ser fumigada.</li>
          <li>Grado de Infestación: Nivel de infestación de plagas.</li>
          <li>Tipo de Plagas: Tipo específico de plagas que requieren tratamiento.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y acceso al lugar.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Fumigación</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Fumigación Básica</strong>: 100€ - 200€ por tratamiento, incluyendo métodos estándar y aplicaciones básicas.
          </li>
          <li>
            <strong>Fumigación Avanzada</strong>: 200€ - 500€ por tratamiento, incluyendo técnicas avanzadas y productos especializados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de la Infestación</strong>: Determina el tipo y grado de infestación de plagas.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén cotizaciones de varios proveedores de servicios de fumigación para comparar precios y métodos ofrecidos.</p>
        <p>3. <strong>Considerar Beneficios a Largo Plazo</strong>: Evalúa la eficacia y durabilidad del tratamiento de fumigación para evitar futuros problemas de plagas.</p>
        <p>4. <strong>Calidad y Fiabilidad</strong>: Elige un proveedor de servicios de fumigación con experiencia y buenas referencias para garantizar resultados satisfactorios.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la fumigación, puedes asegurarte de eliminar las plagas de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default FumigacionCoste;