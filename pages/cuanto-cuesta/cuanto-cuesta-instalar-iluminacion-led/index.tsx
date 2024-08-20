import Head from 'next/head';

const InstalacionIluminacionLED = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar iluminación LED? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de iluminación LED y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-iluminacion-led`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar iluminación LED?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €200 - €500</p>
            <p>Incluye reemplazo de luminarias básicas por LED.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: €500 - €1500</p>
            <p>Incluye instalación de sistemas LED inteligentes o de diseño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del proyecto de iluminación.</li>
          <li>Tipo de luminarias LED seleccionadas: estándar vs. inteligentes.</li>
          <li>Cantidad de puntos de luz y áreas a cubrir.</li>
          <li>Calidad y eficiencia energética de las luminarias LED.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de iluminación LED</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €200 - €500, incluyendo reemplazo de luminarias básicas por LED.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: €500 - €1500, incluyendo instalación de sistemas LED inteligentes o de diseño.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el tipo de iluminación LED adecuada para tus necesidades.</p>
        <p>2. <strong>Comparación de presupuestos</strong>: Obtener cotizaciones detalladas de varios instaladores de iluminación.</p>
        <p>3. <strong>Considerar eficiencia energética</strong>: Optar por luminarias LED con etiqueta energética alta para ahorros a largo plazo.</p>
        <p>4. <strong>Revisión de instaladores</strong>: Asegurarse de contratar profesionales cualificados con experiencia en instalaciones LED.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes realizar una instalación de iluminación LED eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default InstalacionIluminacionLED;
