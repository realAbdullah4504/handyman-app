import Head from 'next/head';

const ColgarCortinasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta colgar cortinas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con colgar cortinas en tu hogar y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-colgar-cortinas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta colgar cortinas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 20€ - 50€ por ventana</p>
            <p>Incluye mano de obra estándar y materiales básicos para la instalación de las cortinas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Premium: 50€ - 100€ por ventana</p>
            <p>Utiliza técnicas avanzadas de instalación y materiales de alta calidad para colgar cortinas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Cortina: Cortinas estándar vs. cortinas personalizadas o pesadas.</li>
          <li>Accesorios y Materiales: Costos adicionales por rieles, barras, ganchos u otros accesorios necesarios.</li>
          <li>Ubicación y Accesibilidad: Dificultades adicionales para ventanas altas o de difícil acceso.</li>
          <li>Instalación Especializada: Necesidad de instaladores especializados para cortinas complicadas o personalizadas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Colgar Cortinas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 20€ - 50€ por ventana, incluyendo mano de obra estándar y materiales básicos.
          </li>
          <li>
            <strong>Instalación Premium</strong>: 50€ - 100€ por ventana, utilizando técnicas avanzadas de instalación y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición de Ventanas</strong>: Asegúrate de medir correctamente las ventanas antes de comprar las cortinas.</p>
        <p>2. <strong>Selección de Cortinas</strong>: Elige cortinas que complementen el estilo y la decoración de tu hogar.</p>
        <p>3. <strong>Contratación de Instaladores</strong>: Busca instaladores con experiencia para garantizar una instalación adecuada y duradera.</p>
        <p>4. <strong>Consideración de Detalles</strong>: Discute todos los detalles del proyecto con los instaladores para evitar sorpresas.</p>
      </section>

      <section>
        <p className="text-lg">
          Colgar cortinas puede mejorar la estética y funcionalidad de tus espacios, asegurando que estén instaladas correctamente es clave para su durabilidad.
        </p>
      </section>
    </div>
  );
};

export default ColgarCortinasCoste;