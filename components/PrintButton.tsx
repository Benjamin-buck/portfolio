"use client";

import { useState } from "react";
import { FaDownload, FaSpinner } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PrintButton = () => {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    const element = document.getElementById("resume-card");
    if (!element) return;

    setLoading(true);

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    });

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgData = canvas.toDataURL("image/png");
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position -= pageHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Benjamin-Alan-Resume-2026.pdf");
    setLoading(false);
  };

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      className="no-print flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" size={13} /> Generating...
        </>
      ) : (
        <>
          <FaDownload size={13} /> Export PDF
        </>
      )}
    </button>
  );
};

export default PrintButton;
