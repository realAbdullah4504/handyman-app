
import Head from 'next/head';

const SaneamientoCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta el saneamiento? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el saneamiento y cómo planificar tu presupuesto para esta tarea."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-saneamiento`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta el saneamiento?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Saneamiento Básico: 100€ - 200€ por metro cuadrado</p>
            <p>Incluye limpieza y reparaciones menores de tuberías y desagües.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Saneamiento Completo: 200€ - 500€ por metro cuadrado</p>
            <p>Incluye reemplazo de tuberías principales y reparaciones extensas de sistema de drenaje.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que Afectan los Costos</h2>
        <ul className="list-disc list-inside">
          <li>Estado Actual: Condición general del sistema de saneamiento.</li>
          <li>Alcance de Reparaciones: Desde limpieza básica hasta reemplazos completos.</li>
          <li>Accesibilidad: Dificultad para acceder a las áreas de trabajo.</li>
          <li>Ubicación: Precios pueden variar según la ubicación geográfica y la oferta de servicios.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios Promedio para Saneamiento</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Saneamiento Básico</strong>: 100€ - 200€ por metro cuadrado, incluyendo limpieza y reparaciones menores.
          </li>
          <li>
            <strong>Saneamiento Completo</strong>: 200€ - 500€ por metro cuadrado, incluyendo reemplazo de tuberías principales y reparaciones extensas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Presupuesto</h2>
        <p>1. <strong>Inspección Inicial</strong>: Evaluación detallada del estado del sistema de saneamiento.</p>
        <p>2. <strong>Solicitar Cotizaciones</strong>: Obtener estimaciones de varios proveedores de servicios de saneamiento.</p>
        <p>3. <strong>Consideraciones Adicionales</strong>: Incluir costos de materiales y tiempo de trabajo en el presupuesto.</p>
        <p>4. <strong>Selección del Proveedor</strong>: Elegir un proveedor con experiencia y garantía en trabajos de saneamiento.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar cuidadosamente el saneamiento, puedes mantener tus sistemas de tuberías y desagües en buen estado, dentro de tu presupuesto.
        </p>
      </section>
    </div>
  );
};

export default SaneamientoCoste;