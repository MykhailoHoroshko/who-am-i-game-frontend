import clsx from 'clsx';
import './screen-wrapper.scss';

function ScreenWrapper({ children, className }) {
  return <div className={clsx('screen-wrapper', className)}>{children}</div>;
}

export default ScreenWrapper;
