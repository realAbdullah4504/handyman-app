import Head from 'next/head';

const CortarEncimera = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cortar una encimera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con cortar una encimera, incluyendo materiales, mano de obra y factores que afectan los costos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cortar-encimera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cortar una encimera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Corte Básico: 50€ - 100€</p>
            <p>Incluye cortes sencillos y materiales estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Corte Especializado: 100€ - 200€</p>
            <p>Incluye cortes precisos y materiales especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Material: Diferencias en costos entre encimeras de granito, mármol, cuarzo, etc.</li>
          <li>Complejidad del Corte: Número de cortes y detalles requeridos.</li>
          <li>Accesorios: Instalación de fregaderos, grifos u otros accesorios.</li>
          <li>Ubicación: Variaciones regionales en costos de mano de obra y materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cortar una Encimera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Corte Básico</strong>: 50€ - 100€, incluyendo cortes sencillos y materiales estándar.
          </li>
          <li>
            <strong>Corte Especializado</strong>: 100€ - 200€, incluyendo cortes precisos y materiales especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Selecciona el Material</strong>: Escoge un material de encimera que se ajuste a tus necesidades y presupuesto.</p>
        <p>2. <strong>Obtén Múltiples Cotizaciones</strong>: Solicita presupuestos detallados de varios proveedores para comparar precios y servicios.</p>
        <p>3. <strong>Considera Extras</strong>: Evalúa la posibilidad de agregar accesorios o servicios adicionales.</p>
      </section>

      <section>
        <p className="text-lg">
          Cortar una encimera puede mejorar significativamente la funcionalidad y estética de tu cocina. Asegúrate de considerar todos los factores antes de tomar una decisión final.
        </p>
      </section>
    </div>
  );
};

export default CortarEncimera;
