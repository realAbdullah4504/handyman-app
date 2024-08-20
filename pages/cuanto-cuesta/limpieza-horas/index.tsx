import Head from "next/head";

const HourlyCleaning = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta la limpieza por horas? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la limpieza por horas y cómo contratar servicios de limpieza según tus necesidades."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/limpieza-horas`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta la limpieza por horas?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Limpieza Básica: €10 - €20 por hora
						</p>
						<p>
							Servicio estándar de limpieza con productos y
							equipos proporcionados por el cliente.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Limpieza Profesional: €20 - €40+ por hora
						</p>
						<p>
							Servicio de limpieza profesional con productos y
							equipos incluidos.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>
						Área Total a Limpiar: Tamaño y características del
						espacio.
					</li>
					<li>
						Frecuencia del Servicio: Costos pueden variar según la
						frecuencia de las visitas de limpieza.
					</li>
					<li>
						Tipo de Limpieza: Limpieza general, a fondo,
						especializada, etc.
					</li>
					<li>
						Equipamiento y Productos: Costos adicionales por el uso
						de equipos y productos específicos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Limpieza por Horas
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Limpieza Básica</strong>: €10 - €20 por hora,
						servicio estándar con productos proporcionados por el
						cliente.
					</li>
					<li>
						<strong>Limpieza Profesional</strong>: €20 - €40+ por
						hora, servicio profesional con productos y equipos
						incluidos.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Servicio de Limpieza
				</h2>
				<p>
					1. <strong>Evaluar Necesidades de Limpieza</strong>:
					Determina qué tipo y frecuencia de limpieza necesitas.
				</p>
				<p>
					2. <strong>Presupuesto y Comparación</strong>: Obtén
					cotizaciones de varios servicios de limpieza para comparar
					precios y servicios.
				</p>
				<p>
					3. <strong>Confirmación de Servicio</strong>: Acuerda los
					términos del servicio y asegúrate de que todo esté claro
					antes de comenzar.
				</p>
				<p>
					4. <strong>Comunicación Continua</strong>: Mantén una
					comunicación abierta con el servicio de limpieza para
					garantizar la satisfacción continua.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al contratar servicios de limpieza por horas, considera
					todos los factores involucrados para obtener el mejor
					servicio dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default HourlyCleaning;
