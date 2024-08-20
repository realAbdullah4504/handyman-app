import Head from 'next/head';

const CambiarCompaniaDeLuzCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar de compañía de luz? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados al cambio de compañía de luz y cómo planificar el proceso para optimizar tus gastos energéticos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-compania-de-luz`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar de compañía de luz?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo de Gestión: 0€ - 50€</p>
            <p>Tarifas administrativas asociadas al cambio de proveedor de energía.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Depósito de Garantía: 0€ - 100€</p>
            <p>Algunas compañías pueden requerir un depósito inicial como garantía.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores a Considerar</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y Tipo de Propiedad: Impacto en el consumo energético.</li>
          <li>Condiciones del Contrato: Evaluación de términos y condiciones.</li>
          <li>Ubicación Geográfica: Variaciones en tarifas basadas en la región.</li>
          <li>Comparación de Tarifas: Investigación de mejores ofertas disponibles.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo de Gestión</strong>: 0€ - 50€, tarifas administrativas por cambio de compañía.
          </li>
          <li>
            <strong>Depósito de Garantía</strong>: 0€ - 100€, dependiendo de las políticas de la nueva compañía.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Cambio</h2>
        <p>1. <strong>Evaluación de Ofertas</strong>: Comparar tarifas y beneficios de diferentes compañías de luz.</p>
        <p>2. <strong>Documentación Requerida</strong>: Preparar documentos necesarios para el cambio de proveedor.</p>
        <p>3. <strong>Confirmación de Servicio</strong>: Verificar tiempos de activación del nuevo contrato.</p>
        <p>4. <strong>Monitoreo de Facturación</strong>: Revisar las primeras facturas para asegurar la precisión de los cargos.</p>
      </section>

      <section>
        <p className="text-lg">
          Cambiar de compañía de luz puede resultar en ahorros significativos, asegúrate de entender los costos involucrados y los beneficios potenciales antes de hacer el cambio.
        </p>
      </section>
    </div>
  );
};

export default CambiarCompaniaDeLuzCoste;
