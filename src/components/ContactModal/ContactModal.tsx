import {
  BaseSyntheticEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import "./ContactModal.scss";

interface ValidationErrors {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  message: string;
}

interface IContactModalProps {
  setShowContactModal: Dispatch<SetStateAction<boolean>>;
}

export const ContactModal: FC<IContactModalProps> = ({
  setShowContactModal,
}) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageSending, setMessageSending] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [failureMessage, setFailureMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<ValidationErrors>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const clearForm = () => {
    setFirstname("");
    setLastname("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const handleFormErrors = (): ValidationErrors => {
    let errors = {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!firstname) {
      errors.firstname = "Required";
    }

    if (firstname.length > 20) {
      errors.firstname = "Name too long";
    }

    if (!lastname) {
      errors.lastname = "Required";
    }

    if (!email) {
      errors.email = "Required";
    }

    if (!phone) {
      errors.phone = "Required";
    }

    if (!message) {
      errors.message = "Required";
    }

    setFormErrors(errors);
    return errors;
  };

  const handleSubmit = async (e: BaseSyntheticEvent): Promise<void> => {
    e.preventDefault();

    const errors = handleFormErrors();

    if (Object.values(errors).includes("Required" || "Name too long")) {
      setFailureMessage("Please fill out form fields");
      return;
    }

    setMessageSending(true);

    const formValues = {
      firstname,
      lastname,
      email,
      phone,
      message,
    };

    const url =
      "https://dgz3m4yr3f.execute-api.us-east-1.amazonaws.com/default/TidalSites-ContactForm";

    await fetch(url, {
      method: "PUT",
      body: JSON.stringify(formValues),
    }).finally(() => {
      clearForm();
      setMessageSending(false);
      setSuccessMessage("Request Sent!");
    });
  };

  return (
    <div className="ContactModal">
      <button
        className="ContactModal__close"
        onClick={() => setShowContactModal(false)}
      >
        <span className="material-icons">close</span>
      </button>
      <div className="ContactModal__wrapper">
        {messageSending ? (
          <div className="MessageSending">
            <div className="MessageSending__wrapper">
              <span>Sending Request Now!</span>
              <div className="MessageSending__icons">
                <span className="material-icons">email</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className="ContactModal__status"
          data-success={successMessage ? true : false}
          data-failure={failureMessage ? true : false}
        >
          <span>
            {failureMessage
              ? failureMessage
              : successMessage
              ? successMessage
              : ""}
          </span>
          <button
            onClick={() => {
              setFailureMessage("");
              setSuccessMessage("");
            }}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="ContactModal__heading">
          <span>How can we assist you?</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="ContactModal__form-group">
            <label>
              <span>First Name</span>
              <input
                type="text"
                value={firstname}
                maxLength={20}
                onChange={(e) => {
                  setFailureMessage("");
                  setSuccessMessage("");
                  setFormErrors({ ...formErrors, firstname: "" });
                  setFirstname(e.target.value);
                }}
              />
            </label>
            <span className="error">{formErrors.firstname}</span>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Last Name</span>
              <input
                type="text"
                value={lastname}
                maxLength={20}
                onChange={(e) => {
                  setFailureMessage("");
                  setSuccessMessage("");
                  setFormErrors({ ...formErrors, lastname: "" });
                  setLastname(e.target.value);
                }}
              />
            </label>
            <span className="error">{formErrors.lastname}</span>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Email</span>
              <input
                type="email"
                value={email}
                maxLength={40}
                onChange={(e) => {
                  setFailureMessage("");
                  setSuccessMessage("");
                  setFormErrors({ ...formErrors, email: "" });
                  setEmail(e.target.value);
                }}
              />
            </label>
            <span className="error">{formErrors.email}</span>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Phone Number</span>
              <input
                type="text"
                value={phone}
                maxLength={20}
                onChange={(e) => {
                  setFailureMessage("");
                  setSuccessMessage("");
                  setFormErrors({ ...formErrors, phone: "" });
                  setPhone(e.target.value);
                }}
              />
            </label>
            <span className="error">{formErrors.phone}</span>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Message</span>
              <textarea
                value={message}
                maxLength={256}
                onChange={(e) => {
                  setFailureMessage("");
                  setSuccessMessage("");
                  setFormErrors({ ...formErrors, message: "" });
                  if (e.target.value.length >= e.target.maxLength) {
                    setFormErrors({
                      ...formErrors,
                      message: "Max character limit reached",
                    });
                  }
                  setMessage(e.target.value);
                }}
              />
            </label>
            <span className="error">{formErrors.message}</span>
          </div>
          <div className="ContactModal__btn-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
