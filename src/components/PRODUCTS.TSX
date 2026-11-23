import { ArrowRight, ArrowUpRight } from 'lucide-react'

const products = [
  {
    number: '01',
    name: 'Cotton Grey Fabric',
    category: 'COTTON TEXTILES',
    description:
      'Cotton grey fabric sourced for textile manufacturers, converters and wholesalers.',
    specifications: [
      'Material: Cotton',
      'Yarn count: As required',
      'GSM: As required',
      'Construction: Customizable',
    ],
    image:
      'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?w=1000',
  },
  {
    number: '02',
    name: 'Custom Fabric Constructions',
    category: 'FABRIC SPECIFICATIONS',
    description:
      'Fabric constructions sourced according to your technical and commercial requirements.',
    specifications: [
      'Construction: Buyer specified',
      'Yarn count: Buyer specified',
      'GSM: Buyer specified',
      'Width: Subject to confirmation',
    ],
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000',
  },
  {
    number: '03',
    name: 'Custom Yarn Counts',
    category: 'YARN SPECIFICATIONS',
    description:
      'Cotton fabric sourcing discussions for different yarn counts and constructions.',
    specifications: [
      '20s × 20s',
      '40s × 40s',
      '60s × 60s',
      'Other counts on request',
    ],
    image:
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=1000',
  },
]

export default function Products() {
  return (
    <section id="products" className="bg-[#F8F6F0] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#B69A62]">
              OUR PRODUCT PORTFOLIO
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[#14283D] md:text-5xl">
              Explore Our Fabrics
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
              Discover cotton grey fabric sourcing possibilities
              tailored to your business requirements.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#14283D] hover:text-[#B69A62]"
          >
            DISCUSS YOUR REQUIREMENTS <ArrowRight size={16} />
          </a>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (

            <article
              key={product.number}
              className="group overflow-hidden border border-[#14283D]/10 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-72 overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 bg-[#F8F6F0] px-4 py-2 text-xs tracking-widest text-[#B69A62]">
                  {product.number}
                </span>

              </div>

              <div className="p-7">

                <p className="mb-3 text-[10px] tracking-[0.25em] text-[#B69A62]">
                  {product.category}
                </p>

                <h3 className="font-serif text-2xl text-[#14283D]">
                  {product.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {product.description}
                </p>

                <div className="mt-6 border-t border-gray-100 pt-5">

                  <p className="mb-4 text-xs font-semibold tracking-wider text-[#14283D]">
                    PRODUCT INFORMATION
                  </p>

                  <ul className="space-y-3">
                    {product.specifications.map((specification) => (
                      <li
                        key={specification}
                        className="flex items-start gap-2 text-xs text-gray-500"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-[#B69A62]" />
                        {specification}
                      </li>
                    ))}
                  </ul>

                </div>

                <a
                  href="#contact"
                  className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 text-xs font-semibold tracking-widest text-[#14283D] hover:text-[#B69A62]"
                >
                  REQUEST INFORMATION
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}