import Head from 'next/head';

const EncofradoHormigonCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el encofrado de hormigón? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con el encofrado de hormigón y cómo presupuestar para este tipo de proyectos en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-encofrado-hormigon`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el encofrado de hormigón?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Encofrado estándar: €20 - €40 por metro cuadrado</p>
            <p>Encofrado de hormigón convencional con materiales y mano de obra estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Encofrado especializado: €40 - €80 por metro cuadrado</p>
            <p>Encofrado de hormigón con diseños personalizados o requisitos específicos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y forma del proyecto: Dimensiones y complejidad del encofrado requerido.</li>
          <li>Tipo de hormigón: Hormigón convencional versus hormigón especializado.</li>
          <li>Acabados y detalles: Costos adicionales por acabados decorativos o técnicas especiales.</li>
          <li>Ubicación geográfica: Variaciones en costos según la región y accesibilidad del sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para el encofrado de hormigón</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Encofrado estándar</strong>: €20 - €40 por metro cuadrado, encofrado de hormigón convencional con materiales y mano de obra estándar.
          </li>
          <li>
            <strong>Encofrado especializado</strong>: €40 - €80 por metro cuadrado, encofrado de hormigón con diseños personalizados o requisitos específicos.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Especificar el tamaño, forma y requisitos específicos para el encofrado de hormigón.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de varios contratistas especializados en encofrado de hormigón.</p>
        <p>3. <strong>Seleccionar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al diseño deseado.</p>
        <p>4. <strong>Considerar permisos y regulaciones</strong>: Asegurarse de cumplir con todos los requisitos legales y de construcción locales para proyectos de encofrado de hormigón.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes realizar el encofrado de hormigón de manera eficiente y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default EncofradoHormigonCoste;