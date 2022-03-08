import { connect } from 'react-redux';

import { UserGreet, VehicleCard } from '.';
import { CustomLink } from '../Utils';

const SideBar = ({ sideBarDisplay }) => {
  return (
    <div
      className={`col-span-2 flex flex-col items-center py-8 bg-zinc-500/80 text-slate-200 absolute w-[16rem] h-full -left-[16rem] transition duration-700 ease-in-out ${
        sideBarDisplay && 'translate-x-full'
      }`}
    >
      <UserGreet />
      <VehicleCard />
      <VehicleCard />
      <CustomLink>Shops</CustomLink>
    </div>
  );
};

const mapStateToProps = state => ({
  sideBarDisplay: state.sideBar.display,
});

export default connect(mapStateToProps)(SideBar);
