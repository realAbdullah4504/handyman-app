import Head from 'next/head';

const ReformasViviendasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar viviendas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reforma de viviendas y cómo presupuestar para renovar y mejorar tu hogar."
        />
        <link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-viviendas`}
				/>
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar viviendas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: €10,000 - €25,000</p>
            <p>Incluye renovación de elementos esenciales como pintura, suelos y baños.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: €25,000 - €60,000</p>
            <p>Incluye cambios estructurales, cocina nueva, baños y acabados de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la vivienda: Pequeñas vs. grandes y con múltiples plantas.</li>
          <li>Materiales y acabados: Calidad de suelos, azulejos, pintura, ventanas y electrodomésticos.</li>
          <li>Mano de obra y tiempo de trabajo: Costo de la contratación de profesionales y duración del proyecto.</li>
          <li>Localización y accesibilidad: Impacto del lugar en los costos de transporte y disposición de materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reformar viviendas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: €10,000 - €25,000, incluyendo renovación de pintura, suelos y baños.
          </li>
          <li>
            <strong>Reforma Completa</strong>: €25,000 - €60,000, incluyendo cambios estructurales, cocina nueva y acabados de alta calidad.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades y deseos</strong>: Definir prioridades como funcionalidad vs. estética.</p>
        <p>2. <strong>Obtener varios presupuestos</strong>: Comparar ofertas de contratistas y proveedores de materiales.</p>
        <p>3. <strong>Considerar la durabilidad y mantenimiento</strong>: Optar por materiales que ofrezcan valor a largo plazo.</p>
        <p>4. <strong>Programación y logística</strong>: Coordinar el tiempo y la logística para minimizar interrupciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar la reforma de tu vivienda, ten en cuenta estos factores para asegurar un proyecto exitoso dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ReformasViviendasCoste;
