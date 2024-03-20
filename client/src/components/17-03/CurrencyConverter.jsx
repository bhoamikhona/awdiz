import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const CurrencyConverter = () => {
  const [disable, setDisable] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState({
    first: "",
    second: "",
  });
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [inputAmount, setInputAmount] = useState(1); // Set default amount to 1

  const options = {
    method: "GET",
    url: "https://currency-exchange.p.rapidapi.com/listquotes",
    headers: {
      "X-RapidAPI-Key": "70e311e7cemsh3bc616aa5a797bdp147e88jsn06780403abe7",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  async function getCurrencies() {
    try {
      const response = await axios.request(options);
      setCurrencies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setSelectedCurrencies({
      ...selectedCurrencies,
      [event.target.name]: event.target.value,
    });
  }

  async function Convert() {
    const options = {
      method: "GET",
      url: "https://currency-exchange.p.rapidapi.com/exchange",
      params: {
        from: "USD",
        to: "INR",
        q: "5",
      },
      headers: {
        "X-RapidAPI-Key": "70e311e7cemsh3bc616aa5a797bdp147e88jsn06780403abe7",
        "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      setConvertedAmount(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (selectedCurrencies.first && selectedCurrencies.second && inputAmount) {
      setDisable(false);
    }
  }, [selectedCurrencies, inputAmount]);

  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <section className="cc-app__container">
      <div className="cc-app__card">
        <h1 className="cc-app__heading">Currency Converter</h1>
        <div className="cc-app__body">
          <div className="cc-app__input-control">
            <label className="cc-app__input-label" htmlFor="amt">
              Amount
            </label>
            <input
              className="cc-app__input"
              type="number"
              // value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              id="amt"
              placeholder="Amount"
            />
          </div>
          <div className="cc-app__choices">
            <div className="cc-app__from-container">
              <label>From:</label>
              <select
                className="cc-app__select"
                onChange={handleChange}
                name="first"
              >
                <option className="cc-app__option" selected disabled>
                  Select Currency
                </option>
                {currencies.map((c) => (
                  <option className="cc-app__option" value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="cc-app__to-container">
              <label>To:</label>
              <select
                className="cc-app__select"
                onChange={handleChange}
                name="second"
              >
                <option className="cc-app__option" selected disabled>
                  Select Currency
                </option>
                {currencies.map((c) => (
                  <option className="cc-app__option" value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="cc-app__footer">
          <button className="cc-app__btn" disabled={disable} onClick={Convert}>
            Convert
          </button>
          {convertedAmount && (
            <div className="cc-app__result">
              {inputAmount} {selectedCurrencies.first} ={" "}
              {(convertedAmount * inputAmount).toFixed(2)}{" "}
              {selectedCurrencies.second}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
