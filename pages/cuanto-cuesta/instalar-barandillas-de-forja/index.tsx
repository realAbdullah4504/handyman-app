import Head from 'next/head';

const InstalarBarandillasDeForja = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar barandillas de forja? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de barandillas de forja y cómo planificar tu presupuesto para este proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-barandillas-de-forja`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar barandillas de forja?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Barandillas Estándar: 100€ - 300€ por metro lineal</p>
            <p>Incluye barandillas de forja simples sin adornos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Barandillas Personalizadas: 300€ - 800€ por metro lineal</p>
            <p>Incluye barandillas de forja con diseños personalizados y detalles ornamentales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estilo y Diseño: Simple, con adornos, personalizado, etc.</li>
          <li>Materiales y Acabados: Hierro forjado, pintura especial, detalles decorativos, etc.</li>
          <li>Longitud y Altura: Dimensiones específicas de las barandillas.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y accesibilidad del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Barandillas de Forja</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Barandillas Estándar</strong>: 100€ - 300€ por metro lineal, incluyendo barandillas simples de forja sin adornos.
          </li>
          <li>
            <strong>Barandillas Personalizadas</strong>: 300€ - 800€ por metro lineal, incluyendo barandillas de forja con diseños personalizados y detalles ornamentales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selección de Diseño</strong>: Elige entre opciones estándar y personalizadas según tus necesidades y estética.</p>
        <p>2. <strong>Consulta con Profesionales</strong>: Obtén cotizaciones detalladas de instaladores de barandillas de forja para comparar precios y servicios.</p>
        <p>3. <strong>Considera la Seguridad y Estética</strong>: Evalúa la durabilidad y el diseño de las barandillas para asegurar funcionalidad y estética.</p>
        <p>4. <strong>Instalación y Mantenimiento</strong>: Coordinar la instalación adecuada y planificar el mantenimiento regular para asegurar la durabilidad de las barandillas de forja.</p>
      </section>

      <section>
        <p className="text-lg">
          La instalación de barandillas de forja puede añadir un toque estético y funcional a tu espacio. Planifica cuidadosamente para garantizar una instalación segura y duradera.
        </p>
      </section>
    </div>
  );
};

export default InstalarBarandillasDeForja;