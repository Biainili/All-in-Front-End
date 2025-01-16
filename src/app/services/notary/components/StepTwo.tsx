"use client";

import React, { useState, useEffect, useCallback } from "react";

interface Step2Props {
  requiredDocuments: string[]; // Պարտադիր փաստաթղթերի ցանկ
  uploadedDocuments: Record<string, File[]>; // Արդեն բեռնված ֆայլերը
  onComplete: (data: Record<string, File[]>) => void; // Տվյալների փոխանցում ծնողական կոմպոնենտին
  onBack: () => void; // Վերադարձ նախորդ քայլին
}

const ALLOWED_TYPES = ["image/jpeg", "image/png", "application/pdf"]; // Թույլատրելի ֆայլերի տեսակները
const MAX_FILE_SIZE = 5 * 1024 * 1024; // Ֆայլի առավելագույն չափը՝ 5ՄԲ
const MIN_FILES_REQUIRED = 1; // Ֆայլերի նվազագույն քանակը յուրաքանչյուր փաստաթղթի համար

export default function StepTwo({
  requiredDocuments,
  uploadedDocuments,
  onComplete,
  onBack,
}: Step2Props) {
  const [files, setFiles] = useState<Record<string, File[]>>(uploadedDocuments);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [allRequiredUploaded, setAllRequiredUploaded] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const isValid = requiredDocuments.every(
      (doc) => files[doc] && files[doc].length >= MIN_FILES_REQUIRED
    );
    setAllRequiredUploaded(isValid);
  }, [files, requiredDocuments]);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, document: string) => {
      if (e.target.files) {
        const newFiles = Array.from(e.target.files);
        const newErrors: string[] = [];

        const validFiles = newFiles.filter((file) => {
          if (!ALLOWED_TYPES.includes(file.type)) {
            newErrors.push(`Ֆայլի "${file.name}" տեսակը չի աջակցվում։`);
            return false;
          }
          if (file.size > MAX_FILE_SIZE) {
            newErrors.push(
              `Ֆայլ "${file.name}"-ը գերազանցում է թույլատրելի չափը (5ՄԲ)։`
            );
            return false;
          }
          return true;
        });

        if (newErrors.length > 0) {
          setErrors((prev) => ({ ...prev, [document]: newErrors.join(" ") }));
          return;
        }

        setFiles((prev) => ({
          ...prev,
          [document]: [...(prev[document] || []), ...validFiles],
        }));

        setErrors((prev) => ({ ...prev, [document]: "" }));
      }
    },
    []
  );

  const handleFileRemove = (document: string, index: number) => {
    setFiles((prev) => ({
      ...prev,
      [document]: prev[document].filter((_, i) => i !== index),
    }));
  };

  const handleNext = async () => {
    setUploading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setUploading(false);
      onComplete(files);
    } catch (error) {
      console.error("Ներբեռնման սխալ:", error);
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Քայլ 2: Փաստաթղթերի բեռնում</h2>
      <form className="flex flex-col gap-6">
        {requiredDocuments.map((document) => (
          <div key={document} className="flex flex-col gap-2">
            <label className="font-medium">{document}</label>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, document)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {errors[document] && (
              <p className="text-red-500 text-sm">{errors[document]}</p>
            )}
            <ul className="mt-2">
              {(files[document] || []).map((file, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleFileRemove(document, index)}
                    className="text-red-500 hover:underline"
                  >
                    Հեռացնել
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </form>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
        >
          Հետ
        </button>
        <button
          type="button"
          disabled={!allRequiredUploaded || uploading}
          onClick={handleNext}
          className={`px-4 py-2 rounded-lg text-white ${
            allRequiredUploaded && !uploading
              ? "bg-indigo-500 hover:bg-indigo-600"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {uploading ? "Ներբեռնում..." : "Հաջորդ"}
        </button>
      </div>
    </div>
  );
}
