import { useRef, useState } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import { contactValidations } from "@/validations/formValidations";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "@/utils/constants";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    const formData = new FormData(form.current);
    const values = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      message: formData.get("message") as string,
    };

    try {
      await contactValidations.validate(values, { abortEarly: false });

      const result = await emailjs.sendForm(
        SERVICE_ID!,
        TEMPLATE_ID!,
        form.current,
        { publicKey: PUBLIC_KEY }
      );
      if (result) {
        form.current.reset();
        toast.success(
          <h1>
            Thank you for your inquiry. <br />{" "}
            <b className="ml-2">I&apos;ll reach out ASAP.</b>
          </h1>
        );
      }
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        const errors: string[] = err.inner.map(
          (error: Yup.ValidationError) => error.message
        );

        toast.error(errors[0]);
      } else {
        toast.error("Failed to send email. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-background w-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-4 p-6 w-full mx-auto bg-background shadow-lg rounded-xl"
        >
          <label htmlFor="name" className="text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <label htmlFor="message" className="text-gray-700 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            className="p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white hover:bg-blue-600 transition cursor-pointer"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
