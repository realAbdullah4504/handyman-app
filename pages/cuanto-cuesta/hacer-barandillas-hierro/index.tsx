import Head from 'next/head';

const HacerBarandillasHierroPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer barandillas de hierro? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la fabricación de barandillas de hierro y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/hacer-barandillas-hierro`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer barandillas de hierro?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estilo Básico: 80€ - 150€ por metro lineal</p>
            <p>Incluye materiales y mano de obra para barandillas de hierro básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Estilo Personalizado: 150€ - 300€ por metro lineal</p>
            <p>Incluye materiales y mano de obra para barandillas de hierro con diseños personalizados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estilo y Diseño: Básico vs. personalizado con diseños ornamentales.</li>
          <li>Materiales Utilizados: Hierro forjado, acero inoxidable, etc.</li>
          <li>Longitud y Complejidad: Barandillas rectas vs. curvas o con detalles adicionales.</li>
          <li>Ubicación y Accesibilidad: Precios pueden variar según la ubicación geográfica y accesibilidad al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Fabricación de Barandillas de Hierro</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Estilo Básico</strong>: 80€ - 150€ por metro lineal, incluyendo materiales y mano de obra para barandillas de hierro básicas.
          </li>
          <li>
            <strong>Estilo Personalizado</strong>: 150€ - 300€ por metro lineal, incluyendo materiales y mano de obra para barandillas de hierro con diseños personalizados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diseño y Medición</strong>: Define el estilo y las medidas precisas de las barandillas de hierro requeridas.</p>
        <p>2. <strong>Obtención de Cotizaciones</strong>: Solicita múltiples cotizaciones de fabricantes para comparar precios y calidad de trabajo.</p>
        <p>3. <strong>Instalación y Mantenimiento</strong>: Considera los costos adicionales de instalación y planifica el mantenimiento regular para asegurar la durabilidad de las barandillas.</p>
      </section>

      <section>
        <p className="text-lg">
          Fabricar barandillas de hierro puede agregar un toque estético y funcional a tu espacio. Asegúrate de planificar adecuadamente para obtener resultados satisfactorios y duraderos.
        </p>
      </section>
    </div>
  );
};

export default HacerBarandillasHierroPage;