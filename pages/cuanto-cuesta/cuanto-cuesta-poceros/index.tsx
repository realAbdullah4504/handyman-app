import Head from 'next/head';

const PocerosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el servicio de pocería? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el servicio de pocería y cómo planificar tu presupuesto para reparaciones y mantenimiento de sistemas de alcantarillado."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poceros`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el servicio de pocería?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 100€ - 300€ por visita</p>
            <p>Incluye servicios estándar como desatascos y mantenimiento básico.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 300€ - 1000€ por visita</p>
            <p>Incluye reparaciones complejas y trabajos especializados en sistemas de alcantarillado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Gravedad del Problema: Impacto del tipo y severidad del problema de alcantarillado.</li>
          <li>Tipo de Trabajo: Diferencias entre desatascos simples y reparaciones estructurales.</li>
          <li>Tamaño del Sistema: Longitud y complejidad del sistema de alcantarillado a tratar.</li>
          <li>Accesibilidad: Dificultad para acceder a las áreas afectadas dentro del sistema de alcantarillado.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Servicios de Pocería</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 100€ - 300€ por visita, incluyendo servicios estándar como desatascos.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 300€ - 1000€ por visita, incluyendo reparaciones complejas y trabajos especializados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Diagnóstico Inicial</strong>: Evaluación del problema de alcantarillado y discusión de opciones de reparación.</p>
        <p>2. <strong>Selección de Servicio</strong>: Elección del tipo de servicio según la gravedad y naturaleza del problema.</p>
        <p>3. <strong>Solicitud de Presupuestos</strong>: Obtención de presupuestos detallados de varios proveedores para comparar costos y servicios.</p>
        <p>4. <strong>Ejecución del Trabajo</strong>: Coordinación de las fechas de trabajo y asegurarse de la calidad y satisfacción del trabajo realizado.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar el servicio de pocería, puedes garantizar que las reparaciones y mantenimiento del sistema de alcantarillado se realicen de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default PocerosCoste;