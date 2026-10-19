import React, { useState } from 'react';
import { X, Image, Upload, FileText, Check, Copy } from 'lucide-react';

interface AssetSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPortraitUrl: string | null;
  onSavePortraitUrl: (url: string | null) => void;
}

export const AssetSetupModal: React.FC<AssetSetupModalProps> = ({
  isOpen,
  onClose,
  currentPortraitUrl,
  onSavePortraitUrl
}) => {
  const [inputUrl, setInputUrl] = useState(currentPortraitUrl || '');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        onSavePortraitUrl(result);
        onClose();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveUrl = () => {
    onSavePortraitUrl(inputUrl.trim() ? inputUrl.trim() : null);
    onClose();
  };

  const handleResetToMonogram = () => {
    onSavePortraitUrl(null);
    setInputUrl('');
    onClose();
  };

  const copyPath = (path: string, index: number) => {
    navigator.clipboard.writeText(path);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#1C1C1C] rounded-3xl border border-[#B69A68]/40 shadow-2xl p-6 sm:p-8 text-[#F7F4ED] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#242424] text-neutral-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-[#242424] border border-[#B69A68]/30 flex items-center justify-center text-[#B69A68]">
            <Image className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-white">
              Portfolio Assets & Portrait Customization
            </h3>
            <p className="text-xs font-mono text-[#B69A68]">
              Configure real assets for Aman Raj
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs text-neutral-300">
          {/* Method 1: Local File Upload Preview */}
          <div className="p-4 rounded-2xl bg-[#141414] border border-neutral-800">
            <h4 className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <Upload className="w-4 h-4 text-[#B69A68]" />
              <span>Instant Local Preview Upload</span>
            </h4>
            <p className="text-neutral-400 mb-3">
              Select an image from your device to immediately preview your real portrait in the hero frame.
            </p>
            <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B69A68] hover:bg-[#D4BC8B] text-[#121212] font-semibold transition-colors">
              <span>Choose Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Method 2: Image URL */}
          <div className="p-4 rounded-2xl bg-[#141414] border border-neutral-800">
            <h4 className="font-semibold text-white mb-1">
              Portrait Image URL
            </h4>
            <p className="text-neutral-400 mb-2">
              Or paste an external public URL to your professional headshot:
            </p>
            <div className="flex gap-2">
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://example.com/portrait.jpg"
                className="flex-1 px-3 py-2 rounded-xl bg-[#242424] border border-neutral-700 text-white font-mono text-xs focus:border-[#B69A68] focus:outline-none"
              />
              <button
                onClick={handleSaveUrl}
                className="px-3.5 py-2 rounded-xl bg-[#242424] hover:bg-[#B69A68] hover:text-[#121212] font-medium border border-neutral-700 transition-colors"
              >
                Apply
              </button>
            </div>
            {currentPortraitUrl && (
              <button
                onClick={handleResetToMonogram}
                className="mt-2 text-[11px] text-[#B69A68] hover:underline block"
              >
                Reset to default creative monogram frame
              </button>
            )}
          </div>

          {/* Deployment Guide for Production Assets */}
          <div className="p-4 rounded-2xl bg-[#141414] border border-neutral-800">
            <h4 className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#B69A68]" />
              <span>Production Asset Locations</span>
            </h4>
            <p className="text-neutral-400 mb-3">
              For permanent deployment, place your files in the following project paths:
            </p>

            <div className="space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#1C1C1C] border border-neutral-800">
                <span>Resume PDF: <span className="text-[#B69A68]">/public/assets/Aman_Raj_Resume.pdf</span></span>
                <button
                  onClick={() => copyPath('/public/assets/Aman_Raj_Resume.pdf', 1)}
                  className="p-1 hover:text-[#B69A68]"
                  title="Copy path"
                >
                  {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-2 rounded-lg bg-[#1C1C1C] border border-neutral-800">
                <span>Portrait: <span className="text-[#B69A68]">/public/assets/portrait.jpg</span></span>
                <button
                  onClick={() => copyPath('/public/assets/portrait.jpg', 2)}
                  className="p-1 hover:text-[#B69A68]"
                  title="Copy path"
                >
                  {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#242424] text-white hover:bg-[#B69A68] hover:text-[#121212] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
