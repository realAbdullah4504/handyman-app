import Head from "next/head";

const ShowerTrayReplacement = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta cambiar el plato de ducha? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con cambiar el plato de ducha y cómo planificar esta renovación en tu baño."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-plato-ducha`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar el plato de ducha?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Plato de Ducha Estándar: €300 - €600
						</p>
						<p>Plato de ducha básico de material estándar.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Plato de Ducha Personalizado: €600 - €1,500+
						</p>
						<p>
							Plato de ducha con características avanzadas o
							personalizadas.
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
						Tamaño y Material del Plato de Ducha: Dimensiones y tipo
						de material (resina, cerámica, acrílico, etc.).
					</li>
					<li>
						Costo de la Mano de Obra: Instalación y posibles
						modificaciones en la fontanería.
					</li>
					<li>
						Extras y Accesorios: Desagüe, mampara, grifería, etc.
					</li>
					<li>
						Personalización: Opciones adicionales como
						antideslizante o diseños especiales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambiar el Plato de Ducha
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Plato de Ducha Estándar</strong>: €300 - €600,
						plato básico de material estándar.
					</li>
					<li>
						<strong>Plato de Ducha Personalizado</strong>: €600 -
						€1,500+, plato con características avanzadas o
						personalizadas.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Renovación
				</h2>
				<p>
					1. <strong>Selección del Plato de Ducha</strong>: Elige un
					plato que se ajuste a tu espacio y presupuesto.
				</p>
				<p>
					2. <strong>Presupuesto Detallado</strong>: Considera los
					costos de material, mano de obra y extras.
				</p>
				<p>
					3. <strong>Preparación del Espacio</strong>: Asegúrate de
					que el espacio esté preparado para la instalación.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Contrata a
					profesionales para garantizar una instalación adecuada y
					duradera.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al cambiar el plato de ducha, asegúrate de considerar todos
					los factores involucrados para una renovación exitosa y
					dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default ShowerTrayReplacement;
