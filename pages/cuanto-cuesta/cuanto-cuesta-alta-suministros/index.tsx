import Head from 'next/head';

const CuantoCuestaAltaSuministros = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta dar de alta los suministros? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con dar de alta los suministros de agua, electricidad o gas en una nueva propiedad."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-alta-suministros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta dar de alta los suministros?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Agua: €50 - €200</p>
            <p>Dependiendo de la compañía y la ubicación.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Electricidad: €100 - €300</p>
            <p>Varía según la potencia contratada y la distribuidora.</p>
          </div>
          <div className="bg-purple-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Gas: €50 - €150</p>
            <p>Dependiendo de la compañía y la instalación necesaria.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de suministro: Agua, electricidad, gas, etc.</li>
          <li>Ubicación geográfica: Costos pueden variar según la región y la empresa proveedora.</li>
          <li>Requisitos de instalación: Necesidad de equipos adicionales o modificaciones en la propiedad.</li>
          <li>Tarifas y impuestos: Costos adicionales por derechos de alta y otros cargos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Presupuesto y planificación</h2>
        <p>1. <strong>Identificar proveedores</strong>: Investigar las compañías locales y sus tarifas.</p>
        <p>2. <strong>Solicitar presupuestos</strong>: Obtener detalles específicos sobre costos y tiempos de instalación.</p>
        <p>3. <strong>Programar el alta</strong>: Coordinar con las empresas para minimizar el tiempo sin suministros.</p>
        <p>4. <strong>Documentación necesaria</strong>: Preparar los documentos requeridos para el proceso de alta.</p>
      </section>

      <section>
        <p className="text-lg">
          Dar de alta los suministros es un paso crucial al mudarse a una nueva propiedad para asegurar comodidad y funcionalidad.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaAltaSuministros;