'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('ChunkLoadError') ||
      error?.message?.includes('Loading chunk') ||
      error?.message?.includes('Failed to load chunk') ||
      error?.message?.includes('Failed to fetch dynamically imported module');

    if (isChunkError) {
      const hasReloaded = sessionStorage.getItem('chunk_error_reloaded');

      if (!hasReloaded) {
        console.warn('Stale chunk detected — reloading once...');
        sessionStorage.setItem('chunk_error_reloaded', 'true');
        window.location.reload();
      } else {
        console.error('Chunk error persisted after reload.');
        setTimeout(() => sessionStorage.removeItem('chunk_error_reloaded'), 5000);
      }
    }
  }, [error]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Something went wrong</h2>
      <p>Try refreshing the page.</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}
