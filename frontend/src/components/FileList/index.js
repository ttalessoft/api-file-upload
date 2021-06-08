import React from 'react';

import { Container, FileInfo, Preview } from './styles';

const FileList = () => {
  <Container>
    <li>
      <FileInfo>
        <Preview src="http://localhost:3000/files/f554f1a71eb7c6a296c614895ad55c07-thanos.jpg" />
        <div>
          <strong>profile.png</strong>
          <span>64kb <button onClick={() => { }}>Excluir</button></span>
        </div>
      </FileInfo>
    </li>
  </Container>
}

export default FileList;