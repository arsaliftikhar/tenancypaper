"use client";

import React, { useState, useEffect, useRef } from "react";
// Using pdf-lib for template overlay
import { Download, Loader2, FileText, ArrowRight, ArrowLeft, CheckCircle2, Camera, X } from "lucide-react";
import Link from "next/link";

export default function GeneratePage() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isExtracting, setIsExtracting] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

  const [uploads, setUploads] = useState({
    landlordId: null,
    tenantId: null,
    titleDeed: null
  });

  // Camera State
  const [cameraState, setCameraState] = useState({ isOpen: false, documentType: null });
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Fetch available templates
    async function fetchTemplates() {
      try {
        const res = await fetch("/api/templates");
        if (res.ok) {
          const data = await res.json();
          // Auto-select UAE/Dubai template
          let template = data.find(t => t.countryCode === 'UAE') || data[0];

          if (!template) {
            // Fallback in case the database is empty or unreachable
            template = {
              countryCode: 'UAE',
              title: 'Dubai Tenancy Contract',
              fields: [
                { name: 'ownerName', label: 'OWNER NAME *', type: 'text', placeholder: 'Full legal name', helpText: 'As recorded on the Title Deed' },
                { name: 'landlordName', label: 'LANDLORD NAME *', type: 'text', placeholder: 'Full legal name', checkboxLabel: 'Same as Owner' },
                { name: 'tenantName', label: 'TENANT NAME *', type: 'text', placeholder: 'Full legal name', helpText: 'As on passport or Emirates ID' },
                { name: 'tenantEmail', label: 'TENANT EMAIL', type: 'email', placeholder: 'tenant@email.com', sectionDivider: 'TENANT CONTACT' },
                { name: 'tenantPhone', label: 'TENANT PHONE', type: 'tel', placeholder: '50 123 4567', prefix: 'AE +971' },
                { name: 'landlordEmail', label: 'LANDLORD EMAIL', type: 'email', placeholder: 'landlord@email.com', sectionDivider: 'LANDLORD CONTACT' },
                { name: 'landlordPhone', label: 'LANDLORD PHONE', type: 'tel', placeholder: '50 123 4567', prefix: 'AE +971' },
                { name: 'propertyUsage', label: 'PROPERTY USAGE', type: 'select', placeholder: 'Select Usage', options: ['Residential', 'Commercial', 'Industrial'], fullWidth: true },
                { name: 'buildingName', label: 'BUILDING NAME *', type: 'text', placeholder: 'e.g. Marina Diamond 3' },
                { name: 'locationArea', label: 'LOCATION / AREA *', type: 'text', placeholder: 'e.g. Dubai Marina' },
                { name: 'propertyNo', label: 'PROPERTY NO.', type: 'text', placeholder: 'e.g. A-1204' },
                { name: 'plotNo', label: 'PLOT NO.', type: 'text', placeholder: 'e.g. 351-0' },
                { name: 'propertySize', label: 'SIZE (S.M)', type: 'text', placeholder: 'sq metres' },
                { name: 'propertyType', label: 'PROPERTY TYPE', type: 'text', placeholder: 'Apartment, Villa...' },
                { name: 'dewaPremise', label: 'PREMISES NO. (DEWA)', type: 'text', placeholder: '7-digit DEWA number', helpText: 'Found on your DEWA bill', fullWidth: true },
                { name: 'contractFrom', label: 'FROM *', type: 'date' },
                { name: 'contractTo', label: 'TO *', type: 'date', helpText: 'Auto-set to 1 year' },
                { name: 'annualRent', label: 'ANNUAL RENT (AED) *', type: 'text', placeholder: 'e.g. 85000', fullWidth: true },
                { name: 'contractValue', label: 'CONTRACT VALUE', type: 'text', placeholder: 'AED 85,000', helpText: 'Auto-filled from Annual Rent', fullWidth: true },
                { name: 'securityDeposit', label: 'SECURITY DEPOSIT', type: 'text', placeholder: 'e.g. AED 4,250', helpText: '5% of annual rent is standard in Dubai', pills: ['5%', '10%', 'Custom'], fullWidth: true },
                { name: 'paymentMode', label: 'MODE OF PAYMENT', type: 'select', placeholder: 'Select...', options: ['1 Cheque', '2 Cheques', '3 Cheques', '4 Cheques', '5 Cheques', '6 Cheques', '7 Cheques', '8 Cheques', '9 Cheques', '10 Cheques', '11 Cheques', '12 Cheques', 'Bank Transfer', 'Cash'], fullWidth: true },
                { name: 'signatureDate', label: 'SIGNATURE DATE', type: 'date', fullWidth: true },
                { name: 'condition1', label: 'CONDITION 1', type: 'text', placeholder: 'e.g. Landlord to repaint unit before handover', sectionDivider: 'ADDITIONAL TERMS - OPTIONAL', sectionSubtext: 'Add up to 8 special conditions agreed between both parties.', fullWidth: true },
                { name: 'condition2', label: 'CONDITION 2', type: 'text', fullWidth: true },
                { name: 'condition3', label: 'CONDITION 3', type: 'text', fullWidth: true },
                { name: 'condition4', label: 'CONDITION 4', type: 'text', fullWidth: true },
                { name: 'condition5', label: 'CONDITION 5', type: 'text', fullWidth: true },
                { name: 'condition6', label: 'CONDITION 6', type: 'text', fullWidth: true },
                { name: 'condition7', label: 'CONDITION 7', type: 'text', fullWidth: true },
                { name: 'condition8', label: 'CONDITION 8', type: 'text', fullWidth: true }
              ]
            };
          }

          setSelectedTemplate(template);
          const initialData = {};
          template.fields.forEach((field) => {
            initialData[field.name] = "";
          });
          setFormData(initialData);
        }
      } catch (error) {
        console.error("Failed to fetch templates:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTemplates();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e, documentType) => {
    const file = e.target.files[0];
    if (file) {
      const isImage = file.type.startsWith('image/');
      const previewUrl = isImage ? URL.createObjectURL(file) : null;

      setUploads(prev => ({
        ...prev,
        [documentType]: {
          file,
          isImage,
          previewUrl,
          name: file.name
        }
      }));
    }
  };

  // Webcam Functions
  const startCamera = async (documentType) => {
    setCameraState({ isOpen: true, documentType });
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera: ", err);
      alert("Could not access your camera. Please ensure you have granted browser permissions.");
      closeCamera();
    }
  };

  const closeCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
    setCameraState({ isOpen: false, documentType: null });
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const file = new File([blob], `${cameraState.documentType}-camera-capture.jpg`, { type: "image/jpeg" });
        const previewUrl = URL.createObjectURL(file);

        setUploads(prev => ({
          ...prev,
          [cameraState.documentType]: {
            file,
            isImage: true,
            previewUrl,
            name: file.name
          }
        }));
        closeCamera();
      }, 'image/jpeg', 0.9);
    }
  };

  const handleSimulateExtraction = () => {
    setIsExtracting(true);
    // Simulate AI extraction delay
    setTimeout(() => {
      // Populate fields with intelligent mock data based on field names
      const extractedData = { ...formData };

      if (selectedTemplate && selectedTemplate.fields) {
        selectedTemplate.fields.forEach(field => {
          const name = field.name.toLowerCase();
          const label = field.label.toLowerCase();

          if (name.includes('owner') || label.includes('owner')) {
            extractedData[field.name] = "Saeed Al Falasi";
          } else if (name.includes('landlord') && name.includes('email')) {
            extractedData[field.name] = "saeed.alfalasi@example.ae";
          } else if (name.includes('landlord') && name.includes('phone')) {
            extractedData[field.name] = "50 987 6543";
          } else if (name.includes('landlord') || label.includes('landlord')) {
            extractedData[field.name] = "Saeed Al Falasi";
          } else if (name.includes('tenant') && name.includes('email')) {
            extractedData[field.name] = "john.doe@email.com";
          } else if (name.includes('tenant') && name.includes('phone')) {
            extractedData[field.name] = "55 123 4567";
          } else if (name.includes('tenant') || label.includes('tenant')) {
            extractedData[field.name] = "John Doe";
          } else if (name.includes('property') && name.includes('usage')) {
            extractedData[field.name] = "Residential";
          } else if (name.includes('building')) {
            extractedData[field.name] = "Marina Heights Tower";
          } else if (name.includes('location') || name.includes('area')) {
            extractedData[field.name] = "Dubai Marina";
          } else if (name === 'propertyNo') {
            extractedData[field.name] = "Unit 1402";
          } else if (name.includes('size')) {
            extractedData[field.name] = "120";
          } else if (name.includes('type')) {
            extractedData[field.name] = "Apartment";
          } else if (name.includes('dewa') || label.includes('dewa') || name.includes('premise')) {
            extractedData[field.name] = "9876543";
          } else if (name.includes('plot') || label.includes('plot')) {
            extractedData[field.name] = "345-890";
          } else if (field.type === 'textarea') {
            extractedData[field.name] = "Extracted standard terms and conditions from DLD Unified Contract.";
          } else {
            extractedData[field.name] = "";
          }
        });
      }

      setFormData(extractedData);
      setIsExtracting(false);
      setStep(2);
    }, 2000);
  };

  const generatePDF = async () => {
    try {
      // Import here to avoid SSR issues if any
      const { PDFDocument, rgb } = await import('pdf-lib');

      // Fetch the existing template
      const url = '/contracts/uae-contract.pdf';
      const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer());

      // Load it
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];

      const size = 11;
      const color = rgb(0.1, 0.1, 0.3); // dark blue-ish text to look distinct

      // The user's screenshot confirms standard DLD layout.
      // Page 1: Parties and Property
      const page1 = pages[0];
      // Page 2: Contract Terms (if available, otherwise fallback to page 1 but lower)
      const page2 = pages.length > 1 ? pages[1] : pages[0];

      // Top Left Date
      const currentDate = new Date().toLocaleDateString('en-GB');
      page1.drawText(currentDate, { x: 60, y: 725, size, color });

      // Owner / Lessor (Top Section)
      // Left Col: X=180
      page1.drawText(formData.ownerName || formData.landlordName || '', { x: 100, y: 665, size, color });
      page1.drawText(formData.landlordName || '', { x: 100, y: 643, size, color });
      page1.drawText(formData.landlordId || '', { x: 180, y: 634, size, color });
      page1.drawText(formData.landlordEmail || '', { x: 100, y: 572, size, color });
      page1.drawText(formData.landlordPhone || '', { x: 100, y: 552, size, color });

      // Tenant (Middle Section)
      page1.drawText(formData.tenantName || '', { x: 100, y: 496, size, color });
      page1.drawText(formData.tenantId || '', { x: 100, y: 488, size, color });
      page1.drawText(formData.tenantEmail || '', { x: 100, y: 428, size, color });
      page1.drawText(formData.tenantPhone || '', { x: 100, y: 403, size, color });

      // Property Information (Bottom Section)
      // Row 2: Plot No (L) | Makani No (R)
      page1.drawText(formData.plotNo || '', { x: 180, y: 334, size, color });
      // Row 3: Building Name (L) | Property No (R)
      page1.drawText(formData.buildingName || '', { x: 180, y: 310, size, color });
      page1.drawText(formData.propertyNo || '', { x: 420, y: 310, size, color });
      // Row 4: Property Type (L) | Property Area (R)
      page1.drawText(formData.propertyType || '', { x: 180, y: 285, size, color });
      page1.drawText(formData.propertySize || '', { x: 420, y: 285, size, color });
      // Row 5: Location (L) | DEWA (R)
      page1.drawText(formData.locationArea || '', { x: 180, y: 261, size, color });
      page1.drawText(formData.dewaPremise || '', { x: 420, y: 261, size, color });

      // Page 2: Contract Terms
      // X=180 (Left) and X=420 (Right)
      page2.drawText(formData.annualRent || '', { x: 180, y: 682, size, color });
      page2.drawText(formData.contractValue || '', { x: 180, y: 658, size, color });
      page2.drawText(formData.securityDeposit || '', { x: 180, y: 634, size, color });
      page2.drawText(formData.paymentMode || '', { x: 180, y: 610, size, color });
      page2.drawText(formData.contractFrom || '', { x: 180, y: 586, size, color });
      page2.drawText(formData.contractTo || '', { x: 420, y: 586, size, color });

      // Save and generate preview URL
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      setPdfPreviewUrl(URL.createObjectURL(blob));
      setStep(5);
    } catch (error) {
      console.error("Failed to generate PDF overlay:", error);
      alert("Failed to load PDF template or generate document.");
    }
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#0066FF]" />
      </div>
    );
  }

  const renderUploadBox = (id, title, subtitle) => {
    const uploadData = uploads[id];

    return (
      <div className={`relative flex flex-col items-center justify-center p-4 bg-white border-2 border-dashed ${uploadData ? 'border-[#0066FF] bg-blue-50/10' : 'border-slate-200'} rounded-2xl transition-all text-center h-64 overflow-hidden`}>

        {uploadData ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            {uploadData.isImage ? (
              <div className="w-full h-32 relative mb-3 rounded-lg overflow-hidden border border-slate-100">
                <img src={uploadData.previewUrl} alt={title} className="object-cover w-full h-full" />
              </div>
            ) : (
              <div className="w-16 h-16 bg-blue-100 text-[#0066FF] rounded-xl flex items-center justify-center mb-3">
                <FileText className="w-8 h-8" />
              </div>
            )}
            <div className="flex items-center gap-1.5 text-[#0066FF] mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-[13px] font-bold truncate max-w-[150px]">{uploadData.name}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 mt-auto w-full">
              <label className="cursor-pointer w-full text-[12px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-200">
                <input type="file" className="hidden" accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, id)} />
                <FileText className="w-4 h-4" /> File
              </label>
              <button
                onClick={() => startCamera(id)}
                className="w-full text-[12px] font-bold text-[#0066FF] bg-blue-50 hover:bg-blue-100 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-blue-100"
              >
                <Camera className="w-4 h-4" /> Camera
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#0B132B] mb-1">{title}</h3>
            <p className="text-[12px] text-slate-500 mb-4">{subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center gap-2 mt-auto w-full">
              <label className="cursor-pointer w-full text-[12px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-200">
                <input type="file" className="hidden" accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, id)} />
                <FileText className="w-4 h-4" /> Choose File
              </label>
              <button
                onClick={() => startCamera(id)}
                className="w-full text-[12px] font-bold text-[#0066FF] bg-blue-50 hover:bg-blue-100 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-blue-100"
              >
                <Camera className="w-4 h-4" /> Camera
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl flex-1 flex flex-col relative">

      {/* CAMERA MODAL */}
      {cameraState.isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-black rounded-2xl overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-[60vh] object-cover bg-slate-900"
            ></video>
            <canvas ref={canvasRef} className="hidden"></canvas>

            <div className="absolute top-4 right-4">
              <button
                onClick={closeCamera}
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <button
                onClick={capturePhoto}
                className="w-16 h-16 bg-white rounded-full border-4 border-slate-300 flex items-center justify-center hover:scale-105 transition-transform"
                title="Capture Document"
              >
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-full shadow-sm"></div>
              </button>
            </div>
          </div>
          <p className="text-white mt-6 font-medium text-lg">
            Position document in frame and tap to capture
          </p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="mb-20 max-w-4xl mx-auto w-full px-6 sm:px-0">
        <div className="flex items-center justify-between w-full">
          {[
            { num: 1, label: "Upload" },
            { num: 2, label: "Parties" },
            { num: 3, label: "Property" },
            { num: 4, label: "Terms" },
            { num: 5, label: "Download" }
          ].map((item, index, array) => (
            <React.Fragment key={item.num}>
              {/* Step */}
              <div className="flex flex-col items-center relative z-10 w-8 sm:w-12">
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-[13px] sm:text-[16px] z-10 transition-all duration-300 ${step >= item.num ? 'bg-[#0066FF] text-white shadow-[0_4px_12px_rgba(0,102,255,0.3)]' : 'bg-slate-100 text-slate-400 border-2 border-slate-200'}`}>
                  {step > item.num ? <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" /> : item.num}
                </div>
                <span className={`absolute top-12 sm:top-16 text-[10px] sm:text-[12px] font-bold whitespace-nowrap transition-colors ${step >= item.num ? 'text-[#0B132B]' : 'text-slate-400'}`}>
                  {item.label}
                </span>
              </div>

              {/* Line */}
              {index < array.length - 1 && (
                <div className={`flex-1 h-[2px] sm:h-[3px] mx-1 sm:mx-2 rounded-full transition-all duration-500 ${step > item.num ? 'bg-[#0066FF]' : 'bg-slate-200'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* STEP 1: Upload Documents */}
      {step === 1 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-[#0B132B] mb-3">Upload your documents</h1>
            <p className="text-slate-500 text-[16px]">
              AI extracts all details automatically. Or skip and fill manually.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderUploadBox("landlordId", "Landlord ID", "Passport or Emirates ID")}
            {renderUploadBox("tenantId", "Tenant ID", "Passport or Emirates ID")}
            {renderUploadBox("titleDeed", "Title Deed", "Official DLD Document")}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4">
            <button
              onClick={handleSimulateExtraction}
              disabled={isExtracting || (!uploads.landlordId && !uploads.tenantId && !uploads.titleDeed)}
              className="bg-[#0066FF] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed shadow-[0_8px_20px_rgba(0,102,255,0.25)] disabled:shadow-none transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {isExtracting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Extracting with AI...
                </>
              ) : (
                <>
                  Extract Details Automatically <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <button
              onClick={() => setStep(2)}
              className="bg-white border-2 border-slate-200 text-[#0B132B] px-8 py-4 rounded-xl font-bold hover:border-[#0B132B] hover:bg-slate-50 transition-all w-full sm:w-auto text-center"
            >
              No documents? Fill manually
            </button>
          </div>
        </div>
      )}

      {/* STEP 2, 3, 4, 5: Generator Wizard */}
      {step >= 2 && step <= 5 && selectedTemplate && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 bg-white p-8 rounded-[24px] shadow-sm border border-slate-100">

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); generatePDF(); }}>
            {(() => {
              const safeFields = selectedTemplate.fields || [];
              const partiesFields = safeFields.filter(f => {
                const n = (f.name || "").toLowerCase();
                const l = (f.label || "").toLowerCase();
                return n.includes('landlord') || l.includes('landlord') || n.includes('tenant') || l.includes('tenant') || n.includes('owner') || l.includes('owner') || n.includes('id') || l.includes('id');
              });

              const propertyFields = safeFields.filter(f => {
                const n = (f.name || "").toLowerCase();
                const l = (f.label || "").toLowerCase();
                return n.includes('property') || l.includes('property') || n.includes('address') || l.includes('address') || n.includes('dewa') || l.includes('dewa') || n.includes('plot') || l.includes('plot') || n.includes('premise') || l.includes('premise') || n.includes('location') || n.includes('building') || n.includes('size');
              });

              const termsFields = safeFields.filter(f => {
                return !partiesFields.includes(f) && !propertyFields.includes(f);
              });

              const renderField = (field) => (
                <React.Fragment key={field.name}>
                  {field.sectionDivider && (
                    <div className="col-span-1 sm:col-span-2 mt-6 mb-2">
                      <div className="flex items-center justify-start">
                        <span className="text-[#0066FF] font-bold text-[11px] tracking-widest uppercase">{field.sectionDivider}</span>
                      </div>
                      {field.sectionSubtext && (
                        <p className="text-[12px] text-slate-500 text-left mt-2">{field.sectionSubtext}</p>
                      )}
                    </div>
                  )}
                  <div className={`flex flex-col gap-2 ${field.type === 'textarea' || field.fullWidth ? 'col-span-1 sm:col-span-2' : ''}`}>
                    <div className="flex items-center justify-between">
                      <label htmlFor={field.name} className="text-[13px] font-bold text-slate-700">
                        {field.label}
                      </label>
                      {field.checkboxLabel && (
                        <label className="flex items-center gap-2 text-xs text-slate-500 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-3.5 h-3.5 rounded border-slate-300 text-[#0066FF] focus:ring-[#0066FF] appearance-auto accent-[#0066FF]"
                            onChange={(e) => {
                              if (e.target.checked && field.name === 'landlordName') {
                                setFormData({ ...formData, landlordName: formData.ownerName || "" });
                              }
                            }}
                          />
                          {field.checkboxLabel}
                        </label>
                      )}
                    </div>
                    {field.pills && (
                      <div className="flex gap-2 mt-1 mb-1">
                        {field.pills.map(pill => (
                          <button
                            key={pill}
                            type="button"
                            onClick={() => {
                              if (field.name === 'securityDeposit' && formData.annualRent) {
                                const rent = parseFloat(formData.annualRent.replace(/,/g, ''));
                                if (!isNaN(rent)) {
                                  if (pill === '5%') {
                                    setFormData({ ...formData, securityDeposit: (rent * 0.05).toString() });
                                  } else if (pill === '10%') {
                                    setFormData({ ...formData, securityDeposit: (rent * 0.10).toString() });
                                  } else if (pill === 'Custom') {
                                    setFormData({ ...formData, securityDeposit: "" });
                                  }
                                }
                              }
                            }}
                            className={`px-4 py-1.5 text-[13px] font-bold rounded-full border border-slate-200 bg-white transition-colors ${pill === 'Custom' ? 'text-[#0066FF] border-[#0066FF] shadow-[0_2px_8px_rgba(0,102,255,0.15)]' : 'text-slate-600 hover:border-[#0066FF] hover:text-[#0066FF]'}`}>
                            {pill}
                          </button>
                        ))}
                      </div>
                    )}
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        placeholder={field.placeholder || ""}
                        className="px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent min-h-[100px] text-slate-700 bg-slate-50 focus:bg-white focus:shadow-sm transition-all text-[14px] font-medium"
                        required={field.label.includes('*')}
                      />
                    ) : field.type === 'select' ? (
                      <div className="relative">
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          className="px-4 py-2 w-full rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent text-slate-700 bg-slate-50 focus:bg-white focus:shadow-sm transition-all text-[14px] font-medium appearance-none"
                          required={field.label.includes('*')}
                        >
                          <option value="" disabled>{field.placeholder}</option>
                          {field.options?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 font-bold text-xs">
                          v
                        </div>
                      </div>
                    ) : field.prefix ? (
                      <div className="flex rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-[#0066FF] focus-within:border-transparent bg-slate-50 focus-within:bg-white focus-within:shadow-sm transition-all">
                        <div className="px-4 py-2 border-r border-slate-200 flex items-center justify-center text-[13px] font-bold text-[#0066FF] bg-slate-100/50 whitespace-nowrap shrink-0">
                          {field.prefix}
                        </div>
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleInputChange}
                          placeholder={field.placeholder || ""}
                          className="px-4 py-2 w-full focus:outline-none text-slate-700 bg-transparent text-[14px] font-medium"
                          required={field.label.includes('*')}
                        />
                      </div>
                    ) : field.type === 'date' ? (
                      <input
                        type="date"
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        className="px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent text-slate-700 bg-slate-50 focus:bg-white focus:shadow-sm transition-all text-[14px] font-medium"
                        required={field.label.includes('*')}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleInputChange}
                        placeholder={field.placeholder || ""}
                        className="px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent text-slate-700 bg-slate-50 focus:bg-white focus:shadow-sm transition-all text-[14px] font-medium"
                        required={field.label.includes('*')}
                      />
                    )}
                    {field.helpText && (
                      <p className="text-[12px] text-slate-400 mt-0.5">{field.helpText}</p>
                    )}
                  </div>
                </React.Fragment>
              );

              return (
                <>
                  {step === 2 && partiesFields.length > 0 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                      <h3 className="text-2xl font-bold text-[#0B132B]">Parties</h3>
                      <p className="text-[14px] text-slate-500 mb-6">Enter names exactly as they appear on official documents.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {partiesFields.map(renderField)}
                      </div>
                      <div className="pt-6 flex justify-between mt-8">
                        <button type="button" onClick={() => setStep(1)} className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">Back</button>
                        <button type="button" onClick={() => setStep(3)} className="bg-[#0066FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-[0_4px_12px_rgba(0,102,255,0.25)]">Next step</button>
                      </div>
                    </div>
                  )}

                  {step === 3 && propertyFields.length > 0 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                      <h3 className="text-2xl font-bold text-[#0B132B]">Property Details</h3>
                      <p className="text-[14px] text-slate-500 mb-6">As per the Title Deed and DEWA records.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {propertyFields.map(renderField)}
                      </div>
                      <div className="pt-6 flex justify-between mt-8">
                        <button type="button" onClick={() => setStep(2)} className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">Back</button>
                        <button type="button" onClick={() => setStep(4)} className="bg-[#0066FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-[0_4px_12px_rgba(0,102,255,0.25)]">Next step</button>
                      </div>
                    </div>
                  )}

                  {step === 4 && termsFields.length > 0 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                      <h3 className="text-2xl font-bold text-[#0B132B]">Contract Terms</h3>
                      <p className="text-[14px] text-slate-500 mb-6">Rental period, financials, and special conditions.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {termsFields.map(renderField)}
                      </div>
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            required
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0066FF] focus:ring-[#0066FF] shrink-0 cursor-pointer appearance-auto accent-[#0066FF]"
                          />
                          <span className="text-[13px] text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                            I have reviewed all information above and confirm it is accurate. I understand that this tool uses AI to extract data from uploaded documents, and I am solely responsible for verifying the details and for any errors in the generated contract. I have read and agree to the <a href="#" className="text-[#0066FF] hover:underline font-medium">Terms of Service</a>.
                          </span>
                        </label>
                      </div>
                      <div className="pt-8 flex justify-between">
                        <button type="button" onClick={() => setStep(3)} className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors">Back</button>
                        <button
                          type="submit"
                          disabled={!termsAccepted}
                          className={`px-8 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 ${termsAccepted ? 'bg-[#0066FF] text-white hover:bg-blue-700 shadow-[0_8px_20px_rgba(0,102,255,0.25)]' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                        >
                          <Download className="w-5 h-5" />
                          Preview PDF
                        </button>
                      </div>
                    </div>
                  )}
                </>
              );
            })()}
          </form>
        </div>
      )}

      {/* STEP 5: PDF Preview */}
      {step === 5 && pdfPreviewUrl && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 bg-white p-8 rounded-[24px] shadow-sm border border-slate-100">
          <h3 className="text-2xl font-bold text-[#0B132B]">Preview & Download</h3>
          <p className="text-[14px] text-slate-500 mb-6">Review your filled tenancy contract below. If you spot any mistakes, you can go back and edit.</p>

          <div className="w-full h-[600px] sm:h-[800px] rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
            <iframe src={`${pdfPreviewUrl}#toolbar=0`} className="w-full h-full" />
          </div>

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-between">
            <button type="button" onClick={() => setStep(4)} className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors w-full sm:w-auto text-center">Back to Edit</button>
            <a
              href={pdfPreviewUrl}
              download="Dubai_Tenancy_Contract_Filled.pdf"
              className="bg-[#0066FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,102,255,0.25)] w-full sm:w-auto text-center"
            >
              <Download className="w-5 h-5" />
              Download Final PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
