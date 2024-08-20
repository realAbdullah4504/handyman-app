import Head from 'next/head';

const RejasBalconesPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar rejas en balcones? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de rejas de seguridad en balcones, así como cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/rejas-balcones`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar rejas en balcones?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Estándar: 100€ - 200€ por metro lineal</p>
            <p>Incluye materiales y mano de obra para la instalación de rejas estándar en balcones.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rejas Personalizadas: 200€ - 400€ por metro lineal</p>
            <p>Incluye materiales y mano de obra para la instalación de rejas personalizadas con diseños especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Material y Diseño: Hierro forjado, acero inoxidable, diseño simple vs. elaborado.</li>
          <li>Dimensiones: Longitud total de los balcones donde se instalarán las rejas.</li>
          <li>Accesorios y Acabados: Cerraduras de seguridad, pintura especial, tratamiento anticorrosivo, etc.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y la accesibilidad al lugar de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Rejas en Balcones</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rejas Estándar</strong>: 100€ - 200€ por metro lineal, incluyendo materiales y mano de obra para la instalación de rejas estándar.
          </li>
          <li>
            <strong>Rejas Personalizadas</strong>: 200€ - 400€ por metro lineal, incluyendo materiales y mano de obra para la instalación de rejas personalizadas con diseños especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Diseño</strong>: Determina las medidas exactas y el estilo de rejas que deseas instalar en tus balcones.</p>
        <p>2. <strong>Cotizaciones</strong>: Solicita presupuestos detallados de varios proveedores para comparar precios y opciones de diseño.</p>
        <p>3. <strong>Instalación y Mantenimiento</strong>: Considera los costos adicionales de instalación y el mantenimiento regular para asegurar la durabilidad de las rejas en balcones.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de rejas en balcones no solo proporciona seguridad adicional, sino que también puede mejorar el aspecto estético de tu propiedad. Planifica cuidadosamente para obtener resultados que satisfagan tus necesidades y expectativas.
        </p>
      </section>
    </div>
  );
};

export default RejasBalconesPage;