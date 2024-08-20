import Head from 'next/head';

const TrabajosVerticalesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan los trabajos verticales? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con los trabajos verticales y cómo planificar tu presupuesto para reparaciones y mantenimiento en altura."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuestan-trabajos-verticales`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan los trabajos verticales?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 50€ - 100€ por hora</p>
            <p>Incluye trabajos de mantenimiento y reparaciones simples en altura.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 100€ - 200€ por hora</p>
            <p>Incluye trabajos especializados y de mayor riesgo en estructuras verticales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Altura y Accesibilidad: Dificultad para acceder y trabajar en diferentes alturas.</li>
          <li>Tipo de Trabajo: Desde mantenimiento básico hasta reparaciones estructurales complejas.</li>
          <li>Equipo Especializado: Necesidad de equipos y técnicas especiales para trabajos en altura.</li>
          <li>Ubicación: Costos pueden variar según la ubicación geográfica y las regulaciones locales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Trabajos Verticales</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 50€ - 100€ por hora, incluyendo trabajos simples y de mantenimiento.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 100€ - 200€ por hora, incluyendo trabajos especializados y de mayor riesgo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determinación de los trabajos necesarios y la altura involucrada.</p>
        <p>2. <strong>Selección de Proveedor</strong>: Elección de un proveedor con experiencia y equipos adecuados para los trabajos requeridos.</p>
        <p>3. <strong>Solicitud de Presupuestos</strong>: Obtención de presupuestos detallados de varios proveedores para comparar costos y servicios.</p>
        <p>4. <strong>Ejecución del Trabajo</strong>: Coordinación de las fechas de trabajo y asegurarse de la calidad y seguridad del trabajo realizado.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar los trabajos verticales, puedes garantizar que las reparaciones y mantenimientos en altura se realicen de manera segura y efectiva dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default TrabajosVerticalesCoste;