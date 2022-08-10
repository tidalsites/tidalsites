import { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./ContactModal.scss";

interface IContactModalProps {
  setShowContactModal: Dispatch<SetStateAction<boolean>>;
}

export const ContactModal: FC<IContactModalProps> = ({
  setShowContactModal,
}) => {
  return (
    <div className="ContactModal">
      <button
        className="ContactModal__close"
        onClick={() => setShowContactModal(false)}
      >
        <span className="material-icons">close</span>
      </button>
      <div className="ContactModal__wrapper">
        <div className="ContactModal__heading">
          <span>How can we assist you?</span>
        </div>
        <form>
          <div className="ContactModal__form-group">
            <label>
              <span>First Name</span>
              <input type="text" />
            </label>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Last Name</span>
              <input type="text" />
            </label>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Email</span>
              <input type="text" />
            </label>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Phone Number</span>
              <input type="text" />
            </label>
          </div>
          <div className="ContactModal__form-group">
            <label>
              <span>Message</span>
              <textarea />
            </label>
          </div>
          <div className="ContactModal__btn-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
