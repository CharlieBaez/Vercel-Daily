import clsx from 'clsx';

export type SpinnerSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface SpinnerProps {
  strokeColor?: string;
  trackColor?: string;
  size?: SpinnerSize;
}

export const spinnerSizeClasses: Record<SpinnerSize, string> = {
  xxs: 'h-4 w-4',
  xs: 'h-5 w-5',
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
  xl: 'h-15 w-15',
};
export const strokeSize: Record<SpinnerSize, string> = {
  xxs: '1',
  xs: '2',
  sm: '3',
  md: '4',
  lg: '8',
  xl: '4',
};

const Spinner = ({
  strokeColor = 'current',
  trackColor = 'current',
  size = 'md',
}: SpinnerProps) => {

  const spinnerStyle = {
    strokeColor: strokeColor,
    trackColor: trackColor,
    borderWidth: `${strokeSize[size]}px`,
  };

  return (
    <div className="flex justify-center items-center">
      <svg
        className={clsx(spinnerSizeClasses[size], 'animate-spin')}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke={spinnerStyle.trackColor}
          strokeWidth={spinnerStyle.borderWidth}
        ></circle>
        <path
          className="opacity-75"
          fill={spinnerStyle.strokeColor}
          strokeLinecap="round"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export default Spinner;
