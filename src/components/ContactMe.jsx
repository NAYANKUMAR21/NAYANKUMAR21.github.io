import { useContext, useState } from "react";
import { AuthContext } from "../COntext/Authentication";
import "./ContactMe.css";
const Contact = () => {
  const { auth, postMail } = useContext(AuthContext);
  const [post, setpost] = useState({
    name: "",
    email: "",
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setpost({
      ...post,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    console.log(post, auth);
    postMail(post);
  };
  return (
    <section className="container" id="contact" style={{ marginTop: "200px" }}>
      <div className="container1">
        <h1
          style={{
            marginBottom: "20px",
            fontSize: "30px",
          }}
        >
          Contact Details
        </h1>
        <div>
          <a href="mailto:naayaankumar@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
              color="#e54c4c"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </a>

          <span>
            <a href="mailto:naayaankumar@gmail.com">naayaankumar@gmail.com</a>
          </span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-telephone-fill"
            viewBox="0 0 16 16"
            color="#e54c4c"
          >
            <path
              fill-rule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
          <span>+91-9481574558</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
            color="#e54c4c"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
          <a href="https://www.linkedin.com/in/nayan-kumar-/">Nayan Kumar</a>
        </div>
      </div>
      <div className="container2">
        <input
          id="i1"
          value={post.name}
          type="text"
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
          style={{ fontSize: "20px" }}
        />
        <input
          id="i2"
          value={post.email}
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          style={{ fontSize: "20px" }}
        />
        <textarea
          name="body"
          id="message"
          rows="15"
          value={post.body}
          style={{
            borderRadius: "15px",
            paddingLeft: "10px",
            paddingTop: "10px",
            fontSize: "20px",
          }}
          onChange={handleChange}
          placeholder="Enter message "
        ></textarea>
        {/* <input id="i3" type="text" placeholder="Your message" /> */}
        {/* <button id="btn">Submit</button> */}
        <button
          style={{
            border: "1px",
            backgroundColor: "#e54c4c",
            borderRadius: "5px",
            width: "40%",
            padding: "14px 20px 14px 20px",
            fontSize: "20px",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </section>
  );
};
export default Contact;
