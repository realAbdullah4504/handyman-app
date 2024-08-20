import Head from 'next/head';

const MantenimientoCalderasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el mantenimiento de calderas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el mantenimiento regular de calderas y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantenimiento-calderas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el mantenimiento de calderas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento Básico: 100€ - 200€ al año</p>
            <p>Incluye revisión anual y ajustes menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento Completo: 200€ - 400€ al año</p>
            <p>Incluye limpieza, ajustes y reemplazo de piezas menores.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado de la Caldera: Antigüedad y condiciones generales del equipo.</li>
          <li>Tipos de Servicio: Básico vs. Completo, con diferentes niveles de cobertura.</li>
          <li>Marcas y Modelos: Varían los precios según el fabricante y especificaciones técnicas.</li>
          <li>Contratos de Mantenimiento: Anuales o periódicos, con servicios adicionales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Mantenimiento de Calderas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mantenimiento Básico</strong>: 100€ - 200€ al año, incluye revisión anual y ajustes menores.
          </li>
          <li>
            <strong>Mantenimiento Completo</strong>: 200€ - 400€ al año, incluye limpieza, ajustes y reemplazo de piezas menores.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Revisar Contrato de Mantenimiento</strong>: Detalles específicos de servicios incluidos y excluidos.</p>
        <p>2. <strong>Comparar Ofertas</strong>: Obtener varios presupuestos y comparar costos y beneficios.</p>
        <p>3. <strong>Programación de Revisiones</strong>: Planificar las revisiones para mantener la eficiencia y prolongar la vida útil de la caldera.</p>
      </section>

      <section>
        <p className="text-lg">
          El costo del mantenimiento de calderas puede variar significativamente según varios factores. Es importante considerar estos aspectos para realizar una elección informada y económica.
        </p>
      </section>
    </div>
  );
};

export default MantenimientoCalderasCoste;