import Head from 'next/head';

const ReformaInstalacionElectrica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar la instalación eléctrica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la reforma de instalación eléctrica para viviendas o locales y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-reformar-instalacion-electrica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar la instalación eléctrica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: €1000 - €3000</p>
            <p>Incluye actualización básica de cableado y componentes.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: €3000 - €8000</p>
            <p>Incluye renovación completa con materiales de alta calidad y tecnología.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad del espacio: Vivienda pequeña vs. local comercial grande.</li>
          <li>Materiales utilizados: Calidad y tipo de cables, interruptores y dispositivos.</li>
          <li>Tecnología y automatización: Costos adicionales para sistemas avanzados.</li>
          <li>Normativas locales: Cumplimiento con regulaciones de seguridad y eléctricas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para reformas eléctricas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: €1000 - €3000, incluyendo actualización básica de cableado y componentes.
          </li>
          <li>
            <strong>Reforma Completa</strong>: €3000 - €8000, incluyendo renovación completa con materiales de alta calidad y tecnología.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar el alcance y necesidades específicas de la reforma eléctrica.</p>
        <p>2. <strong>Solicitud de presupuestos</strong>: Obtener estimaciones detalladas de varios contratistas eléctricos.</p>
        <p>3. <strong>Considerar eficiencia energética</strong>: Optar por componentes y sistemas que reduzcan el consumo de energía a largo plazo.</p>
        <p>4. <strong>Seguridad y calidad</strong>: Asegurarse de cumplir con estándares de seguridad y contratar profesionales cualificados.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes realizar una reforma eléctrica exitosa que mejore la seguridad y eficiencia de tu vivienda o local.
        </p>
      </section>
    </div>
  );
};

export default ReformaInstalacionElectrica;