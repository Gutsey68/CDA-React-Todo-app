import { Check } from 'lucide-react';

type CheckBoxProps = {
    isCompleted: boolean;
    onClick?: () => void;
};

function CheckBox({ isCompleted, ...props }: CheckBoxProps) {
    return (
        <>
            {isCompleted ? (
                <div
                    {...props}
                    className="rounded-full w-[24px] h-[24px] bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center cursor-pointer hover:from-fuchsia-600 hover:to-cyan-600"
                >
                    <Check size={16} className="text-white" />
                </div>
            ) : (
                <div
                    {...props}
                    className="rounded-full w-[24px] h-[24px] bg-gray-300 dark:bg-gray-600 group-hover:bg-gradient-to-br hover:bg-gradient-to-br group-hover:from-fuchsia-500 hover:from-fuchsia-500 group-hover:to-cyan-500 hover:to-cyan-500 flex items-center justify-center"
                >
                    <div className="rounded-full w-[21px] h-[21px] bg-white dark:bg-gray-800 cursor-pointer"></div>
                </div>
            )}
        </>
    );
}
export default CheckBox;
