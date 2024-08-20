import Head from 'next/head';

const LimpiezaPiedraCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de piedra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de piedra y cómo abordar este servicio para mantener la estética y funcionalidad de superficies de piedra."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-piedra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de piedra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Básica: 200€ - 400€</p>
            <p>Incluye limpieza superficial y eliminación de polvo y suciedad leve.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Completa: 400€ - 800€</p>
            <p>Incluye limpieza profunda, eliminación de manchas difíciles y tratamiento especializado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Piedra: Diferentes piedras requieren métodos de limpieza específicos.</li>
          <li>Estado de la Superficie: Nivel de suciedad, manchas y daños presentes.</li>
          <li>Accesibilidad: Dificultad para acceder a ciertas áreas de la piedra.</li>
          <li>Equipo y Productos: Uso de herramientas y productos especializados para la limpieza.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Piedra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Básica</strong>: 200€ - 400€, incluyendo limpieza superficial y eliminación de polvo y suciedad leve.
          </li>
          <li>
            <strong>Limpieza Completa</strong>: 400€ - 800€, incluyendo limpieza profunda y tratamiento especializado de manchas difíciles.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación Inicial</strong>: Inspección detallada para identificar necesidades específicas de limpieza.</p>
        <p>2. <strong>Consultas Múltiples</strong>: Obtención de presupuestos detallados de diferentes servicios de limpieza.</p>
        <p>3. <strong>Tratamientos Específicos</strong>: Considerar el tipo de tratamiento necesario para preservar la piedra.</p>
        <p>4. <strong>Mantenimiento Regular</strong>: Establecer un programa de mantenimiento para prolongar la limpieza y el estado de la piedra.</p>
      </section>

      <section>
        <p className="text-lg">
          La limpieza de piedra es esencial para mantener la estética y la integridad de las superficies de piedra, requiriendo métodos y productos especializados.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaPiedraCoste;
