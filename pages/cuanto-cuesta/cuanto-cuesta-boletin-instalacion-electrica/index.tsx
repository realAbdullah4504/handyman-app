import Head from 'next/head';

const BoletinInstalacionElectrica = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta un boletín de instalación eléctrica? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la obtención de un boletín de instalación eléctrica y cómo presupuestar para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-boletin-instalacion-electrica`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta un boletín de instalación eléctrica?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Precio Estándar: €80 - €150</p>
            <p>Incluye la visita del técnico y la emisión del boletín.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Urgente o Especial: €150 - €300</p>
            <p>Precio más alto por un servicio urgente o con necesidades especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y complejidad de la instalación eléctrica.</li>
          <li>Urgencia del servicio: Necesidad de un boletín en corto plazo.</li>
          <li>Región y normativas locales: Costos pueden variar según la ubicación.</li>
          <li>Calidad y experiencia del técnico: Puede afectar el precio final del servicio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para boletines de instalación eléctrica</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Precio Estándar</strong>: €80 - €150, incluyendo la visita del técnico y la emisión del boletín.
          </li>
          <li>
            <strong>Urgente o Especial</strong>: €150 - €300, precio más alto por un servicio urgente o con necesidades especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Determinar si se necesita un boletín estándar o urgente.</p>
        <p>2. <strong>Solicitar varios presupuestos</strong>: Comparar precios y servicios de diferentes técnicos o empresas.</p>
        <p>3. <strong>Conocer las normativas locales</strong>: Asegurarse de cumplir con los requisitos legales y reglamentarios.</p>
        <p>4. <strong>Revisión de garantías</strong>: Confirmar la validez y garantías del boletín emitido.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los costos asociados y planificar adecuadamente, puedes obtener un boletín de instalación eléctrica de manera eficiente y conforme a tus necesidades.
        </p>
      </section>
    </div>
  );
};

export default BoletinInstalacionElectrica;
