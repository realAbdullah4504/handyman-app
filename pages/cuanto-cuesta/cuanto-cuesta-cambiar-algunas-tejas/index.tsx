import Head from 'next/head';

const CambiarAlgunasTejasCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar algunas tejas? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio parcial de tejas en el tejado y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-algunas-tejas`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar algunas tejas?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Básico: 30€ - 50€ por m²</p>
            <p>Incluye tejas estándar y mano de obra básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Cambio Premium: 50€ - 100€ por m²</p>
            <p>Incluye tejas especiales y ajustes detallados.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Tejas: Tejas estándar vs. tejas especiales como cerámicas o de alta resistencia.</li>
          <li>Área a Cambiar: Superficie total en metros cuadrados que requiere reemplazo de tejas.</li>
          <li>Accesibilidad: Complejidad de acceso al tejado y altura.</li>
          <li>Ubicación: Variación de precios según la región y disponibilidad de materiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar Algunas Tejas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Cambio Básico</strong>: 30€ - 50€ por metro cuadrado, incluyendo tejas estándar y mano de obra básica.
          </li>
          <li>
            <strong>Cambio Premium</strong>: 50€ - 100€ por metro cuadrado, incluyendo tejas especiales y ajustes detallados.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Evaluación del Tejado</strong>: Determinar el área exacta y el tipo de tejas necesarias.</p>
        <p>2. <strong>Solicitud de Presupuestos</strong>: Obtener estimaciones de varios contratistas para comparar precios y servicios.</p>
        <p>3. <strong>Selección de Materiales</strong>: Elegir tejas que se adapten al estilo y necesidades de tu tejado.</p>
        <p>4. <strong>Consideraciones de Seguridad</strong>: Asegurarse de cumplir con las normativas de seguridad durante la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el cambio parcial de tejas en tu tejado, puedes garantizar una renovación efectiva y duradera dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CambiarAlgunasTejasCoste;