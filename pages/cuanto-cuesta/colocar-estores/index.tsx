import Head from 'next/head';

const ColocarEstores = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta colocar estores? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de estores y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/colocar-estores`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta colocar estores?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estores Básicos: 30€ - 50€ por ventana</p>
            <p>Incluye estores estándar y montaje básico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estores Premium: 80€ - 150€ por ventana</p>
            <p>Incluye estores de alta calidad y montaje especializado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad de los estores seleccionados.</li>
          <li>Número de ventanas a cubrir.</li>
          <li>Complejidad del montaje, como ventanas de difícil acceso.</li>
          <li>Ubicación geográfica y tarifas de instalación local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Evaluación</strong>: Determina el tamaño y las especificaciones de los estores necesarios.</p>
        <p>2. <strong>Solicitud de Presupuestos</strong>: Obtén presupuestos detallados de varios proveedores de estores.</p>
        <p>3. <strong>Selección de Calidad</strong>: Considera la durabilidad y el diseño al elegir los estores adecuados para tu espacio.</p>
        <p>4. <strong>Costos Adicionales</strong>: Incluye posibles gastos extra como instalaciones personalizadas o material adicional.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la instalación de estores, puedes asegurarte de que el proyecto se realice eficientemente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ColocarEstores;