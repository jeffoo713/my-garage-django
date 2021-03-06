import axios from 'axios';

import {
  addVehicleServiceStart,
  addVehicleServiceSuccess,
  addVehicleServiceFail,
  updateVehicleServiceStart,
  updateVehicleServiceSuccess,
  updateVehicleServiceFail,
  deleteVehicleServiceStart,
  deleteVehicleServiceSuccess,
  deleteVehicleServiceFail,
} from '../vehicle-action-creator/vehicleService-action-creators';
import {
  triggerErrorNotification,
  triggerSuccessNotification,
} from '../../notification/notification-action-creators';

export const addVehicleServiceAsync = serviceInfo => dispatch => {
  dispatch(addVehicleServiceStart());
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('garageToken')}`,
    },
  };
  const body = JSON.stringify(serviceInfo);

  axios
    .post('/api/service/', body, config)
    .then(res => {
      dispatch(addVehicleServiceSuccess(res.data));
      triggerSuccessNotification(dispatch, [
        'Service has been successfully added!',
      ]);
    })
    .catch(err => {
      dispatch(addVehicleServiceFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};

export const updateVehicleServiceAsync =
  (serviceInfo, serviceId) => dispatch => {
    dispatch(updateVehicleServiceStart());
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('garageToken')}`,
      },
    };
    const body = JSON.stringify(serviceInfo);

    axios
      .patch(`/api/service/${serviceId}/`, body, config)
      .then(res => {
        dispatch(updateVehicleServiceSuccess(res.data));
        triggerSuccessNotification(dispatch, [
          'Service has been successfully updated!',
        ]);
      })
      .catch(err => {
        dispatch(updateVehicleServiceFail());
        triggerErrorNotification(dispatch, err.response.data.error);
      });
  };

export const deleteVehicleServiceAsync = serviceId => dispatch => {
  dispatch(deleteVehicleServiceStart());
  const config = {
    headers: {
      Authorization: `Token ${localStorage.getItem('garageToken')}`,
    },
  };
  axios
    .delete(`/api/service/${serviceId}/`, config)
    .then(res => {
      dispatch(deleteVehicleServiceSuccess(res.data.vehicle, serviceId));
      triggerSuccessNotification(dispatch, [
        'Service has been successfully deleted!',
      ]);
    })
    .catch(err => {
      dispatch(deleteVehicleServiceFail());
      triggerErrorNotification(dispatch, err.response.data.error);
    });
};
