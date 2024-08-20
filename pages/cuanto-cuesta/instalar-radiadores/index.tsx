import Head from "next/head";

const InstalarRadiadoresPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta instalar radiadores? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de radiadores y cómo planificar el presupuesto para este proyecto de calefacción."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-radiadores`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar radiadores?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Básica: €600 - €1,000 por radiador
						</p>
						<p>
							Incluye radiadores estándar y mano de obra básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Avanzada: €1,000 - €1,500 por radiador
						</p>
						<p>
							Incluye radiadores de alta eficiencia energética y
							ajustes personalizados.
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
						Tipo de radiador: Convencionales vs. radiadores de bajo
						consumo o diseño especial.
					</li>
					<li>
						Número de radiadores: Cantidad total de radiadores a
						instalar en la propiedad.
					</li>
					<li>
						Ubicación y accesibilidad: Dificultades de acceso o
						necesidades de ajustes estructurales.
					</li>
					<li>
						Calidad de la instalación: Costos adicionales por
						ajustes de tuberías o sistemas de calefacción central.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para la Instalación de Radiadores
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación Básica</strong>: €600 - €1,000 por
						radiador, incluye radiadores estándar y mano de obra
						básica.
					</li>
					<li>
						<strong>Instalación Avanzada</strong>: €1,000 - €1,500
						por radiador, incluye radiadores de alta eficiencia y
						ajustes personalizados.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determina la
					cantidad y tipo de radiadores necesarios para tu propiedad.
				</p>
				<p>
					2. <strong>Obtención de Cotizaciones</strong>: Solicita
					presupuestos detallados de varios instaladores para comparar
					precios y servicios.
				</p>
				<p>
					3. <strong>Consideraciones Adicionales</strong>: Incluye
					costos de mantenimiento futuro y eficiencia energética al
					seleccionar los radiadores.
				</p>
				<p>
					4. <strong>Calidad y Eficiencia</strong>: Elige radiadores
					de marcas reconocidas y asegúrate de una instalación
					profesional para garantizar un funcionamiento óptimo.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación adecuada y entendimiento de los costos
					involucrados, puedes realizar la instalación de radiadores
					dentro de tu presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default InstalarRadiadoresPage;
