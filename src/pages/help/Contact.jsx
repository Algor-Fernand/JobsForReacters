import { Form, redirect } from "react-router-dom";

export default function Contact() {
  return (
    <div className="mt-8">
      <Form
        method="post"
        action="/help/contact"
        className="flex flex-col gap-5 mt-8 items-center"
      >
        <input
          className="w-72 rounded-md text-black "
          type="email"
          placeholder="enter email"
          name="email"
        />
        <textarea
          className="w-72 rounded-md h-48 text-black"
          name="message"
          id=""
          placeholder="Share with us your toughts here..."
        ></textarea>
        <button className="border-2 border-white mx-auto">Submit</button>
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data);
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission.email);

  return redirect("/");
};
