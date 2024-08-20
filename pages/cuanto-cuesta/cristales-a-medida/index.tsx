import Head from 'next/head';

const CristalesAMedidaPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuestan los cristales a medida? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de cristales a medida para ventanas, puertas y otros usos en tu hogar o negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cristales-a-medida`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuestan los cristales a medida?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cristal Básico: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye cristal estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cristal Premium: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye cristal de alta calidad y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Cristal: Simple, doble acristalamiento, templado, laminado, etc.</li>
          <li>Aplicación: Ventanas, puertas, divisiones, mesas, etc.</li>
          <li>Dimensiones y Forma: Tamaño específico y formas personalizadas.</li>
          <li>Acabados y Tratamientos: Cristales especiales como antirreflejo, térmico, o con serigrafía.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y el acceso al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cristales a Medida</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cristal Básico</strong>: 50€ - 100€ por metro cuadrado, incluyendo cristal estándar y mano de obra básica.
          </li>
          <li>
            <strong>Cristal Premium</strong>: 100€ - 200€ por metro cuadrado, incluyendo cristal de alta calidad y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Evaluación</strong>: Determina las dimensiones y especificaciones del cristal a medida que necesitas.</p>
        <p>2. <strong>Comparación de Precios</strong>: Solicita cotizaciones de varios proveedores para obtener la mejor relación calidad-precio.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de transporte, instalación y cualquier tratamiento adicional necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar cristales a medida puede mejorar la estética y funcionalidad de tu espacio. Planifica adecuadamente tu presupuesto para obtener los mejores resultados.
        </p>
      </section>
    </div>
  );
};

export default CristalesAMedidaPage;