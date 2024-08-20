
import Head from 'next/head';

const MantenerJardinCost = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta mantener un jardín? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados al mantenimiento de jardines y cómo planificar tu presupuesto adecuadamente."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-mantener-jardin`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta mantener un jardín?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento Básico: 50€ - 200€ al mes</p>
            <p>Incluye cortar el césped, poda de arbustos y limpieza general.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Mantenimiento Completo: 200€ - 500€ al mes</p>
            <p>Incluye mantenimiento básico más fertilización y tratamiento de plagas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño del jardín.</li>
          <li>Tipo de plantas y césped.</li>
          <li>Frecuencia de mantenimiento requerida.</li>
          <li>Necesidad de servicios adicionales (fertilización, control de plagas, etc.).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio de Mantenimiento de Jardín</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Mantenimiento Básico</strong>: 50€ - 200€ al mes, incluye cortar el césped, poda de arbustos y limpieza general.
          </li>
          <li>
            <strong>Mantenimiento Completo</strong>: 200€ - 500€ al mes, incluye mantenimiento básico más fertilización y tratamiento de plagas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Consejos para el Mantenimiento del Jardín</h2>
        <p>1. <strong>Planificación Estacional</strong>: Programa el mantenimiento según las necesidades estacionales de tu jardín.</p>
        <p>2. <strong>Contratación de Profesionales</strong>: Considera servicios profesionales para tareas especializadas como la poda de árboles.</p>
        <p>3. <strong>Uso Eficiente de Recursos</strong>: Implementa prácticas sostenibles como el uso de agua de lluvia y abonos orgánicos.</p>
        <p>4. <strong>Monitoreo Regular</strong>: Vigila la salud de tus plantas para abordar problemas antes de que se conviertan en costosas reparaciones.</p>
      </section>

      <section>
        <p className="text-lg">
          Calcula el presupuesto para mantener un jardín según tus necesidades específicas y asegúrate de considerar todos los factores relevantes para un jardín saludable y estéticamente agradable.
        </p>
      </section>
    </div>
  );
};

export default MantenerJardinCost;