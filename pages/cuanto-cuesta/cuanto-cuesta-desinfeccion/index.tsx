import Head from 'next/head';

const DesinfeccionCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta la desinfección? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados a los servicios de desinfección y cómo planificar el proceso para garantizar la higiene y seguridad en tu hogar o negocio."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-desinfeccion`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta la desinfección?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Desinfección Básica: 50€ - 150€</p>
            <p>Incluye desinfección estándar de superficies comunes.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Desinfección Completa: 150€ - 300€</p>
            <p>Incluye desinfección detallada de todas las áreas, incluyendo espacios difíciles de alcanzar.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores a Considerar</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño del Espacio: El costo varía según la superficie total a desinfectar.</li>
          <li>Tipo de Superficie: Algunas superficies requieren productos o técnicas especiales.</li>
          <li>Nivel de Contaminación: Áreas con alta exposición a contaminantes pueden necesitar tratamientos más intensivos.</li>
          <li>Frecuencia del Servicio: Contratos recurrentes pueden ofrecer descuentos.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Costos Promedio</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Desinfección Básica</strong>: 50€ - 150€, incluye tratamiento estándar de superficies comunes.
          </li>
          <li>
            <strong>Desinfección Completa</strong>: 150€ - 300€, incluye tratamiento detallado de todas las áreas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación del Proceso</h2>
        <p>1. <strong>Evaluar Necesidades</strong>: Determinar las áreas que requieren desinfección y la frecuencia del servicio.</p>
        <p>2. <strong>Solicitar Presupuestos</strong>: Obtener cotizaciones de múltiples proveedores para comparar precios y servicios ofrecidos.</p>
        <p>3. <strong>Seleccionar Productos</strong>: Asegurarse de que los productos utilizados sean seguros y efectivos.</p>
        <p>4. <strong>Planificar la Ejecución</strong>: Coordinar el horario de desinfección para minimizar interrupciones en el hogar o negocio.</p>
      </section>

      <section>
        <p className="text-lg">
          Mantener un ambiente limpio y desinfectado es crucial para la salud y seguridad. Planifica cuidadosamente para encontrar el equilibrio entre costo y calidad del servicio.
        </p>
      </section>
    </div>
  );
};

export default DesinfeccionCoste;