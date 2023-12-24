import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="pt-20">
      {!isSubmitted && (
        <>
          <h1 className="text-center text-xl">Contact Us</h1>
          <form
            className="flex flex-col items-center gap-12 py-24"
            name="contact"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">Name</label> <br />
              <input
                className="w-64 bg-gray-200 px-4 py-2"
                type="text"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="email">Email</label> <br />
              <input
                type="email"
                name="email"
                className="w-64 bg-gray-200 px-4 py-2"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="message">Message</label> <br />
              <textarea
                className="w-64 bg-gray-200 px-4 py-2"
                name="message"
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </p>
            <p className="rounded-md bg-primary px-4 py-2 font-bold text-black">
              <input
                type="submit"
                value="Submit message"
                className="cursor-pointer hover:scale-105 hover:text-blue-600"
                onClick={() =>
                  setIsSubmitted((prevIsSubmitted) => !prevIsSubmitted)
                }
              />
            </p>
          </form>
        </>
      )}
      {isSubmitted && (
        <div className="px-5 flex flex-col items-center">
          <h1 className="text-center text-xl">Thank you! {name}</h1>
          <p className="text-center mt-5 flex flex-col items-center">
            Your message:
            <span
              className="text-center w-full max-w-xs overflow-x-scroll italic 
            font-bold line-clamp-1"
            >
              {message}
            </span>
            has been received. We will get back to your email: {email} shortly.
          </p>
        </div>
      )}
    </div>
  );
}
