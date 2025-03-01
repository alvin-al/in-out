import { FaRegTrashAlt } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const BentoList = ({
  listCode,
  setListCode,
}: {
  listCode: string[];
  setListCode: (value: string[]) => void;
}) => {
  const handleRemoveItem = (index: number) => {
    const newList = listCode.filter((_, i) => i !== index);
    setListCode(newList);
  };

  return (
    <div className='bg-white rounded-md shadow-lg overflow-hidden'>
      {/* Header */}
      <div className='bg-[#20631e] p-4'>
        <h2 className='text-base font-semibold text-white'>Daftar Kerat</h2>
      </div>

      {/* List Content */}
      <div className='p-6 bg-gray-50'>
        {listCode.length > 0 ? (
          <ul className='space-y-3'>
            {listCode.map((item, index) => (
              <li
                key={index}
                className='flex items-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow justify-between'
              >
                <span className='flex items-center'>
                  <span className='flex items-center justify-center w-8 h-8 mr-3 bg-[#e6f4e7] text-[#20631e] rounded-full font-medium'>
                    {index + 1}
                  </span>
                  <span className='text-gray-700'>{item}</span>
                </span>
                <span className=''>
                  <button
                    className='p-2 text-white bg-[#20631e] hover:bg-[#184f17] rounded-full transition-colors'
                    onClick={() => handleRemoveItem(index)}
                  >
                    <FaRegTrashAlt className='w-4 h-4' />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className='text-center py-8 text-gray-500'>
            Belum ada data kerat
          </div>
        )}
      </div>

      {/* Footer */}
      {listCode.length > 0 && (
        <div className='border-t border-gray-200'>
          <div className='p-4 flex items-center justify-between bg-white'>
            <div className='flex items-center space-x-2'>
              <span className='px-3 py-1 bg-[#e6f4e7] text-[#20631e] rounded-full text-sm font-medium'>
                Total Kerat: {listCode.length}
              </span>
            </div>
            <button
              onClick={() => setListCode([])}
              className='flex items-center px-4 py-2 gap-1 bg-[#e6f4e7] text-[#20631e] hover:bg-[#184f17] hover:text-white rounded-lg transition-colors'
            >
              <VscDebugRestart />
              Ulangi
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BentoList;
