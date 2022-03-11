import { connect } from 'react-redux';

import { VehiclePost } from '.';

const Dashboard = ({ vehicles }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold border-b-4 border-zinc-800'>
        DASHBOARD
      </h2>
      <div className='p-12 flex flex-wrap gap-8 justify-center'>
        {vehicles.map(vehicle => (
          <VehiclePost key={vehicle.id} {...vehicle} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles,
});

export default connect(mapStateToProps)(Dashboard);