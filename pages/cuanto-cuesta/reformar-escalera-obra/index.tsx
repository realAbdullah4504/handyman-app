import Head from 'next/head';

const ReformarEscaleraObra = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta reformar una escalera de obra? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reforma de una escalera de obra, incluyendo materiales, mano de obra y factores que afectan los costos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/reformar-escalera-obra`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta reformar una escalera de obra?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Básica: 500€ - 1,000€</p>
            <p>Incluye pintura y pequeñas reparaciones.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reforma Completa: 2,000€ - 5,000€</p>
            <p>Incluye cambio de material y diseño.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Material de la Escalera: Diferencias en costos entre madera, hormigón, mármol, etc.</li>
          <li>Complejidad de la Reforma: Número de escalones, altura, y detalles arquitectónicos.</li>
          <li>Accesorios: Instalación de barandillas, pasamanos u otros elementos.</li>
          <li>Ubicación: Variaciones regionales en costos de mano de obra y materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Reformar una Escalera de Obra</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Reforma Básica</strong>: 500€ - 1,000€, incluyendo pintura y pequeñas reparaciones.
          </li>
          <li>
            <strong>Reforma Completa</strong>: 2,000€ - 5,000€, incluyendo cambio de material y diseño.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selecciona el Material</strong>: Elige un material que se ajuste a tu presupuesto y estilo.</p>
        <p>2. <strong>Obtén Múltiples Cotizaciones</strong>: Solicita presupuestos detallados de varios contratistas para comparar precios y servicios.</p>
        <p>3. <strong>Considera el Diseño</strong>: Piensa en el diseño y los detalles arquitectónicos que deseas.</p>
      </section>

      <section>
        <p className="text-lg">
          Reformar una escalera de obra puede mejorar significativamente la apariencia y funcionalidad de tu espacio. Asegúrate de considerar todos los factores antes de comenzar el proyecto.
        </p>
      </section>
    </div>
  );
};

export default ReformarEscaleraObra;
