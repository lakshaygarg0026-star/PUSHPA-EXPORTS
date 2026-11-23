import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    company: '',
    country: '',
    name: '',
    email: '',
    fabric: 'Cotton Grey Fabric',
    yarnCount: '',
    gsm: '',
    construction: '',
    quantity: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const subject = `New Fabric Enquiry - ${formData.company}`

  const body = `
NEW BUSINESS ENQUIRY
----------------------------

Company: ${formData.company}
Country: ${formData.country}
Contact Person: ${formData.name}
Email: ${formData.email}

Fabric: ${formData.fabric}
Yarn Count: ${formData.yarnCount}
GSM: ${formData.gsm}
Construction: ${formData.construction}
Quantity: ${formData.quantity}

Additional Requirements:
${formData.message}
`

  const mailtoLink =
    `mailto:lakshaygarg0026@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  window.location.href = mailtoLink
}

  

  return (
    <section id="quote" className="bg-[#14283D] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        <div className="grid gap-16 lg:grid-cols-2">

          <div className="text-white">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#B69A62]">
              BUSINESS ENQUIRIES
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Let's Discuss Your
              <span className="block text-[#B69A62]">
                Fabric Requirements
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-gray-300">
              Share your textile requirements with us. Our team will
              review your specifications and discuss suitable sourcing
              possibilities for your business.
            </p>

            <div className="mt-12 border-l border-[#B69A62] pl-6">
              <h3 className="font-serif text-2xl">
                PUSHPA EXPORTS
              </h3>

              <p className="mt-3 text-sm text-gray-300">
                Kishangarh, Rajasthan, India
              </p>

              <p className="mt-2 text-xs tracking-widest text-[#B69A62]">
                CONNECTING INDIAN TEXTILES TO GLOBAL MARKETS
              </p>
            </div>
          </div>

          <div className="bg-[#F8F6F0] p-7 md:p-10">

            {submitted ? (
              <div className="py-16 text-center">
                <CheckCircle
                  size={50}
                  className="mx-auto text-[#B69A62]"
                />

                <h3 className="mt-6 font-serif text-3xl text-[#14283D]">
                  Thank You!
                </h3>

                <p className="mt-4 text-sm text-gray-500">
                  Your form has been completed successfully.
                  Email submission will be connected in the next step.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-[#14283D] px-8 py-4 text-xs tracking-widest text-white"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            ) : (

              <form onSubmit={handleSubmit}>

                <h3 className="mb-8 font-serif text-3xl text-[#14283D]">
                  Request a Quote
                </h3>

                <div className="grid gap-5 md:grid-cols-2">

                  <input
                    name="company"
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />

                  <input
                    name="country"
                    placeholder="Country *"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />

                  <input
                    name="name"
                    placeholder="Contact Person *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Business Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />

                  <select
                    name="fabric"
                    value={formData.fabric}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option>Cotton Grey Fabric</option>
                    <option>Custom Cotton Fabric</option>
                    <option>Other Fabric Requirement</option>
                  </select>

                  <input
                    name="yarnCount"
                    placeholder="Yarn Count (e.g. 20s x 20s)"
                    value={formData.yarnCount}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <input
                    name="gsm"
                    placeholder="Required GSM"
                    value={formData.gsm}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <input
                    name="construction"
                    placeholder="Construction (e.g. 60 x 60)"
                    value={formData.construction}
                    onChange={handleChange}
                    className="form-input"
                  />

                  <input
                    name="quantity"
                    placeholder="Required Quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    className="form-input md:col-span-2"
                  />

                </div>

                <textarea
                  name="message"
                  placeholder="Additional Requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-input mt-5 w-full"
                />

                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-3 bg-[#14283D] px-8 py-5 text-xs font-semibold tracking-[0.2em] text-white transition hover:bg-[#B69A62]"
                >
                  SUBMIT ENQUIRY
                  <Send size={16} />
                </button>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Please provide accurate business information.
                </p>

              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}