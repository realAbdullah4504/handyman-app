import Head from 'next/head';

const HerrerosPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta contratar a un herrero? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la contratación de un herrero y cómo planificar tu presupuesto para este tipo de servicios."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/herreros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta contratar a un herrero?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparaciones Básicas: 50€ - 100€ por hora</p>
            <p>Incluye reparaciones simples y trabajos de soldadura.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Proyectos Especializados: 100€ - 200€ por hora</p>
            <p>Incluye trabajos de fabricación a medida y proyectos personalizados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Trabajo: Reparaciones simples, soldadura, fabricación a medida, etc.</li>
          <li>Materiales Utilizados: Costo de materiales como hierro, acero, etc.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y acceso al sitio.</li>
          <li>Complejidad del Proyecto: Proyectos estándar vs. proyectos personalizados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Servicios de Herreros</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reparaciones Básicas</strong>: 50€ - 100€ por hora, incluyendo reparaciones simples y trabajos de soldadura.
          </li>
          <li>
            <strong>Proyectos Especializados</strong>: 100€ - 200€ por hora, incluyendo trabajos de fabricación a medida y proyectos personalizados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Definición de Necesidades</strong>: Determine el tipo de servicio de herrero que necesitas.</p>
        <p>2. <strong>Cotización y Comparación</strong>: Obtén múltiples cotizaciones de herreros para comparar precios y servicios.</p>
        <p>3. <strong>Considera la Calidad</strong>: Elige un herrero con experiencia y buena reputación para garantizar resultados de calidad.</p>
        <p>4. <strong>Seguridad y Durabilidad</strong>: Asegúrate de que el trabajo realizado cumpla con las normas de seguridad y sea duradero.</p>
      </section>

      <section>
        <p className="text-lg">
          Contratar a un herrero puede ser crucial para realizar reparaciones y proyectos personalizados. Planifica cuidadosamente para obtener resultados satisfactorios y duraderos.
        </p>
      </section>
    </div>
  );
};

export default HerrerosPage;