import Head from 'next/head';

const CuantoCuestaRotular = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta rotular? - Oficios24</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el rotulado de negocios y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-rotular`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta rotular?
      </h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rotulación básica: €100 - €500</p>
            <p>Incluye diseño y rotulado de letras básicas.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Rotulación avanzada: €500 - €2,000</p>
            <p>Para rotulado con gráficos complejos o iluminación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de rotulado: Vinilo, iluminado, con gráficos, etc.</li>
          <li>Tamaño y complejidad: Área total a rotular y detalles gráficos.</li>
          <li>Ubicación: Interior o exterior del edificio.</li>
          <li>Materiales: Calidad del vinilo o materiales utilizados.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Precios promedio de rotulación
        </h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rotulación básica</strong>: €100 - €500, incluye diseño y letras básicas.
          </li>
          <li>
            <strong>Rotulación avanzada</strong>: €500 - €2,000, para rotulado con gráficos complejos o iluminación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación de necesidades</strong>: Determinar el tipo de rotulado y diseño requerido.</p>
        <p>2. <strong>Consultas y comparaciones</strong>: Obtener presupuestos de varios proveedores de rotulación.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Revisar trabajos anteriores y garantías ofrecidas.</p>
        <p>4. <strong>Instalación profesional</strong>: Contratar a especialistas en rotulación con experiencia.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y evaluación de opciones, puedes garantizar un rotulado efectivo dentro de tu presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default CuantoCuestaRotular;
