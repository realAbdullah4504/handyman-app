
import Head from 'next/head';

const CocinaNuevaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta una cocina nueva? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la instalación de una cocina nueva y cómo presupuestar para esta renovación."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cocina-nueva`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta una cocina nueva?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cocina básica: €3,000 - €6,000+</p>
            <p>Incluye gabinetes estándar y electrodomésticos económicos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cocina de alta gama: €10,000 - €20,000+</p>
            <p>Incluye gabinetes personalizados y electrodomésticos de lujo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Calidad y diseño de los gabinetes y encimeras.</li>
          <li>Tamaño de la cocina y complejidad de la distribución.</li>
          <li>Tipo y marca de los electrodomésticos seleccionados.</li>
          <li>Materiales utilizados para pisos y paredes.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Pasos para presupuestar</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determina tus requisitos específicos para la nueva cocina.</p>
        <p>2. <strong>Planificación del diseño</strong>: Diseña la distribución y el estilo de la cocina que se ajuste a tu presupuesto.</p>
        <p>3. <strong>Selección de materiales y electrodomésticos</strong>: Elige productos que se adapten a tu estilo y necesidades.</p>
        <p>4. <strong>Obtención de presupuestos</strong>: Solicita presupuestos detallados de varios contratistas y proveedores.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la selección adecuada de productos, puedes tener la cocina de tus sueños dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CocinaNuevaCosto;
