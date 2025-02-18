import Head from "next/head";

const BathtubReplacement = () => {
	return (
		<div className="container mx-auto p-4">
			<Head>
				<title>
					¿Cuánto cuesta cambiar una bañera por otra nueva? -
					Handyman
				</title>
				<meta
					name="description"
					content="Descubre los costos asociados con cambiar una bañera por otra nueva y cómo planificar esta renovación en tu baño."
				/>
				<link
					rel="canonical"
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cambiar-banera`}
				/>
			</Head>

			<h1 className="text-3xl font-bold text-center mb-8">
				¿Cuánto cuesta cambiar una bañera por otra nueva?
			</h1>

			<section className="mb-8">
				<div className="flex flex-wrap justify-center">
					<div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Bañera Estándar: €500 - €1,000
						</p>
						<p>Bañera básica de material estándar.</p>
					</div>
					<div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
						<p className="text-xl font-bold mb-2">
							Bañera de Alta Gama: €1,000 - €3,000+
						</p>
						<p>
							Bañera con características avanzadas o de diseño
							especial.
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
						Tamaño y Material de la Bañera: Dimensiones y tipo de
						material (acrílico, hierro fundido, etc.).
					</li>
					<li>
						Costo de la Mano de Obra: Instalación y posible
						modificación en la fontanería.
					</li>
					<li>
						Extras y Accesorios: Grifería, mamparas, sistemas de
						hidromasaje, etc.
					</li>
					<li>
						Personalización: Opciones adicionales como
						antideslizante o diseños especiales.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Precios Promedio para Cambiar una Bañera
				</h2>
				<ul className="list-disc list-inside">
					<li>
						<strong>Bañera Estándar</strong>: €500 - €1,000, bañera
						básica de material estándar.
					</li>
					<li>
						<strong>Bañera de Alta Gama</strong>: €1,000 - €3,000+,
						bañera con características avanzadas o de diseño
						especial.
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-bold mb-4">
					Planificación de la Renovación
				</h2>
				<p>
					1. <strong>Selección de la Bañera</strong>: Elige una bañera
					que se ajuste a tu espacio y presupuesto.
				</p>
				<p>
					2. <strong>Presupuesto Detallado</strong>: Considera los
					costos de material, mano de obra y extras.
				</p>
				<p>
					3. <strong>Preparación del Espacio</strong>: Asegúrate de
					que el área esté lista para la instalación de la nueva
					bañera.
				</p>
				<p>
					4. <strong>Instalación Profesional</strong>: Contrata a
					profesionales para garantizar una instalación segura y
					duradera.
				</p>
			</section>

			<section>
				<p className="text-lg">
					Al cambiar una bañera, asegúrate de considerar todos los
					factores involucrados para una renovación exitosa y dentro
					de tu presupuesto.
				</p>
			</section>
		</div>
	);
};

export default BathtubReplacement;
