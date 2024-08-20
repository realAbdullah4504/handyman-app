import Head from 'next/head';

const PuertaCorrederaCristalPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una puerta corredera de cristal? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una puerta corredera de cristal para mejorar la estética y funcionalidad de tu espacio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/puerta-corredera-cristal`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una puerta corredera de cristal?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta Básica: 300€ - 600€</p>
            <p>Incluye puerta corredera estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Puerta Premium: 600€ - 1,200€</p>
            <p>Incluye puerta corredera de alta calidad y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Cristal: Simple, doble acristalamiento, templado, etc.</li>
          <li>Tamaño y Diseño: Dimensiones de la puerta y personalización del diseño.</li>
          <li>Marcos y Herrajes: Materiales y acabados de los marcos y herrajes.</li>
          <li>Ubicación: Los precios pueden variar según la ubicación geográfica y el acceso al sitio de instalación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Puertas Correderas de Cristal</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Puerta Básica</strong>: 300€ - 600€, incluyendo puerta corredera estándar y mano de obra básica.
          </li>
          <li>
            <strong>Puerta Premium</strong>: 600€ - 1,200€, incluyendo puerta corredera de alta calidad y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Medición y Evaluación</strong>: Determina las dimensiones y especificaciones de la puerta corredera de cristal que necesitas.</p>
        <p>2. <strong>Comparación de Precios</strong>: Solicita cotizaciones de varios proveedores para obtener la mejor relación calidad-precio.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluye costos de instalación, transporte y cualquier servicio post-instalación necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar una puerta corredera de cristal puede modernizar y mejorar la funcionalidad de tu espacio. Planifica adecuadamente tu presupuesto para obtener resultados satisfactorios.
        </p>
      </section>
    </div>
  );
};

export default PuertaCorrederaCristalPage;