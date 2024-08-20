import Head from 'next/head';

const AlicatarBanoCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta alicatar un baño? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con alicatar un baño y cómo presupuestar para este tipo de reforma en tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-alicatar-bano`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta alicatar un baño?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Alicatado Básico: €30 - €50 por m²</p>
            <p>Incluye azulejos estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Alicatado Completo: €50 - €100 por m²</p>
            <p>Incluye azulejos de calidad superior y trabajo detallado de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo y calidad de los azulejos seleccionados.</li>
          <li>Tamaño y complejidad del área a alicatar.</li>
          <li>Preparación previa del sustrato y eliminación de azulejos antiguos.</li>
          <li>Mano de obra y experiencia del profesional.</li>
          <li>Ubicación geográfica y accesibilidad del lugar de trabajo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes del Alicatado</h2>
        <ul className="list-disc list-inside">
          <li>Preparación del área de trabajo.</li>
          <li>Selección y compra de azulejos.</li>
          <li>Instalación de los azulejos.</li>
          <li>Acabados y sellado de juntas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo de azulejos y el diseño deseado para el baño.</p>
        <p>2. <strong>Selección de azulejos</strong>: Comparar precios y características de diferentes tipos de azulejos.</p>
        <p>3. <strong>Presupuesto de materiales</strong>: Incluir costos de azulejos, adhesivos y materiales de acabado.</p>
        <p>4. <strong>Mano de obra profesional</strong>: Contratar a profesionales con experiencia en alicatado para asegurar un acabado de calidad.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente el alicatado de tu baño dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AlicatarBanoCosto;
