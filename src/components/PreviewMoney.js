import React from "react";
import "./PreviewMoney.css";

const PreviewMoney = () => {
  return (
    <div>
      <div className="previewMoney">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Your main account</h3>
          </div>
          <div className="col-md-6">
            <h3>Your other accounts</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top svgBanner"
                src="/images/BannerPesos.svg"
                alt="Pesos-banner"
              />
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        className="svgBox"
                        src="/images/SquarePesos.svg"
                        alt="Pesos-Square"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="altColor">$ 15.000,00</h3>
                      <p className="text-secondary">Caja pesos</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end align-items-end">
                      <button className="btn btn-primary">Ver detalles</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top svgBanner"
                src="/images/BannerUsd.svg"
                alt="Dolar-Banner"
              />
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        className="svgBox"
                        src="/images/SquareUsd.svg"
                        alt="Dolar-Square"
                      />
                    </div>
                    <div className="col-md-6">
                      <h3 className="altColor">$ 200,00</h3>
                      <p className="text-secondary">Caja dolares</p>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end align-items-end">
                      <button className="btn btn-primary">Ver detalles</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PreviewMoney;
