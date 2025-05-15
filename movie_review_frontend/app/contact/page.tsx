import ContactForm from '../components/contactForm'

export default function ContactPage() {

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-8 sm:p-20 text-white font-sans overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-lg text-indigo-100">
            Have a suggestion, bug report, or just want to say hi? Send a message!
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm/>
      </div>
    </div>
  )
}
