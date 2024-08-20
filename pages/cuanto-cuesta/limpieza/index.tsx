import Head from "next/head";

const LimpiezaPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta la limpieza? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con servicios de limpieza para hogares y oficinas, y cómo planificar el presupuesto para mantener tu espacio limpio."
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/limpieza`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta la limpieza?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Limpieza básica: €15 - €25 por hora
						</p>
						<p>
							Incluye limpieza general de superficies y áreas
							comunes.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Limpieza profunda: €25 - €35 por hora
						</p>
						<p>
							Incluye limpieza detallada, incluyendo áreas
							difíciles de alcanzar.
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
						Tamaño del espacio: Áreas más grandes pueden requerir
						más tiempo de limpieza.
					</li>
					<li>
						Tipo de limpieza: Básica vs. profunda, incluyendo
						servicios adicionales como limpieza de ventanas.
					</li>
					<li>
						Frecuencia: Precios pueden variar según la regularidad
						del servicio de limpieza.
					</li>
					<li>
						Ubicación: Costos pueden variar según la ubicación
						geográfica y la disponibilidad de servicios.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Servicios de Limpieza
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Limpieza básica</strong>: €15 - €25 por hora,
						incluyendo limpieza general de superficies y áreas
						comunes.
					</li>
					<li>
						<strong>Limpieza profunda</strong>: €25 - €35 por hora,
						incluyendo limpieza detallada y áreas difíciles de
						alcanzar.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Servicios de Limpieza
				</h2>
				<p>
					1. <strong>Selecciona el Tipo de Limpieza</strong>: Decide
					entre limpieza básica o profunda según tus necesidades.
				</p>
				<p>
					2. <strong>Obtén Varios Presupuestos</strong>: Comparar
					precios y servicios ofrecidos por diferentes empresas de
					limpieza.
				</p>
				<p>
					3. <strong>Establece una Programación</strong>: Determina la
					frecuencia y el horario de limpieza que mejor se adapte a tu
					espacio.
				</p>
				<p>
					4. <strong>Revisa el Servicio</strong>: Asegúrate de revisar
					la calidad del servicio recibido para mantener la
					satisfacción continua.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación adecuada, los servicios de limpieza
					pueden mantener tu hogar u oficina impecable mientras se
					ajustan a tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default LimpiezaPage;
