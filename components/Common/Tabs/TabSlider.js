import './TabSlider.module.scss';

const TabSlider = ({ left, width = 100 }) => {
  return (
    <div
      className="slider"
      style={{ width, transform: `translateX(${left}px)` }}
    />
  );
};

export default TabSlider;
