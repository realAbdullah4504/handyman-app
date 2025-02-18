import Head from "next/head";

const ContainerHouseConstruction = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta construir una casa con contenedores? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la construcción de una casa utilizando contenedores marítimos y cómo planificar este tipo de proyecto."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/construir-casa-con-contenedores`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta construir una casa con contenedores?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Construcción Básica: €800 - €1,200 por metro
							cuadrado
						</p>
						<p>
							Construcción estándar con contenedores reciclados y
							estructura básica.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Construcción de Alta Gama: €1,200 - €2,000+ por
							metro cuadrado
						</p>
						<p>
							Construcción personalizada con diseño arquitectónico
							y acabados de lujo.
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
						Tamaño y Diseño de la Casa: Número de contenedores y
						complejidad del diseño.
					</li>
					<li>
						Acabados y Materiales: Calidad de los acabados, sistemas
						de aislamiento, instalaciones.
					</li>
					<li>
						Localización del Proyecto: Costos de mano de obra y
						permisos locales.
					</li>
					<li>
						Sostenibilidad y Eficiencia Energética: Opciones de
						diseño verde y certificaciones energéticas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Construir una Casa con Contenedores
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Construcción Básica</strong>: €800 - €1,200 por
						metro cuadrado, contenedores reciclados y estructura
						básica.
					</li>
					<li>
						<strong>Construcción de Alta Gama</strong>: €1,200 -
						€2,000+ por metro cuadrado, diseño personalizado y
						acabados de lujo.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Construcción de una Casa con
					Contenedores
				</h2>
				<p>
					1. <strong>Definir el Proyecto</strong>: Determina el tamaño
					y el diseño arquitectónico deseado.
				</p>
				<p>
					2. <strong>Presupuesto y Financiamiento</strong>: Estima los
					costos totales y explora opciones de financiamiento.
				</p>
				<p>
					3. <strong>Selección de Contenedores</strong>: Elige
					contenedores de calidad y certificados para construcción.
				</p>
				<p>
					4. <strong>Contratación de Profesionales</strong>: Trabaja
					con arquitectos y constructores con experiencia en este tipo
					de proyectos.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar la construcción de una casa con contenedores,
					considera todos los factores para asegurar un proyecto
					exitoso y dentro del presupuesto.
				</p>
			</section>
		</div>
	);
};

export default ContainerHouseConstruction;
