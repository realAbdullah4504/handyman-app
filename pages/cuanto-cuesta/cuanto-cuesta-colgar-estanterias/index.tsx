import Head from 'next/head';

const ColgarEstanteriasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta colgar estanterías? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con colgar estanterías y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-colgar-estanterias`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta colgar estanterías?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 20€ - 50€ por estantería</p>
            <p>Incluye estanterías estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Personalizada: 50€ - 100€ por estantería</p>
            <p>Incluye estanterías personalizadas y ajustes específicos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Estantería: Estándar vs. personalizada.</li>
          <li>Complejidad de la Instalación: Ajustes especiales o instalación en lugares de difícil acceso.</li>
          <li>Accesorios Adicionales: Costos adicionales por herrajes y soportes necesarios.</li>
          <li>Ubicación: Costos variables según la región y la disponibilidad de mano de obra.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Colgar Estanterías</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 20€ - 50€ por estantería, incluyendo estanterías estándar y mano de obra básica.
          </li>
          <li>
            <strong>Instalación Personalizada</strong>: 50€ - 100€ por estantería, incluyendo estanterías personalizadas y ajustes específicos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Estanterías</strong>: Escoger estanterías que se ajusten al espacio y al estilo deseado.</p>
        <p>2. <strong>Consulta con Instaladores</strong>: Obtener varias cotizaciones y opiniones de instaladores profesionales.</p>
        <p>3. <strong>Preparación del Espacio</strong>: Asegurarse de tener las herramientas adecuadas y el espacio preparado antes de la instalación.</p>
        <p>4. <strong>Consideración de Mantenimiento</strong>: Evaluación de las necesidades de mantenimiento y limpieza de las estanterías instaladas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la instalación de estanterías, puedes asegurar una ejecución eficiente y estética dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ColgarEstanteriasCoste;