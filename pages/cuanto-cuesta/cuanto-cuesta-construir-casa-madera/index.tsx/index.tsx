import Head from 'next/head';

const ConstruirCasaMaderaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta construir una casa de madera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la construcción de una casa de madera y cómo presupuestar para este tipo de proyectos en España."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-construir-casa-madera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta construir una casa de madera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa de Madera Estándar: €70,000 - €150,000</p>
            <p>Construcción básica con materiales estándar y diseño tradicional.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Casa de Madera de Alta Gama: €150,000 - €300,000+</p>
            <p>Construcción personalizada con materiales premium y características especiales.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la casa: Dimensiones y complejidad del diseño.</li>
          <li>Calidad de los materiales: Materiales estándar versus materiales premium.</li>
          <li>Ubicación geográfica: Costos laborales y de materiales según la ubicación del proyecto.</li>
          <li>Personalización y extras: Adiciones como diseños personalizados y características especiales.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para construir una casa de madera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Casa de Madera Estándar</strong>: €70,000 - €150,000, construcción básica con materiales estándar y diseño tradicional.
          </li>
          <li>
            <strong>Casa de Madera de Alta Gama</strong>: €150,000 - €300,000+, construcción personalizada con materiales premium y características especiales.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definir requisitos y diseño</strong>: Determinar claramente las especificaciones y expectativas para el proyecto.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Solicitar estimaciones detalladas de varios constructores y proveedores de materiales.</p>
        <p>3. <strong>Seleccionar materiales y acabados</strong>: Elegir opciones que se ajusten al presupuesto y al diseño deseado.</p>
        <p>4. <strong>Considerar personalización y extras</strong>: Agregar características adicionales según las necesidades y preferencias del cliente.</p>
      </section>

      <section>
        <p className="text-lg">
          Al entender los factores que afectan los costos y planificar adecuadamente, puedes construir una casa de madera que cumpla con tus expectativas y dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default ConstruirCasaMaderaCoste;