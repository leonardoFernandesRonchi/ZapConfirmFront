import type { ReactNode } from 'react';

const Input = ({ name, icon }: { name: string; icon?: ReactNode }) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {name}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type="text"
          id={name}
          className={`w-full h-12 rounded-lg border bg-[#F8FAFC] border-gray-300 
          ${icon ? 'pl-10' : 'px-4'} 
          pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder={`Digite seu ${name}`}
        />
      </div>
    </div>
  );
};

export default Input;
