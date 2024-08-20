import Head from 'next/head';

const InstalarPuertaEmergenciaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar una puerta de emergencia? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de una puerta de emergencia y cómo planificar tu presupuesto para este tipo de proyectos."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-puerta-emergencia`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar una puerta de emergencia?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 500€ - 1,500€</p>
            <p>Incluye puerta estándar con mecanismo de apertura de emergencia.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 1,500€ - 3,000€</p>
            <p>Incluye puerta de alta resistencia y sistema de seguridad avanzado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Puerta: Desde puertas estándar hasta puertas con características de seguridad adicionales.</li>
          <li>Material y Calidad: Elección de materiales duraderos y resistentes al fuego.</li>
          <li>Instalación y Configuración: Complejidad de la instalación y requisitos específicos del lugar.</li>
          <li>Normativas y Cumplimiento: Requisitos locales de seguridad y accesibilidad.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalar una Puerta de Emergencia</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 500€ - 1,500€, incluyendo puerta estándar con mecanismo de apertura de emergencia.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 1,500€ - 3,000€, incluyendo puerta de alta resistencia y sistema de seguridad avanzado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Requisitos de Seguridad</strong>: Determina las necesidades específicas de seguridad y accesibilidad.</p>
        <p>2. <strong>Solicitud de Cotizaciones</strong>: Obtén múltiples presupuestos de proveedores de puertas y servicios de instalación.</p>
        <p>3. <strong>Cumplimiento Normativo</strong>: Asegúrate de cumplir con las regulaciones locales de seguridad contra incendios y emergencias.</p>
        <p>4. <strong>Selección de Puerta y Materiales</strong>: Elige puertas y materiales que cumplan con los estándares de seguridad y sean adecuados para tu espacio.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar y presupuestar cuidadosamente la instalación de una puerta de emergencia, puedes mejorar la seguridad y cumplir con las normativas locales, garantizando la protección de las personas y los bienes en caso de emergencia.
        </p>
      </section>
    </div>
  );
};

export default InstalarPuertaEmergenciaCoste;
