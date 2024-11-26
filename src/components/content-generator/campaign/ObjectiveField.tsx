import React from 'react';
import { FiZap } from 'react-icons/fi';

interface ObjectiveFieldProps {
  formData: {
    companyName: string;
    objective: string;
  };
  onInputChange: (field: string, value: any) => void;
  showValidation: boolean;
  isGenerating: boolean;
  onGenerate: () => void;
}

export const ObjectiveField: React.FC<ObjectiveFieldProps> = ({
  formData,
  onInputChange,
  showValidation,
  isGenerating,
  onGenerate,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-indigo-900">Campaign Objective *</label>
        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-pink-100 text-indigo-600 hover:from-indigo-200 hover:to-pink-200 transition-all group relative disabled:opacity-50"
        >
          <FiZap className={`w-4 h-4 ${isGenerating ? 'animate-pulse' : ''}`} />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-indigo-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Generate using AI
          </span>
        </button>
      </div>

      <div className="relative">
        <textarea
          value={formData.objective}
          onChange={(e) => onInputChange('objective', e.target.value)}
          className={`w-full rounded-lg border ${
            showValidation && !formData.objective.trim()
              ? 'border-pink-300 focus:ring-pink-500'
              : 'border-indigo-200 focus:ring-indigo-500'
          } px-4 py-2 focus:outline-none focus:ring-2`}
          placeholder="What is the primary objective of your campaign?"
          rows={4}
          disabled={isGenerating}
        />
        {isGenerating && (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-pink-200 border-b-pink-500 rounded-full animate-spin-reverse"></div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-indigo-600 font-medium">Generating objective</p>
                <p className="text-indigo-400 text-sm">Using AI to craft the perfect campaign objective...</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {showValidation && !formData.objective.trim() && (
        <p className="mt-1 text-sm text-pink-500">Campaign objective is required</p>
      )}
    </div>
  );
};