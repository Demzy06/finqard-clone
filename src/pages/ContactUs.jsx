import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ContactUs() {
  return (
    <>
      <Header />
      <section className="pt-25 pb-30 px-4 bg-gray-100 lg:px-30 xl:px-100 xl:w-[90%] xl:m-auto">
        <div>
          <div className="px-6 w-fit m-auto text-center ">
            <h1 className="text-[32px] font-medium mb-3">Contact Us</h1>
            <p className="text-grey-600">
              Use the contact form to get in touch with us at info@finqard.com.
              We'll get back to you asap.
            </p>
          </div>
          <div className="px-4 py-10 bg-white rounded-3xl mt-20">
            <form action="" className="flex flex-col">
              <div className="lg:flex gap-x-10">
                <span className="lg:flex-5">
                  <label
                    className="text-[14px] font-light lg:block"
                    for="firstName"
                  >
                    First Name
                  </label>
                  <input
                    className="mb-6 mt-1.5 bg-[#F3F4F6] rounded-lg py-2 px-3 lg:w-full "
                    type="text"
                    id="firstName"
                    placeholder="First name"
                  />
                </span>
                <span className="lg:flex-5">
                  <label
                    className="text-[14px] font-light lg:block"
                    for="LastName"
                  >
                    Last Name
                  </label>
                  <input
                    className="mb-6 mt-1.5 bg-[#F3F4F6] rounded-lg py-2 px-3 lg:w-full"
                    type="text"
                    id="hey"
                    placeholder="Last name"
                  />
                </span>
              </div>
              <label className="text-[14px] font-light" for="email">
                Email
              </label>
              <input
                className="mb-6 mt-1.5 bg-[#F3F4F6] rounded-lg py-2 px-3 "
                type="text"
                id="email"
                placeholder="you@company.com"
              />
              <label className="text-[14px] font-light" for="message">
                Message
              </label>
              <textarea
                name=""
                id="message"
                className="bg-[#F3F4F6] rounded-lg py-2 px-3"
                placeholder="Leave us a message"
                rows={6}
              />
              <button className="py-3.5 rounded-4xl px-4 mt-12 bg-purple-700 text-white text-[18px] font-light">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Faqs />
      <Footer />
    </>
  );
}

export default ContactUs;
