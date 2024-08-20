import Head from 'next/head';

const MantenimientoSpaCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el mantenimiento de un spa? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados al mantenimiento de un spa y cómo afectan al presupuesto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantenimiento-spa`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el mantenimiento de un spa?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento Anual: 3,000€ - 10,000€</p>
            <p>Costo estimado para el mantenimiento regular de un spa.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparaciones y Extras: Variable</p>
            <p>Costos adicionales para reparaciones inesperadas y mejoras.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Spa y Complejidad.</li>
          <li>Frecuencia de Uso y Demanda.</li>
          <li>Equipamiento y Sistemas de Tratamiento.</li>
          <li>Costos de Mano de Obra Especializada.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Mantenimiento de Spa</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mantenimiento Anual</strong>: 3,000€ - 10,000€, dependiendo del tamaño y la complejidad.
          </li>
          <li>
            <strong>Reparaciones y Extras</strong>: Costos variables para situaciones imprevistas y mejoras.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Beneficios del Mantenimiento Regular</h2>
        <p>1. <strong>Preservación del Equipo</strong>: Prolonga la vida útil y reduce el riesgo de averías.</p>
        <p>2. <strong>Seguridad y Confiabilidad</strong>: Mantén condiciones óptimas de seguridad e higiene.</p>
        <p>3. <strong>Experiencia del Usuario</strong>: Mejora la satisfacción y fidelización de los clientes.</p>
      </section>

      <section>
        <p className="text-lg">
          Invierte en un mantenimiento adecuado para tu spa y asegura un ambiente acogedor y seguro para tus clientes durante todo el año.
        </p>
      </section>
    </div>
  );
};

export default MantenimientoSpaCost;
