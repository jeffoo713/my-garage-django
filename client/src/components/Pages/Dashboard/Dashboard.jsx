import { connect } from 'react-redux';

import { VehiclePost, AddVehiclePost } from '.';

const Dashboard = ({ vehicles }) => {
  return (
    <div className='p-12 w-11/12 max-w-[1280px] mx-auto'>
      <h2 className='text-3xl font-bold border-b-4 border-zinc-800'>
        DASHBOARD
      </h2>
      <div className='p-12 flex flex-wrap gap-8 justify-center'>
        {!vehicles.length ? (
          <AddVehiclePost />
        ) : (
          vehicles.map(vehicle => <VehiclePost key={vehicle.id} {...vehicle} />)
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(Dashboard);
