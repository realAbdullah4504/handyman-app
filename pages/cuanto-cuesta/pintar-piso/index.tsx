import Head from "next/head";

const ApartmentPaintingCost = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>¿Cuánto cuesta pintar un piso? - Handyman</title>
				<meta
					name="description"
					content="Descubre los costos asociados con la pintura de un piso y cómo presupuestar para este tipo de renovación."
				/>
				<link
					rel="canonical"
					href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/pintar-piso`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta pintar un piso?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura Económica: €500 - €1,000
						</p>
						<p>Incluye pintura básica y mano de obra estándar.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Pintura Premium: €1,000 - €3,000 o más
						</p>
						<p>
							Incluye pintura de alta calidad y técnicas de
							acabado avanzadas.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tamaño del Piso: Área total a pintar.</li>
					<li>Calidad de la Pintura: Económica vs. Premium.</li>
					<li>
						Preparación de Superficies: Reparaciones de paredes y
						techos.
					</li>
					<li>
						Detalles y Acabados: Técnicas especiales como
						texturizado o patrones.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Pintar un Piso
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Pintura Económica</strong>: €500 - €1,000,
						incluyendo pintura básica y mano de obra estándar.
					</li>
					<li>
						<strong>Pintura Premium</strong>: €1,000 - €3,000 o más,
						incluyendo pintura de alta calidad y técnicas de acabado
						avanzadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Presupuesto
				</h2>
				<p>
					1. <strong>Medición del Área</strong>: Calcula el área total
					a pintar y determina la cantidad de pintura necesaria.
				</p>
				<p>
					2. <strong>Selección de Pintura</strong>: Elige entre
					opciones de pintura económica o premium según tus
					preferencias y presupuesto.
				</p>
				<p>
					3. <strong>Obtención de Cotizaciones</strong>: Solicita
					presupuestos detallados de varios pintores profesionales.
				</p>
				<p>
					4. <strong>Programación y Tiempo</strong>: Planifica el
					tiempo necesario para completar el proyecto y cualquier
					preparación adicional requerida.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar cuidadosamente y presupuestar la pintura de tu
					piso, puedes mejorar su apariencia y mantener el costo
					dentro de tus posibilidades.
				</p>
			</section>
		</div>
	);
};

export default ApartmentPaintingCost;
