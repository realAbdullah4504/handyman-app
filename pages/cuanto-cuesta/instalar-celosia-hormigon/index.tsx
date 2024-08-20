import Head from 'next/head';

const InstalarCelosiaHormigon = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una celosía de hormigón? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de celosías de hormigón, incluyendo materiales, mano de obra y factores que afectan los costos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-celosia-hormigon`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una celosía de hormigón?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Celosía Básica: 50€ - 100€ por metro cuadrado</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Celosía Decorativa: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye diseños personalizados y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Celosía: Mayor tamaño requerirá más material y trabajo.</li>
          <li>Material Utilizado: Varía según el tipo y calidad del hormigón.</li>
          <li>Diseño y Personalización: Diseños personalizados aumentarán los costos.</li>
          <li>Ubicación y Accesibilidad: Costos adicionales pueden surgir en lugares de difícil acceso.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar una Celosía de Hormigón</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Celosía Básica</strong>: 50€ - 100€ por metro cuadrado, incluyendo materiales estándar y mano de obra.
          </li>
          <li>
            <strong>Celosía Decorativa</strong>: 100€ - 200€ por metro cuadrado, incluyendo diseños personalizados y materiales de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Define las Especificaciones</strong>: Determina el diseño y tamaño de la celosía.</p>
        <p>2. <strong>Solicita Cotizaciones</strong>: Obtén estimaciones detalladas de contratistas.</p>
        <p>3. <strong>Considera los Costos Adicionales</strong>: Incluye gastos como preparación del sitio y permisos.</p>
      </section>

      <section>
        <p className="text-lg">
          Instalar una celosía de hormigón puede agregar valor estético y funcional a tu espacio. Asegúrate de evaluar todos los factores antes de comenzar el proyecto.
        </p>
      </section>
    </div>
  );
};

export default InstalarCelosiaHormigon;
