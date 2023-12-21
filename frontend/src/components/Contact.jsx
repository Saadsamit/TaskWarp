import Container from "./Container";

const Contact = () => {
  return (
    <Container className={"pb-10"}>
      <div className="flex justify-center pb-5">
        <h3 className="text-4xl capitalize text-orange-500 font-bold border-b-4 border-orange-200 w-fit">
          Contact us!
        </h3>
      </div>
      <form className="max-w-2xl mx-auto flex flex-col gap-4 pt-10">
        <div className="flex sm:flex-row flex-col gap-4">
          <input
            className="inputStyle sm:w-1/2 w-full"
            name="name"
            placeholder="Enter Your Name"
            type="text"
            required
          />
          <input
            className="inputStyle sm:w-1/2 w-full"
            name="email"
            placeholder="Enter Your Email"
            type="email"
            required
          />
        </div>
        <input
          placeholder="Enter Your Subject"
          name="subject"
          className="inputStyle w-full"
          type="text"
          required
        />
        <textarea
          placeholder="Enter Your Message"
          name="message"
          className="inputStyle pt-2 w-full min-h-[100px]"
        ></textarea>
        <div className="text-center">
          <input
            type="submit"
            className="btnStyle capitalize"
            value="send mail"
          />
        </div>
      </form>
    </Container>
  );
};

export default Contact;
