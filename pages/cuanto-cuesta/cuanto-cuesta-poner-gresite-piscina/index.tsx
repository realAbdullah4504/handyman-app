
import Head from 'next/head';

const GresitePiscinaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta poner gresite en una piscina? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos típicos asociados con la instalación de gresite en piscinas. Obtén información sobre el tamaño de la piscina, el tipo de gresite seleccionado, la preparación del área y otros factores que pueden influir en el presupuesto para renovar tu piscina con gresite."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-poner-gresite-piscina`}
        />
       
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">
        ¿Cuánto cuesta poner gresite en una piscina?
      </h1>

      <section className="mb-8">
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md">
          <p className="text-xl font-bold mb-2">Costo por Instalación: Variable</p>
          <p>El precio puede variar según el tamaño de la piscina, el tipo de gresite seleccionado, la preparación del área, la ubicación geográfica y otros factores.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño de la Piscina</li>
          <li>Tipo de Gresite Seleccionado</li>
          <li>Preparación del Área</li>
          <li>Ubicación Geográfica</li>
        </ul>
      </section>

      <section>
        <p className="text-lg">
          La instalación de gresite es una opción popular para renovar piscinas, ofreciendo durabilidad y estética. Obtener varios presupuestos te permitirá comparar y seleccionar la mejor opción para tu proyecto.
        </p>
      </section>
    </div>
  );
};

export default GresitePiscinaCoste;