import React, { useState, useEffect } from "react";

export default function Step3({ formData, onPreviousStep, onNextStep }) {
  const [documents, setDocuments] = useState([{ type: "", file: null }]);

  // Предзаполняем документы из formData, если они существуют
  useEffect(() => {
    if (formData.documents && formData.documents.length > 0) {
      setDocuments(formData.documents);
    }
  }, [formData]);

  const handleDocumentChange = (index, field, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index][field] = value;
    setDocuments(updatedDocuments);
  };

  const handleAddDocument = () => {
    setDocuments([...documents, { type: "", file: null }]);
  };

  const handleRemoveDocument = (index) => {
    const updatedDocuments = documents.filter((_, i) => i !== index);
    setDocuments(updatedDocuments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData, documents };
    onNextStep(updatedFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-lg font-semibold">
        Ընտրեք փաստաթղթի տեսակը և վերբեռնեք:
      </h3>

      {documents.map((doc, index) => (
        <div
          key={index}
          className="space-y-2 border-b pb-4 mb-4 flex gap-7 items-center"
        >
          {/* Select Document Type */}
          <div>
            <label
              htmlFor={`type-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Փաստաթղթի տեսակ
            </label>
            <select
              id={`type-${index}`}
              name={`type-${index}`}
              value={doc.type}
              onChange={(e) =>
                handleDocumentChange(index, "type", e.target.value)
              }
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>
                Ընտրեք փաստաթղթի տեսակ
              </option>
              <option value="Պայմանագրեր">Պայմանագրեր</option>
              <option value="Դասական փաստաթղթեր">Դասական փաստաթղթեր</option>
              <option value="Վկայականներ">Վկայականներ</option>
              <option value="Ֆինանսական փաստաթղթեր">
                Ֆինանսական փաստաթղթեր
              </option>
              <option value="Նոտարական փաստաթղթեր">Նոտարական փաստաթղթեր</option>
            </select>
          </div>

          {/* Upload File */}
          <div>
            <label
              htmlFor={`file-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Վերբեռնել փաստաթուղթ
            </label>
            <input
              type="file"
              id={`file-${index}`}
              name={`file-${index}`}
              onChange={(e) =>
                handleDocumentChange(index, "file", e.target.files[0])
              }
              className="block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Remove Document Button */}
          {documents.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveDocument(index)}
              className="text-red-500 text-sm mt-2"
            >
              Ջնջել փաստաթուղթը
            </button>
          )}
        </div>
      ))}

      {/* Add Another Document */}
      <button
        type="button"
        onClick={handleAddDocument}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Ավելացնել ևս մեկ փաստաթուղթ
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onPreviousStep}
          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Նահանջել
        </button>
        <button
          type="submit"
          className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Հաջորդ
        </button>
      </div>
    </form>
  );
}
