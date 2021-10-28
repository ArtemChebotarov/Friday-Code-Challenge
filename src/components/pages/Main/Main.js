import React, { useEffect, useState } from "react";

import "./Main.scss";

import {
  getMakes,
  getModels,
  getVehicles,
} from "../../../services/vehicles.service";
import {
  setMakes,
  setModels,
  setVehicles,
} from "../../../store/actions/vehicles.actions";
import { useDispatch, useSelector } from "react-redux";
import { InfoBanner, Item } from "../../atoms";
import { Flexbox } from "../../templates";

const Main = () => {
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicles);

  const [selectedMake, setSelectedMake] = useState();
  const [selectedModel, setSelectedModel] = useState();
  const [selectedVehicle, setSelectedVehicle] = useState();

  const fetchMakes = () => {
    getMakes()
      .then((res) => dispatch(setMakes(res.data)))
      .catch(() => {
        dispatch(setMakes(null));
        if (vehicles.models) {
          dispatch(setModels([]));
        }
        if (vehicles.vehicles) {
          dispatch(setVehicles([]));
        }
      });
  };

  const fetchModels = () => {
    if (selectedMake) {
      setSelectedModel(null);
      getModels(vehicles.makes[selectedMake])
        .then((res) => dispatch(setModels(res.data)))
        .catch(() => {
          dispatch(setModels(null));
          if (vehicles.vehicles) {
            dispatch(setVehicles([]));
          }
        });
    }
  };

  const fetchVehicles = () => {
    if (selectedModel && selectedMake) {
      getVehicles(vehicles.makes[selectedMake], vehicles.models[selectedModel])
        .then((res) => dispatch(setVehicles(res.data)))
        .catch(() => dispatch(setVehicles(null)));
    }
  };

  const getErrorSection = (passFunc) => {
    return (
      <div className={"main-page--section--list--error"}>
        <p>Something went wrong</p>
        <button onClick={passFunc} type={"button"}>
          Try again
        </button>
      </div>
    );
  };

  useEffect(() => {
    fetchMakes();
  }, []);

  useEffect(() => {
    fetchModels();
  }, [selectedMake]);

  useEffect(() => {
    fetchVehicles();
  }, [selectedModel]);

  return (
    <div className={"main-page"}>
      <div className={"main-page--section"}>
        <h2 className={"main-page--section--title"}>Makes</h2>

        <div className={"main-page--section--list"}>
          {vehicles.makes
            ? vehicles.makes?.map((make, index) => {
                return (
                  <Item
                    id={index}
                    selected={selectedMake === index}
                    setSelected={setSelectedMake}
                    content={<p>{make}</p>}
                  />
                );
              })
            : getErrorSection(fetchMakes)}
        </div>
      </div>
      <div className={"main-page--section"}>
        <h2 className={"main-page--section--title"}>Models</h2>

        <div className={"main-page--section--list"}>
          {selectedMake ? (
            vehicles.models ? (
              vehicles.models.map((model, index) => {
                return (
                  <Item
                    selected={selectedModel === index}
                    id={index}
                    setSelected={setSelectedModel}
                    content={<p>{model}</p>}
                  />
                );
              })
            ) : (
              getErrorSection(fetchModels)
            )
          ) : (
            <div className={"main-page--section--list--empty"}>
              <p>Firstly choose a vehicle make </p>
            </div>
          )}
        </div>
      </div>
      <div className={"main-page--section"}>
        <Flexbox additionalStyle={{ alignItems: "center" }}>
          <h2 className={"main-page--section--title"}>Vehicles</h2>
          <InfoBanner
            content={
              <p>
                enginePowerPS/enginePowerKW/fuelType/bodyType/engineCapacity
              </p>
            }
            additionalStyle={{ marginLeft: 10 }}
          />
        </Flexbox>

        <div className={"main-page--section--list"}>
          {selectedModel ? (
            vehicles.vehicles ? (
              vehicles.vehicles.map((vehicle, index) => {
                return (
                  <Item
                    selected={selectedVehicle === index}
                    setSelected={setSelectedVehicle}
                    id={index}
                    content={
                      <p>
                        {vehicle.enginePowerPS}/{vehicle.enginePowerKW}/
                        {vehicle.fuelType}/{vehicle.bodyType}/
                        {vehicle.engineCapacity}
                      </p>
                    }
                  />
                );
              })
            ) : (
              getErrorSection(fetchVehicles)
            )
          ) : (
            <div className={"main-page--section--list--empty"}>
              <p>Firstly choose a vehicle model </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
