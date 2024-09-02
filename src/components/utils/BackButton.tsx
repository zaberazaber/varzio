import { useRouter } from 'next/router';
import { FiArrowLeft } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';



    
      type Props = {
        label: string;
        className?: string;
      } & React.ButtonHTMLAttributes<HTMLButtonElement>;
      
      export const BackButton = ({ label , className, ...rest }: Props) => {
        const router = useRouter();

        
const goBack = () => {
  router.back();
};

        return (
          <button
          onClick={goBack}
            className={twMerge(
              `
                  z-1 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md 
                  border border-rose-700 bg-gradient-to-br from-rose-800 to-rose-950
                 px-3 
               `,
              className
            )}
            {...rest}
          >
          <FiArrowLeft />
         {label}
          </button>
        );
      };