import Head from 'next/head';

const InstalarPuertasCortafuegosCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar puertas cortafuegos? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la instalación de puertas cortafuegos y cómo planificar tu presupuesto para mejorar la seguridad contra incendios en edificaciones."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-puertas-cortafuegos`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar puertas cortafuegos?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: 300€ - 500€ por puerta</p>
            <p>Incluye la puerta cortafuegos estándar y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Avanzada: 500€ - 1000€ por puerta</p>
            <p>Incluye puertas de alta resistencia y técnicas avanzadas de instalación.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Puerta: Puertas estándar vs. puertas reforzadas con diferentes niveles de resistencia al fuego.</li>
          <li>Cantidad de Puertas: El número total de puertas cortafuegos que se instalarán.</li>
          <li>Accesorios y Herrajes: Costos adicionales para accesorios como cerraduras y bisagras certificadas.</li>
          <li>Normativas Locales: Cumplir con los estándares de seguridad contra incendios locales puede afectar los costos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Instalación de Puertas Cortafuegos</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: 300€ - 500€ por puerta, incluyendo la puerta estándar y la instalación básica.
          </li>
          <li>
            <strong>Instalación Avanzada</strong>: 500€ - 1000€ por puerta, incluyendo puertas de alta resistencia y técnicas avanzadas de instalación.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación de Seguridad</strong>: Determina las áreas críticas que requieren puertas cortafuegos para cumplir con las normativas de seguridad.</p>
        <p>2. <strong>Obtención de Presupuestos</strong>: Solicita múltiples presupuestos de proveedores de puertas cortafuegos para comparar costos y servicios.</p>
        <p>3. <strong>Consideración de Calidad</strong>: Elige puertas con certificaciones de seguridad y proveedores confiables para asegurar la protección efectiva contra incendios.</p>
        <p>4. <strong>Instalación Profesional</strong>: Contrata instaladores con experiencia en puertas cortafuegos para garantizar la correcta instalación y cumplimiento de normativas.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente la instalación de puertas cortafuegos, puedes mejorar significativamente la seguridad contra incendios de tu edificación, asegurando la protección adecuada dentro del presupuesto establecido.
        </p>
      </section>
    </div>
  );
};

export default InstalarPuertasCortafuegosCoste;