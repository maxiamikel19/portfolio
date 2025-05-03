import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="px-6 py-16 bg-gray-100 md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-10 text-3xl font-semibold text-center text-gray-700">
        Entre em Contato
      </h3>

      <div className="grid max-w-5xl gap-10 mx-auto md:grid-cols-2">
        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold">Email</h4>
            <p className="text-sm">maxloversist@email.com</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Telefone</h4>
            <p className="text-sm">+55 (44) 99887-8995</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">WhatsApp</h4>
            <p className="text-sm">+55 (44) 98454-2689</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Localização</h4>
            <p className="text-sm">Sarand&iacute;-PR, Brasil</p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 text-white transition bg-gray-600 hover:bg-gray-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
