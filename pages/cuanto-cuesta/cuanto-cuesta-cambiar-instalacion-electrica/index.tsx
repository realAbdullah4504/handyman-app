import Head from 'next/head';

const CambioInstalacionElectrica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar la instalación eléctrica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el cambio de instalación eléctrica y cómo presupuestar para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-instalacion-electrica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar la instalación eléctrica?</h1>

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
          <li>Tamaño y complejidad de la instalación eléctrica.</li>
          <li>Calidad y tipo de materiales utilizados.</li>
          <li>Tecnología y automatización: Costos adicionales para sistemas avanzados.</li>
          <li>Normativas locales: Cumplimiento con regulaciones de seguridad y eléctricas.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para cambios de instalación eléctrica</h2>
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
        <p>1. <strong>Evaluación inicial</strong>: Determinar el alcance y necesidades específicas del cambio de instalación.</p>
        <p>2. <strong>Solicitud de presupuestos</strong>: Obtener estimaciones detalladas de varios contratistas eléctricos.</p>
        <p>3. <strong>Considerar eficiencia energética</strong>: Optar por componentes y sistemas que reduzcan el consumo de energía a largo plazo.</p>
        <p>4. <strong>Seguridad y calidad</strong>: Asegurarse de cumplir con estándares de seguridad y contratar profesionales cualificados.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que influyen en los costos y planificar adecuadamente, puedes realizar un cambio de instalación eléctrica exitoso que mejore la seguridad y eficiencia de tu espacio.
        </p>
      </section>
    </div>
  );
};

export default CambioInstalacionElectrica;