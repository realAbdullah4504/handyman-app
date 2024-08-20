import Head from 'next/head';

const PonerParquetCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner parquet? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la instalación de parquet y cómo presupuestar para este tipo de suelo."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poner-parquet`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta poner parquet?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Parquet estándar: €20 - €40 por metro cuadrado</p>
            <p>Incluye parquet laminado o de madera básico y mano de obra estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Parquet premium: €40 - €100+ por metro cuadrado</p>
            <p>Incluye parquet de madera noble o diseño personalizado con instalación especializada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de parquet seleccionado (laminado, madera, diseño especial).</li>
          <li>Área total a cubrir y preparación del suelo existente.</li>
          <li>Costo de la mano de obra y la complejidad de la instalación.</li>
          <li>Necesidades específicas de acabado y tratamiento del parquet.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Medición y diseño</strong>: Determina el área y estilo de parquet deseado.</p>
        <p>2. <strong>Solicitud de presupuestos</strong>: Obtén estimaciones detalladas de varios proveedores.</p>
        <p>3. <strong>Selección de material y acabados</strong>: Escoge opciones que se ajusten a tu presupuesto y estilo.</p>
        <p>4. <strong>Instalación y acabados finales</strong>: Supervisa la instalación y asegúrate de los detalles finales.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación adecuada y la selección correcta de materiales y proveedores, puedes tener un suelo de parquet que embellezca tu espacio y se ajuste a tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default PonerParquetCosto;