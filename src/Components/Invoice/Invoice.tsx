import { BaseSyntheticEvent, FC, useState, useEffect } from "react";
import "./Invoice.scss";

import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export const Invoice: FC = () => {
  const [inputInvoice, setInputInvoice] = useState("");
  const [invoiceURL, setInvoiceURL] = useState<string>("");
  const [invoiceAmount, setInvoiceAmount] = useState<number>(0);
  const [invoiceNotFound, setInvoiceNotFound] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currencyFormat = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  const getInvoice = async () => {
    await fetch(`http://localhost:3001/invoice/${inputInvoice}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setInvoiceURL(data.url);
        setInvoiceAmount(data.amount_due);
        setInputInvoice("");
      })
      .catch((e) => {
        setInvoiceNotFound(true);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleInvoiceSearch = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setInvoiceURL("");
    setInvoiceAmount(0);
    setIsLoading(true);
    // Setting timeout to avoid screen flicker on fast network calls
    // This is notable when the invoice is not found
    setTimeout(getInvoice, 1000);
  };

  return (
    <div className="Invoice">
      <div className="Invoice__card">
        <span>Tidal Sites Invoice Payment</span>
        <form onSubmit={handleInvoiceSearch}>
          <label>
            Enter your Invoice #
            <input
              value={inputInvoice}
              onChange={(e) => {
                setInvoiceNotFound(false);
                setInputInvoice(e.target.value);
              }}
              type="text"
              maxLength={40}
            />
            {invoiceNotFound ? (
              <small>
                <span className="material-icons">error_outline</span>
                <span>Unable to find invoice</span>
              </small>
            ) : (
              ""
            )}
          </label>
          <button disabled={isLoading} type="submit">
            Find Invoice
          </button>
        </form>
        {isLoading ? (
          <LoadingSpinner />
        ) : invoiceURL ? (
          <div className="Invoice__pay">
            <span>Amount due: {currencyFormat.format(invoiceAmount)}</span>
            <a href={invoiceURL}>Pay Invoice</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
