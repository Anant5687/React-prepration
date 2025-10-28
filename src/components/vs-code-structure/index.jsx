import React, { useMemo, useState } from 'react';
import { VsCodeMockData } from '../../helpers/constants';

const FileNodeStructure = React.memo(({ data }) => {
  const [renderNodes, setRenderNodes] = useState(data ? data : []);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const openFolderHandeler = (i, type) => {
    if (type === 'file') {
      const fileName = [...renderNodes]?.filter((ele) => i === ele?.id);

      setSelectedFiles([...selectedFiles, fileName?.[0]?.name]);

      return;
    }

    const newArr = [...renderNodes]?.map((ele) => {
      if (i === ele?.id) {
        return {
          ...ele,
          isOpen: true,
        };
      } else {
        return { ...ele };
      }
    });
    setRenderNodes(newArr);
  };

  return (
    <div>
      {renderNodes?.map((ele) => (
        <div key={ele?.id}>
          <span
            style={{
              color: ele?.type === 'folder' ? '#6BA32D' : '#000000',
              cursor: selectedFiles?.includes(ele?.name)
                ? 'not-allowed'
                : 'pointer',
            }}
            onClick={() => openFolderHandeler(ele?.id, ele?.type)}
          >
            {ele?.name}
          </span>

          {ele?.isOpen ? (
            <div style={{ marginLeft: '30px' }}>
              <FileNodeStructure data={ele?.children} />{' '}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
});

const VsCodeStructure = () => {
  const optimisedData = useMemo(() => VsCodeMockData, []);
  return (
    <div>
      <FileNodeStructure data={optimisedData} />
    </div>
  );
};

export default VsCodeStructure;
