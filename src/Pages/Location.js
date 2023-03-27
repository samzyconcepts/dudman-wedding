import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const iframeData = document.querySelector('#iframeId');
    const lat = 6.533429548065941;
    const lon = 3.329392150720311;
    iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div>
      <iframe title='church map' id='iframeId' height='1000px' width='100%'></iframe>
    </div>
  );
}
