import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Werdsmith X — AI Writing App for Android, Offline-First';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared social-preview card for every route; portfolio pages override it with
// their own cover/avatar via generateMetadata when one exists.
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), 'public', 'logo.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 32,
          backgroundColor: '#FAF9F6',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/image doesn't run inside ImageResponse */}
        <img src={logoSrc} alt="" width={140} height={140} style={{ borderRadius: 28 }} />
        <div style={{ display: 'flex', fontSize: 88, fontWeight: 600, color: '#1C1917' }}>
          Werdsmith X
        </div>
        <div style={{ display: 'flex', fontSize: 34, color: '#78716C', textAlign: 'center' }}>
          The writing app that thinks with you, not for you.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 16,
            padding: '10px 28px',
            borderRadius: 999,
            backgroundColor: '#3730A3',
            color: '#FFFFFF',
            fontSize: 24,
          }}
        >
          Coming soon to Android
        </div>
      </div>
    ),
    size,
  );
}
