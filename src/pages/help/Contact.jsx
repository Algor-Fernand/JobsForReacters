export default function Contact() {
  return (
    <div className="flex flex-col gap-5 mt-8 items-center">
      <input
        className="w-72 rounded-md"
        type="text"
        placeholder="enter email"
      />
      <textarea
        className="w-72 rounded-md "
        name=""
        id=""
        cols="10"
        rows="10"
        placeholder="Share with us your toughts here..."
      ></textarea>
      <button className="border-2 border-white mx-auto">Submit</button>
    </div>
  );
}
