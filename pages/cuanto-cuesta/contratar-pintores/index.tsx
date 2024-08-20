import Head from "next/head";

const PaintersCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta contratar pintores? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con contratar pintores para pintar tu casa o espacio comercial y cómo presupuestar para este tipo de servicio."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/contratar-pintores`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta contratar pintores?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura Interior: €800 - €2,000
						</p>
						<p>
							Incluye mano de obra para pintura de paredes y
							techos.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura Exterior: €1,500 - €5,000 o más
						</p>
						<p>
							Incluye preparación de superficies y pintura
							exterior de la casa.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tamaño del Área: Metros cuadrados a pintar.</li>
					<li>
						Estado de las Superficies: Necesidad de reparaciones o
						preparación especial.
					</li>
					<li>
						Tipo de Pintura: Calidad y tipo de pintura requerida.
					</li>
					<li>
						Ubicación y Accesibilidad: Impacto en la logística y
						costos de transporte.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Contratar Pintores
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Pintura Interior</strong>: €800 - €2,000,
						incluyendo mano de obra para pintura de paredes y
						techos.
					</li>
					<li>
						<strong>Pintura Exterior</strong>: €1,500 - €5,000 o
						más, incluyendo preparación de superficies y pintura
						exterior de la casa.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Medición y Evaluación</strong>: Calcula el área
					total a pintar y evalúa el estado de las superficies.
				</p>
				<p>
					2. <strong>Selección de Pintores</strong>: Obtén referencias
					y cotizaciones de varios pintores profesionales.
				</p>
				<p>
					3. <strong>Detalle del Trabajo</strong>: Asegúrate de
					incluir detalles como tipo de pintura y número de capas
					requeridas.
				</p>
				<p>
					4. <strong>Acuerdos por Escrito</strong>: Confirma los
					términos y condiciones del trabajo por escrito antes de
					comenzar.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar para contratar
					pintores, puedes mejorar la apariencia y el valor de tu
					propiedad dentro de tu presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default PaintersCost;
