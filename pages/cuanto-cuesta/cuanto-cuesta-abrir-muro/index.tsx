import Head from 'next/head';

const AbrirMuroCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta abrir un muro? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con la apertura de muros y cómo planificar tu presupuesto para este tipo de proyecto."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-abrir-muro`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta abrir un muro?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Básico: 200€ - 500€ por metro cuadrado</p>
            <p>Incluye apertura estándar de muros sin elementos estructurales adicionales.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Coste Avanzado: 500€ - 1000€ por metro cuadrado</p>
            <p>Incluye apertura con estructuras de refuerzo, cambios estructurales o eliminación de elementos.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Muro: Hormigón, ladrillo, piedra, etc.</li>
          <li>Dimensiones del Muro: Altura, longitud y grosor.</li>
          <li>Elementos a Eliminar: Necesidad de desmontar instalaciones o estructuras existentes.</li>
          <li>Localización y Accesibilidad: Impacto en costos de transporte y logística.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Abrir un Muro</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Coste Básico</strong>: 200€ - 500€ por metro cuadrado, incluyendo apertura estándar de muros.
          </li>
          <li>
            <strong>Coste Avanzado</strong>: 500€ - 1000€ por metro cuadrado, incluyendo apertura con modificaciones estructurales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación y Diseño</strong>: Definir alcance de la apertura, impacto en la estructura.</p>
        <p>2. <strong>Obtención de Permisos</strong>: Asegurar cumplimiento de normativas locales y permisos necesarios.</p>
        <p>3. <strong>Comparación de Presupuestos</strong>: Solicitar cotizaciones de diferentes contratistas especializados.</p>
        <p>4. <strong>Gestión de Residuos</strong>: Planificar eliminación adecuada de escombros y materiales.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente y presupuestar la apertura de un muro, puedes asegurar que el proyecto se realice de manera efectiva y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default AbrirMuroCoste;
