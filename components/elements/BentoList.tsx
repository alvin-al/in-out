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
    <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
      {/* Header */}
      <div className='bg-gradient-to-r from-blue-500 to-blue-600 p-4'>
        <h2 className='text-xl font-semibold text-white'>Daftar Kerat</h2>
      </div>

      {/* List Content */}
      <div className='p-6 bg-gray-50'>
        {listCode.length > 0 ? (
          <ul className='space-y-3'>
            {listCode.map((item, index) => (
              <li
                key={index}
                className='flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow justify-between'
              >
                <span className='flex items-center'>
                  <span className='flex items-center justify-center w-8 h-8 mr-3 bg-blue-100 text-blue-600 rounded-full font-medium'>
                    {index + 1}
                  </span>
                  <span className='text-gray-700'>{item}</span>{" "}
                </span>
                <span className=''>
                  <button
                    className='p-2 text-white bg-red-500 rounded-full'
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
        <div className='border-t border-gray-100'>
          <div className='p-4 flex items-center justify-between bg-white'>
            <div className='flex items-center space-x-2'>
              <span className='px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium'>
                Total Kerat: {listCode.length}
              </span>
            </div>
            <button
              onClick={() => setListCode([])}
              className='flex items-center px-4 py-2 gap-1 bg-blue-100 hover:bg-red-600 text-gray-800 rounded-lg transition-colors'
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
