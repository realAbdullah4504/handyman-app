import Head from 'next/head';

const CortarCespedCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cortar el césped? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el servicio de corte de césped y cómo planificar tu presupuesto para mantener tu jardín."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cortar-cesped`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cortar el césped?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Básico: 20€ - 50€ por sesión</p>
            <p>Incluye corte de césped y limpieza de residuos.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Servicio Completo: 50€ - 100€ por sesión</p>
            <p>Incluye corte, bordeado y fertilización según necesidades.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del jardín o área de césped a cortar.</li>
          <li>Frecuencia del servicio de corte requerido.</li>
          <li>Estado actual del césped y necesidad de servicios adicionales como fertilización o tratamiento contra plagas.</li>
          <li>Accesibilidad del área y nivel de dificultad para el equipo.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Jardín</strong>: Determinar el tamaño y las necesidades específicas del césped.</p>
        <p>2. <strong>Comparación de Precios</strong>: Obtener cotizaciones de varios proveedores de servicios de jardinería.</p>
        <p>3. <strong>Consideraciones de Mantenimiento</strong>: Planificar servicios regulares para mantener el césped en condiciones óptimas.</p>
        <p>4. <strong>Presupuesto Flexible</strong>: Incluir margen para servicios adicionales según sea necesario.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener el césped cortado y cuidado puede mejorar significativamente la apariencia de tu jardín y propiedad. Planifica tu presupuesto con cuidado para asegurar un mantenimiento regular y efectivo.
        </p>
      </section>
    </div>
  );
};

export default CortarCespedCoste;