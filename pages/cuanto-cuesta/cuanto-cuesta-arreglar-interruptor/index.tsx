import Head from 'next/head';

const ArreglarInterruptorCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta arreglar un interruptor? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la reparación de interruptores eléctricos y cómo presupuestar para este tipo de servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-arreglar-interruptor`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta arreglar un interruptor?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Básica: €50 - €100 por interruptor</p>
            <p>Incluye diagnóstico y reparación de problemas menores.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Reparación Compleja: €100 - €200 por interruptor</p>
            <p>Incluye reemplazo de partes y solución de problemas eléctricos más complicados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Naturaleza y gravedad del problema eléctrico.</li>
          <li>Necesidad de reemplazo de componentes.</li>
          <li>Costos de mano de obra y diagnóstico inicial.</li>
          <li>Accesibilidad del interruptor y ubicación.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tipos de Interruptores</h2>
        <ul className="list-disc list-inside">
          <li>Interruptores de luz estándar.</li>
          <li>Interruptores táctiles y conmutadores especiales.</li>
          <li>Interruptores integrados en sistemas domóticos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluación inicial</strong>: Identificar el problema específico y el tipo de interruptor.</p>
        <p>2. <strong>Solicitud de presupuestos</strong>: Obtener estimaciones detalladas de electricistas y servicios de reparación.</p>
        <p>3. <strong>Comparación de opciones</strong>: Valorar la experiencia y la reputación de los proveedores de servicios.</p>
        <p>4. <strong>Garantía y servicio post-reparación</strong>: Confirmar garantías ofrecidas y políticas de seguimiento.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes gestionar eficazmente la reparación de interruptores dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ArreglarInterruptorCosto;
