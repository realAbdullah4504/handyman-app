import Head from "next/head";

const GlassEnclosure = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta un cerramiento de cristal? - Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con un cerramiento de cristal y cómo planificar esta instalación en tu hogar."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cerramiento-cristal`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta un cerramiento de cristal?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cerramiento Básico: €100 - €200 por metro cuadrado
						</p>
						<p>
							Cerramientos estándar con vidrio templado y marco
							sencillo.
						</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Cerramiento de Alta Gama: €200 - €400+ por metro
							cuadrado
						</p>
						<p>
							Cerramientos premium con vidrio laminado, marcos de
							aluminio o diseño personalizado.
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
						Tipo de Vidrio: Vidrio templado, laminado, doble
						acristalamiento, etc.
					</li>
					<li>
						Dimensiones y Diseño: Tamaño y complejidad del
						cerramiento.
					</li>
					<li>Material del Marco: Aluminio, acero, madera, etc.</li>
					<li>
						Accesorios y Acabados: Puertas corredizas, acabados
						especiales, tratamientos antirreflejos, etc.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cerramientos de Cristal
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Cerramiento Básico</strong>: €100 - €200 por
						metro cuadrado, vidrio templado y marco estándar.
					</li>
					<li>
						<strong>Cerramiento de Alta Gama</strong>: €200 - €400+
						por metro cuadrado, vidrio laminado, marcos de aluminio
						o diseño personalizado.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación del Cerramiento de Cristal
				</h2>
				<p>
					1. <strong>Determina tus Necesidades</strong>: Evalúa el
					propósito y las especificaciones del cerramiento de cristal.
				</p>
				<p>
					2. <strong>Presupuesto y Comparación</strong>: Obtén varias
					cotizaciones para comparar precios y opciones de diseño.
				</p>
				<p>
					3. <strong>Selección de Materiales</strong>: Elige el tipo
					de vidrio y marco que mejor se adapte a tus necesidades y
					presupuesto.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Contrata a
					profesionales calificados para la instalación y asegúrate de
					cumplir con los códigos y normativas locales.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al planificar un cerramiento de cristal, considera todos los
					factores involucrados para obtener el resultado deseado y
					dentro de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default GlassEnclosure;
