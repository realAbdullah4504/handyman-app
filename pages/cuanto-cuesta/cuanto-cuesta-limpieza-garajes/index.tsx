import Head from 'next/head';

const LimpiezaGarajesCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la limpieza de garajes? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la limpieza de garajes y cómo mantener un ambiente limpio y seguro para tus espacios de estacionamiento."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-limpieza-garajes`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la limpieza de garajes?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Estándar: 50€ - 100€ por garaje</p>
            <p>Incluye limpieza de suelos, paredes y eliminación de residuos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Limpieza Profunda: 100€ - 200€ por garaje</p>
            <p>Incluye limpieza exhaustiva de manchas difíciles y mantenimiento preventivo.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Garaje: Área total a limpiar, incluyendo número de plazas de aparcamiento.</li>
          <li>Estado Actual: Nivel de suciedad y necesidades específicas de limpieza.</li>
          <li>Servicios Adicionales: Eliminación de manchas de aceite, limpieza de techos y ventilación.</li>
          <li>Frecuencia de Limpieza: Programas de limpieza regular versus intervenciones puntuales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precio Promedio para la Limpieza de Garajes</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Limpieza Estándar</strong>: 50€ - 100€ por garaje, incluyendo limpieza básica de suelos y paredes.
          </li>
          <li>
            <strong>Limpieza Profunda</strong>: 100€ - 200€ por garaje, incluyendo limpieza intensiva de manchas y mantenimiento preventivo.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evalúa Necesidades de Limpieza</strong>: Determina el nivel de limpieza requerido y las áreas específicas a tratar.</p>
        <p>2. <strong>Solicita Cotizaciones</strong>: Obten presupuestos detallados de empresas especializadas en limpieza de garajes.</p>
        <p>3. <strong>Considera Mantenimiento Preventivo</strong>: Programa limpiezas regulares para evitar acumulación de suciedad y daños a largo plazo.</p>
        <p>4. <strong>Selecciona Proveedor de Confianza</strong>: Elige un proveedor con experiencia en limpieza de garajes y buenas referencias.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener la limpieza regular en garajes no solo mejora la apariencia, sino que también contribuye a la seguridad y prolonga la vida útil de las instalaciones.
        </p>
      </section>
    </div>
  );
};

export default LimpiezaGarajesCoste;
