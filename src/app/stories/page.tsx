"use client";
import React, { useState, useEffect } from "react";
import PageContainer from "../components/pagecontainer";

const PdfUploader: React.FC = () => {
  const [pdfFiles, setPdfFiles] = useState<{ name: string; blobUrl: string }[]>(
    []
  );

  // Load PDFs from local storage on component mount
  useEffect(() => {
    // Blob URLs cannot be stored in local storage, so this part is removed
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newPdfFiles = files.map((file) => {
        const blobUrl = URL.createObjectURL(file);
        return { name: file.name, blobUrl };
      });

      setPdfFiles((prevPdfs) => [...prevPdfs, ...newPdfFiles]);
    }
  };

  const openPdf = (blobUrl: string) => {
    window.open(blobUrl, "_blank");
  };

  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center p-4 bg-gray-300">
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileChange}
          className="mb-4 p-2 border rounded shadow"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pdfFiles.map((pdfFile, index) => (
            <div
              key={index}
              className="max-w-md rounded overflow-hidden shadow-lg p-4 relative"
            >
              <h3 className="text-lg font-bold mb-2">{pdfFile.name}</h3>
              <iframe
                src={pdfFile.blobUrl}
                title={pdfFile.name}
                className="w-full h-96"
              ></iframe>
              <div
                className="absolute top-0 left-0 w-full h-full cursor-pointer"
                onClick={() => openPdf(pdfFile.blobUrl)}
                aria-label={`Open PDF ${pdfFile.name}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default PdfUploader;
