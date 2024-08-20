import Head from "next/head";

const ConcreteSlabCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta una solera de hormigón? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de soleras de hormigón y cómo planificar este tipo de obra."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/solera-hormigon`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta una solera de hormigón?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Solera Básica: €20 - €40 por metro cuadrado
						</p>
						<p>
							Construcción estándar con hormigón simple y
							nivelación básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Solera Reforzada: €40 - €80+ por metro cuadrado
						</p>
						<p>
							Incluye refuerzos y acabados específicos para mayor
							resistencia y durabilidad.
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
						Tamaño y Grosor de la Solera: Dimensiones y espesor
						requerido para la carga.
					</li>
					<li>
						Preparación del Terreno: Nivelación, compactación y
						posibles excavaciones previas.
					</li>
					<li>
						Acabados y Refuerzos: Uso de mallas metálicas, fibras de
						refuerzo o aditivos especiales.
					</li>
					<li>
						Localización del Proyecto: Acceso al sitio y costos de
						mano de obra local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Soleras de Hormigón
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Solera Básica</strong>: €20 - €40 por metro
						cuadrado, con hormigón estándar y nivelación básica.
					</li>
					<li>
						<strong>Solera Reforzada</strong>: €40 - €80+ por metro
						cuadrado, incluyendo refuerzos adicionales y acabados
						especiales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Construcción de Soleras de Hormigón
				</h2>
				<p>
					1. <strong>Evaluación del Proyecto</strong>: Determina las
					especificaciones y requerimientos de carga.
				</p>
				<p>
					2. <strong>Presupuesto y Financiamiento</strong>: Calcula
					los costos totales y asegura el financiamiento adecuado.
				</p>
				<p>
					3. <strong>Preparación del Sitio</strong>: Prepara el
					terreno adecuadamente antes de la colocación del hormigón.
				</p>
				<p>
					4. <strong>Selección de Materiales</strong>: Elige el tipo
					de hormigón y los acabados según las necesidades del
					proyecto.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la construcción de una solera de hormigón,
					considera todos los factores involucrados para garantizar la
					durabilidad y el éxito del proyecto.
				</p>
			</section>
		</div>
	);
};

export default ConcreteSlabCost;
