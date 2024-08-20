import Head from 'next/head';

const MantenimientoCalefaccionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el mantenimiento de calefacción? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el mantenimiento de sistemas de calefacción y cómo planificar tu presupuesto para este servicio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantenimiento-calefaccion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el mantenimiento de calefacción?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Básico: 100€ - 200€ por sesión</p>
            <p>Incluye revisión anual y limpieza básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Completo: 200€ - 500€ por sesión</p>
            <p>Incluye revisión detallada, ajustes y sustitución de piezas si es necesario.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Sistema: Calderas, radiadores, sistemas de suelo radiante, etc.</li>
          <li>Frecuencia de Mantenimiento: Anual, semestral, etc.</li>
          <li>Proveedor y Ubicación: Variaciones regionales en costos de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Mantenimiento de Calefacción</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Servicio Básico</strong>: 100€ - 200€ por sesión, incluye revisión anual y limpieza básica.
          </li>
          <li>
            <strong>Servicio Completo</strong>: 200€ - 500€ por sesión, incluye revisión detallada y ajustes.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Frecuencia de Mantenimiento</strong>: Determina la necesidad de mantenimiento según el tipo y uso de tu sistema de calefacción.</p>
        <p>2. <strong>Comparación de Proveedores</strong>: Solicita varios presupuestos para comparar costos y servicios ofrecidos.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Valora contratos de mantenimiento anuales para potenciales ahorros a largo plazo.</p>
      </section>

      <section>
        <p className="text-lg">
          El mantenimiento regular de tu sistema de calefacción es crucial para su eficiencia y durabilidad. Planifica tu presupuesto cuidadosamente para evitar problemas futuros.
        </p>
      </section>
    </div>
  );
};

export default MantenimientoCalefaccionCoste;