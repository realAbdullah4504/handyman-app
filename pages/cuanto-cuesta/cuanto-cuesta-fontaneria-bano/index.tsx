import Head from 'next/head';

const FontaneriaBanoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta fontanería de baño? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la fontanería de baño y cómo presupuestar para esta instalación en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-fontaneria-bano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta fontanería de baño?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €500 - €1,000 por baño</p>
            <p>Incluye instalación estándar de tuberías y accesorios.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Completa: €1,000 - €3,000 por baño</p>
            <p>Incluye instalación de alta gama y trabajo detallado de fontanería.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Complejidad de la instalación de tuberías.</li>
          <li>Número y tipo de accesorios y grifería.</li>
          <li>Necesidad de modificar la distribución existente.</li>
          <li>Mano de obra y experiencia del fontanero.</li>
          <li>Ubicación geográfica y accesibilidad del lugar de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes de la Fontanería</h2>
        <ul className="list-disc list-inside">
          <li>Selección y compra de accesorios y tuberías.</li>
          <li>Preparación de las tuberías y conexión a la red existente.</li>
          <li>Instalación de grifería, duchas y sanitarios.</li>
          <li>Pruebas y ajustes para asegurar un funcionamiento adecuado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar la configuración deseada del baño y las necesidades de fontanería.</p>
        <p>2. <strong>Selección de accesorios</strong>: Comparar precios y características de diferentes opciones de grifería y accesorios.</p>
        <p>3. <strong>Presupuesto de materiales y mano de obra</strong>: Incluir costos de materiales de fontanería y servicios profesionales.</p>
        <p>4. <strong>Contratación de fontaneros</strong>: Asegurarse de contar con fontaneros cualificados para un trabajo seguro y eficiente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente la fontanería de tu baño dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default FontaneriaBanoCosto;