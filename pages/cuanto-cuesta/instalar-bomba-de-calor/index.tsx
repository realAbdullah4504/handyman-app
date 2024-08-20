import Head from "next/head";

const InstalarBombaDeCalorPage = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta instalar una bomba de calor? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la instalación de una bomba de calor y cómo planificar tu presupuesto para mejorar la eficiencia energética de tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/instalar-bomba-de-calor`}

				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta instalar una bomba de calor?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Básica: €1,500 - €3,000
						</p>
						<p>
							Incluye bomba de calor estándar y mano de obra
							básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Instalación Avanzada: €3,000 - €6,000
						</p>
						<p>
							Incluye bomba de calor de alta eficiencia y técnicas
							de instalación avanzadas.
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
						Tipo de Bomba de Calor: Estándar vs. alta eficiencia
						energética.
					</li>
					<li>Tamaño de la Casa: Área a climatizar.</li>
					<li>
						Instalación Personalizada: Costos adicionales por
						instalaciones complejas o personalizadas.
					</li>
					<li>
						Ubicación: Precios pueden variar según la ubicación
						geográfica y condiciones del mercado local.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Instalación de Bomba de Calor
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Instalación Básica</strong>: €1,500 - €3,000,
						incluye bomba de calor estándar y mano de obra básica.
					</li>
					<li>
						<strong>Instalación Avanzada</strong>: €3,000 - €6,000,
						incluye bomba de calor de alta eficiencia y técnicas de
						instalación avanzadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Evaluación de Necesidades</strong>: Determina el
					tamaño y las especificaciones para la bomba de calor
					adecuada.
				</p>
				<p>
					2. <strong>Comparación de Presupuestos</strong>: Obtén
					cotizaciones de varios instaladores para comparar precios y
					métodos de instalación.
				</p>
				<p>
					3.{" "}
					<strong>Consideración de Beneficios a Largo Plazo</strong>:
					Evalúa el ahorro energético y los beneficios ambientales a
					largo plazo.
				</p>
				<p>
					4. <strong>Selección de Instalador</strong>: Elige un
					instalador con experiencia en bombas de calor para
					garantizar una instalación eficiente.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Con una planificación cuidadosa y presupuestación adecuada,
					puedes mejorar la eficiencia energética de tu hogar con una
					bomba de calor dentro de tu presupuesto establecido.
				</p>
			</section>
		</div>
	);
};

export default InstalarBombaDeCalorPage;
