import Head from 'next/head';

const CambiarCalderaCosto = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta cambiar una caldera? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el cambio de una caldera y cómo seleccionar la caldera adecuada para tu hogar."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-cambiar-caldera`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta cambiar una caldera?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Caldera Estándar: 1,000€ - 2,500€</p>
            <p>Incluye la caldera y la instalación básica.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Caldera de Alta Gama: 2,500€ - 5,000€</p>
            <p>Incluye caldera con funciones avanzadas y instalación especializada.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tipo de Caldera: Estándar, condensación, de alta eficiencia energética, etc.</li>
          <li>Tamaño y Potencia: Dimensiones adecuadas para cubrir las necesidades de calefacción de tu hogar.</li>
          <li>Marca y Modelo: Marcas reconocidas con garantía y servicio post-venta.</li>
          <li>Complejidad de la Instalación: Cambio de ubicación, adaptación de tuberías, etc.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Cambiar una Caldera</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Caldera Estándar</strong>: 1,000€ - 2,500€, incluyendo caldera y instalación básica.
          </li>
          <li>
            <strong>Caldera de Alta Gama</strong>: 2,500€ - 5,000€, incluyendo caldera con funciones avanzadas y instalación especializada.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para la Selección</h2>
        <p>1. <strong>Evaluación de Necesidades</strong>: Determina la potencia y capacidad adecuada para tu hogar.</p>
        <p>2. <strong>Investigación de Marcas</strong>: Compara opiniones y reputación de diferentes marcas de calderas.</p>
        <p>3. <strong>Consultar a Profesionales</strong>: Obtén múltiples presupuestos y opiniones de instaladores certificados.</p>
        <p>4. <strong>Considerar Eficiencia Energética</strong>: Opta por calderas con certificación energética para ahorro a largo plazo.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el cambio de una caldera, puedes mejorar la eficiencia energética y el confort de tu hogar mientras te mantienes dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default CambiarCalderaCosto;