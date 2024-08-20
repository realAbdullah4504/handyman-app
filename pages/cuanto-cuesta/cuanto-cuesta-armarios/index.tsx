import Head from 'next/head';

const HacerArmariosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta hacer armarios a medida? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la fabricación de armarios a medida y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-armariosa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta hacer armarios a medida?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 500€ - 1,500€ por armario</p>
            <p>Incluye materiales estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 1,500€ - 3,000€ por armario</p>
            <p>Incluye materiales premium y diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Diseño: Dimensiones y complejidad del diseño del armario.</li>
          <li>Materiales Utilizados: Calidad y tipo de materiales seleccionados.</li>
          <li>Acabados y Accesorios: Opciones de acabado y accesorios adicionales.</li>
          <li>Ubicación y Accesibilidad: Impacto en costos de logística y transporte.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Hacer Armarios a Medida</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 500€ - 1,500€ por armario, incluyendo materiales estándar y mano de obra básica.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 1,500€ - 3,000€ por armario, incluyendo materiales premium y diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Consulta Inicial</strong>: Discutir requisitos de diseño y materiales con el fabricante de armarios.</p>
        <p>2. <strong>Selección de Material</strong>: Elegir entre diferentes opciones de materiales según el estilo y presupuesto.</p>
        <p>3. <strong>Solicitar Presupuestos Detallados</strong>: Obtener cotizaciones de varios fabricantes y comparar costos.</p>
        <p>4. <strong>Confirmar Diseño y Planificación</strong>: Asegurarse de que el diseño y la planificación del proyecto estén claros antes de comenzar.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la fabricación de armarios a medida, puedes garantizar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default HacerArmariosCoste;