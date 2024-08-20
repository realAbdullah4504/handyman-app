import Head from 'next/head';

const InstalarBarandillas = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar barandillas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de barandillas y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-barandillas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar barandillas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Barandilla Básica: 50€ - 100€ por metro lineal</p>
            <p>Incluye barandillas estándar y materiales básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Barandilla de Diseño: 100€ - 200€ o más por metro lineal</p>
            <p>Incluye barandillas personalizadas con diseño especial y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Acero inoxidable, aluminio, madera, entre otros.</li>
          <li>Diseño y Estilo: Barandillas estándar vs. personalizadas con diseño especial.</li>
          <li>Longitud y Complejidad: Longitud total de la barandilla y complejidad de instalación.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y acceso al sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Barandillas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Barandilla Básica</strong>: 50€ - 100€ por metro lineal, incluyendo barandillas estándar y materiales básicos.
          </li>
          <li>
            <strong>Barandilla de Diseño</strong>: 100€ - 200€ o más por metro lineal, incluyendo barandillas personalizadas con diseño especial y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Barandilla</strong>: Escoge entre opciones estándar y de diseño según tus preferencias y presupuesto.</p>
        <p>2. <strong>Consultar con Profesionales</strong>: Obtén cotizaciones detalladas de instaladores de barandillas para comparar precios y servicios.</p>
        <p>3. <strong>Considerar la Estética y Seguridad</strong>: Equilibra el diseño estético con la seguridad y funcionalidad de la barandilla.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Coordina la instalación adecuada y programa el mantenimiento regular para asegurar la durabilidad de las barandillas.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar barandillas no solo añade seguridad, sino también estilo a tu espacio. Planifica cuidadosamente para garantizar una instalación exitosa y satisfactoria.
        </p>
      </section>
    </div>
  );
};

export default InstalarBarandillas;