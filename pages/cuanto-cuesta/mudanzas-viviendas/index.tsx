import Head from "next/head";

const MudanzasViviendasPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta una mudanza de vivienda? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con una mudanza de vivienda y cómo planificar tu presupuesto para este servicio."
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/mudanzas-viviendas`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta una mudanza de vivienda?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Mudanza Básica: €300 - €600
						</p>
						<p>Incluye transporte y mano de obra básica.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Mudanza Compleja: €600 - €1,200
						</p>
						<p>
							Incluye embalaje, transporte especializado y montaje
							de muebles.
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
						Tamaño de la vivienda: Número de habitaciones y volumen
						de muebles.
					</li>
					<li>
						Distancia y destino: Kilometraje y complejidad del
						acceso.
					</li>
					<li>
						Servicios adicionales: Embalaje, montaje de muebles y
						seguros.
					</li>
					<li>
						Temporada y horario: Precios pueden variar según la
						demanda y día de la semana.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Mudanzas de Vivienda
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Mudanza Básica</strong>: €300 - €600, incluye
						transporte y mano de obra básica.
					</li>
					<li>
						<strong>Mudanza Compleja</strong>: €600 - €1,200,
						incluye embalaje, transporte especializado y montaje de
						muebles.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Revisión de Necesidades</strong>: Evalúa la
					cantidad de muebles y equipo a trasladar.
				</p>
				<p>
					2. <strong>Solicitud de Cotizaciones</strong>: Obtén
					presupuestos detallados de varias empresas de mudanzas.
				</p>
				<p>
					3. <strong>Servicios Adicionales</strong>: Considera costos
					extras como embalaje especializado o seguros de traslado.
				</p>
				<p>
					4. <strong>Reserva con Anticipación</strong>: Asegúrate de
					planificar con tiempo para obtener mejores precios y
					disponibilidad.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una adecuada planificación y entendimiento de los
					costos, puedes realizar tu mudanza de vivienda dentro de tu
					presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default MudanzasViviendasPage;
