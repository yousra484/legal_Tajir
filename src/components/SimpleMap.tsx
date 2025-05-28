
import React from 'react';

interface SimpleMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  width?: string;
  height?: string;
  className?: string;
}

const SimpleMap: React.FC<SimpleMapProps> = ({
  lat,
  lng,
  zoom = 15,
  width = '100%',
  height = '400px',
  className = ''
}) => {
  const bbox = [
    lng - 0.01, // left
    lat - 0.005, // bottom
    lng + 0.01, // right
    lat + 0.005, // top
  ].join(',');

  return (
    <div className={`overflow-hidden rounded-lg shadow-md ${className}`} style={{ width, height }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`}
        style={{ border: 'none' }}
      />
      <div className="mt-2 text-center">
        <a
          href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=${zoom}/${lat}/${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold-600 hover:text-gold-700 hover:underline inline-flex items-center"
        >
          <span>Voir la carte complète</span>
          <svg
            className="w-3 h-3 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SimpleMap;
