import Head from 'next/head';

const InstalacionElectricaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer la instalación eléctrica en obra nueva? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación eléctrica en una obra nueva y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-hacer-instalacion-electrica-obra-nueva`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer la instalación eléctrica en obra nueva?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 3000€ - 8000€</p>
            <p>Incluye cableado estándar y puntos de luz básicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Completa: 8000€ - 15000€</p>
            <p>Incluye cableado avanzado, automatización y puntos de luz adicionales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Dimensiones del Edificio: El tamaño del edificio afecta la cantidad de cableado y puntos de luz necesarios.</li>
          <li>Calidad del Cableado: Cableado estándar vs. cableado avanzado con mejor eficiencia energética.</li>
          <li>Tecnología y Automatización: Uso de tecnología inteligente y sistemas de automatización.</li>
          <li>Normativas Locales: Cumplimiento de normativas eléctricas locales y requisitos de seguridad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación Eléctrica en Obra Nueva</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 3000€ - 8000€, incluyendo cableado estándar y puntos de luz básicos.
          </li>
          <li>
            <strong>Instalación Completa</strong>: 8000€ - 15000€, incluyendo cableado avanzado, automatización y puntos de luz adicionales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de las Necesidades Eléctricas</strong>: Determina la cantidad de puntos de luz y dispositivos eléctricos necesarios.</p>
        <p>2. <strong>Investigación y Comparación</strong>: Obtén presupuestos detallados de varios electricistas para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Considerar Eficiencia y Sostenibilidad</strong>: Invierte en tecnologías eficientes y sostenibles para reducir costos a largo plazo.</p>
        <p>4. <strong>Calidad y Seguridad</strong>: Asegúrate de que la instalación cumpla con todas las normativas de seguridad eléctrica locales para evitar problemas futuros.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la instalación eléctrica en una obra nueva, puedes garantizar un sistema eléctrico seguro y eficiente que satisfaga todas tus necesidades residenciales.
        </p>
      </section>
    </div>
  );
};

export default InstalacionElectricaCoste;