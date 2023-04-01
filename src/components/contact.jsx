import React, { useEffect } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ContactNav from "../subcomponents/contactnav";
import { Footer } from "../subcomponents/footer";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactNav></ContactNav>
      <div className="mt-[15vh] text-3xl ml-8">
        Contact <span className="text-fuchsia-700 ">Section</span>
      </div>
      <div className="flex flex-col items-center justify-center h-[70vh] md:w-[50vw] w-[80vw] mx-auto ">
        <>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">Full name</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 ">
            <InputGroup.Text id="basic-addon1">Message</InputGroup.Text>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              cols={9}
              rows={7}
            />
          </InputGroup>

          <div className="flex justify-center">
            <button
              // style={{ alignSelf: "flex-start" }}
              className="bg-cyan-800 px-4 py-2 text-white rounded-xl"
            >
              Submit
            </button>
          </div>
        </>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
