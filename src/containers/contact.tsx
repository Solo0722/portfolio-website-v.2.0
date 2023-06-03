import React, { useRef } from "react";
import styled from "styled-components";
import TitleBar from "../components/TitleBar";
import { Button, Form, Input, message } from "antd";
import { defaultTheme } from "../theme/appTheme";
import { MEDIA_QUERIES } from "../utils/constants";
import emailjs from "@emailjs/browser";
import IonIcon from "../components/IonIcon";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    await emailjs
      .send(
        "service_3g2rq2c",
        "template_lj7rhld",
        {
          to_name: "Solomon Owusu-Ansah",
          from_name: values.name,
          message: values.message,
          reply_to: "owusuansahsolomon39@gmail.com",
          from_email: values.email,
        },
        "pXojUsX_OjqKKvLln"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    message.success("Message submitted :)");
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ContactWrapper id="contact">
      <TitleBar title="Let's get in touch" />
      <ContactContent>
        <FormWrapper>
          <Form
            id="myForm"
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
          >
            <div className="form-divider">
              <Form.Item
                className="form-item"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Invalid name!",
                  },
                ]}
              >
                <Input className="input-field" placeholder="Name" />
              </Form.Item>
              <Form.Item
                className="form-item"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Invalid email!",
                  },
                ]}
              >
                <Input className="input-field" placeholder="Email" />
              </Form.Item>
            </div>
            <div className="form-divider">
              <Form.Item
                className="form-item"
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Invalid phone number!",
                  },
                ]}
              >
                <Input className="input-field" placeholder="Phone number" />
              </Form.Item>
              <Form.Item
                className="form-item"
                name="subject"
                rules={[
                  {
                    required: true,
                    message: "Invalid subject!",
                  },
                ]}
              >
                <Input className="input-field" placeholder="Subject" />
              </Form.Item>
            </div>
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Invalid message!",
                },
              ]}
            >
              <Input.TextArea className="message-field" placeholder="Message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
        <ContactDetailsWrapper>
          <p style={{ lineHeight: "1.6rem" }}>
            Let's make something new, different and more meaningful or make
            something more visual and conceptual.
          </p>
          <ContactBox>
            <div className="contact-logo">
              <IonIcon iconName="phone-portrait-outline" />
            </div>
            <div className="contact-content">
              <p>+233 (0) 599171142</p>
              <p>+233 (0) 504339488</p>
            </div>
          </ContactBox>
          <ContactBox>
            <div className="contact-logo">
              <IonIcon iconName="mail-outline" />
            </div>
            <div className="contact-content">
              <p>
                owusuansahsolomon39
                <br />
                @gmail.com
              </p>
            </div>
          </ContactBox>
          <ContactBox>
            <div className="contact-logo">
              <IonIcon iconName="location-outline" />
            </div>
            <div className="contact-content">
              <p>Kentinkrono</p>
              <p>Kumasi - Ghana</p>
            </div>
          </ContactBox>
        </ContactDetailsWrapper>
      </ContactContent>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem;

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 6rem 2rem;
    }
  }
  ${MEDIA_QUERIES.MOBILE} {
    & {
      padding: 6rem 1rem;
    }
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const FormWrapper = styled.div`
  width: 70%;
  padding-right: 80px;

  ion-icon {
    color: rgba(230, 230, 255, 0.5);
  }

  .form-divider {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .form-item {
    width: 48%;
  }

  .input-field,
  .message-field {
    border: none;
    border-radius: 4px;
    padding: 6px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(3.5px);
    -webkit-backdrop-filter: blur(3.5px);
    /* border: 1px solid rgba(255, 255, 255, 0.18); */
  }

  .message-field {
    height: 160px;
    align-items: flex-start;
  }

  textarea::placeholder,
  input::placeholder {
    color: rgba(230, 230, 255, 0.5);
    font-size: 12px;
  }

  button {
    padding: 20px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      padding-right: 0px;
    }

    .form-divider {
      flex-direction: column;
    }

    .form-item {
      width: 100%;
    }

    .input-field,
    .message-field {
      margin: 0;
    }
  }
`;
const ContactDetailsWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      margin-top: 30px;
    }
  }
`;

const ContactBox = styled.div`
  width: 100%;
  height: 60px;
  margin: 10px 0;
  border-radius: 7px;
  /* background: #fff; */
  /* margin-bottom: 10px; */

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  ion-icon {
    font-weight: bold;
  }

  .contact-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${defaultTheme.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  .contact-content {
    /* width: 70%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Contact;
