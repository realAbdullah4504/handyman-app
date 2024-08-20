import Head from "next/head";

const ConstruirMuroBloquePage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta construir un muro de bloques? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de muros de bloques y cómo planificar el presupuesto para este tipo de obra."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-muro-bloque`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta construir un muro de bloques?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Muro de bloques: €30 - €50 por m²
						</p>
						<p>
							Incluye materiales y mano de obra para la
							construcción básica de un muro de bloques.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tamaño del muro: Área total a cubrir con bloques.</li>
					<li>
						Tipo de bloques: Variedades de bloques disponibles que
						pueden afectar el costo.
					</li>
					<li>
						Altura y diseño: Muros más altos o con diseños
						especiales pueden aumentar el costo.
					</li>
					<li>
						Ubicación: Precios pueden variar según la ubicación
						geográfica y la oferta local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación para Construir un Muro de Bloques
				</h2>
				<p>
					1. <strong>Diseño y Planificación</strong>: Define el diseño
					y especificaciones del muro antes de iniciar la
					construcción.
				</p>
				<p>
					2. <strong>Obtención de Cotizaciones</strong>: Solicita
					presupuestos detallados para comparar costos y servicios.
				</p>
				<p>
					3. <strong>Preparación y Construcción</strong>: Asegúrate de
					que la preparación del terreno y la construcción sean
					adecuadas para un resultado duradero.
				</p>
				<p>
					4. <strong>Mantenimiento y Durabilidad</strong>: Considera
					la durabilidad y el mantenimiento del muro a largo plazo.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación adecuada y entendimiento de los costos
					involucrados, puedes construir un muro de bloques de manera
					eficiente y dentro del presupuesto.
				</p>
			</section>
		</div>
	);
};

export default ConstruirMuroBloquePage;
