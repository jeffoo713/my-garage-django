import { vehicleActionTypes } from './vehicle-action-types';

import {
  getVehiclesWithUpdatedVehicleNote,
  addNewVehicleToReducer,
} from './vehicle-reducer-utils';

const INITIAL_STATE = {
  vehicles: [],
  isLoading: false,
};

const vehicleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case vehicleActionTypes.GET_VEHICLES_START:
    case vehicleActionTypes.ADD_VEHICLE_START:
    case vehicleActionTypes.UPDATE_VEHICLE_NOTE_START:
      return {
        ...state,
        isLoading: true,
      };
    case vehicleActionTypes.GET_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        isLoading: false,
      };
    case vehicleActionTypes.ADD_VEHICLE_SUCCESS:
      return {
        ...state,
        vehicles: addNewVehicleToReducer(state.vehicles, action.payload),
        isLoading: false,
      };
    case vehicleActionTypes.UPDATE_VEHICLE_NOTE_SUCCESS:
      return {
        ...state,
        vehicles: getVehiclesWithUpdatedVehicleNote(
          state.vehicles,
          action.payload
        ),
        isLoading: false,
      };
    case vehicleActionTypes.GET_VEHICLES_FAIL:
    case vehicleActionTypes.ADD_VEHICLE_FAIL:
    case vehicleActionTypes.UPDATE_VEHICLE_NOTE_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default vehicleReducer;
