import Head from 'next/head';

const AmueblarCocinaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta amueblar una cocina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con amueblar una cocina, y cómo presupuestar para la compra de muebles de cocina."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-amueblar-cocina`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta amueblar una cocina?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Amueblado Básico: €3,000 - €10,000</p>
            <p>Para muebles de cocina estándar y funcionalidad básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Amueblado de Alta Gama: €10,000 - €30,000+</p>
            <p>Incluye muebles personalizados y materiales de alta calidad.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Dimensiones y diseño de la cocina.</li>
          <li>Calidad de los materiales (melamina, madera, etc.).</li>
          <li>Accesorios y complementos (encimeras, electrodomésticos integrados).</li>
          <li>Costos adicionales como instalación y transporte.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Componentes típicos del amueblado de una cocina</h2>
        <ul className="list-disc list-inside">
          <li>Muebles de almacenamiento (armarios, cajones).</li>
          <li>Encimeras y superficies de trabajo.</li>
          <li>Electrodomésticos integrados o independientes.</li>
          <li>Elementos de decoración y funcionalidad (iluminación, grifería).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Definición de necesidades</strong>: Determina las características y funcionalidades clave.</p>
        <p>2. <strong>Comparación de proveedores</strong>: Solicita presupuestos detallados y compara opciones de muebles y accesorios.</p>
        <p>3. <strong>Consideraciones adicionales</strong>: Prevé un margen para imprevistos y ajustes durante la instalación.</p>
      </section>

      <section>
        <p className="text-lg">
          Con una planificación cuidadosa y la elección adecuada de muebles, puedes amueblar tu cocina de manera funcional y estética dentro de tu presupuesto disponible.
        </p>
      </section>
    </div>
  );
};

export default AmueblarCocinaCosto;
