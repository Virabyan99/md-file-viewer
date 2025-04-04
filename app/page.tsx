'use client';

import { useState } from 'react';
import Dropzone from '@/components/Dropzone';

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        <Dropzone onFileAccepted={setSelectedFile} />

        {selectedFile && (
          <div className="mt-6 text-center text-sm text-gray-600">
            File ready to parse: <strong>{selectedFile.name}</strong>
          </div>
        )}
      </div>
    </main>
  );
}
