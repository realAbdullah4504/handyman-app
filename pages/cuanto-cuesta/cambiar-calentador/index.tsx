import Head from "next/head";

const WaterHeaterReplacement = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta cambiar un calentador de agua? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con el cambio de un calentador de agua y cómo planificar esta renovación en tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-calentador`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar un calentador de agua?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Calentador Estándar: €500 - €1,000
						</p>
						<p>Calentador básico de capacidad estándar.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Calentador de Alta Gama: €1,000 - €3,000+
						</p>
						<p>
							Calentador con características avanzadas o de mayor
							capacidad.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Factores que Afectan los Costos
				</h2>
				<ul className="list-disc list-inside">
					<li>Tipo de Calentador: Eléctrico, de gas, solar, etc.</li>
					<li>
						Capacidad y Eficiencia Energética: Tamaño del tanque o
						flujo continuo.
					</li>
					<li>
						Costo de la Instalación: Incluyendo posibles ajustes en
						la tubería o conexiones eléctricas.
					</li>
					<li>
						Extras y Accesorios: Termostatos, válvulas de seguridad,
						etc.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambiar un Calentador de Agua
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Calentador Estándar</strong>: €500 - €1,000,
						calentador básico de capacidad estándar.
					</li>
					<li>
						<strong>Calentador de Alta Gama</strong>: €1,000 -
						€3,000+, calentador con características avanzadas o de
						mayor capacidad.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Renovación
				</h2>
				<p>
					1. <strong>Selección del Calentador</strong>: Elige el tipo
					y tamaño adecuado para tu hogar y necesidades de agua
					caliente.
				</p>
				<p>
					2. <strong>Presupuesto Detallado</strong>: Incluye costos de
					compra, instalación y posibles ajustes.
				</p>
				<p>
					3. <strong>Preparación del Espacio</strong>: Asegúrate de
					que el área esté lista para la instalación del nuevo
					calentador.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Contrata a
					profesionales cualificados para garantizar una instalación
					segura y eficiente.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al cambiar un calentador de agua, considera todos los
					factores involucrados para una renovación exitosa y dentro
					de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default WaterHeaterReplacement;
