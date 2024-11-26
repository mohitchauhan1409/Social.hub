import React from 'react';
import { FiHeart, FiMessageCircle, FiRepeat, FiShare2, FiThumbsUp, FiBookmark } from 'react-icons/fi';

interface PlatformPreviewProps {
  platform: string;
  content: string;
  companyName: string;
  image: string | null;
}

export const PlatformPreview: React.FC<PlatformPreviewProps> = ({
  platform,
  content,
  companyName,
  image
}) => {
  const renderTwitterPreview = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4">
        <div className="flex space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {companyName.charAt(0)}
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-900">{companyName}</span>
              <span className="text-gray-500">@{companyName.toLowerCase().replace(/\s/g, '')}</span>
            </div>
            <div className="mt-2 text-gray-900" dangerouslySetInnerHTML={{ __html: content }} />
            {image && (
              <div className="mt-3 rounded-xl overflow-hidden border border-gray-100">
                <img src={image} alt="Post" className="w-full h-auto" />
              </div>
            )}
            <div className="flex items-center justify-between mt-4 text-gray-500">
              <button className="flex items-center space-x-2 group">
                <div className="p-2 group-hover:bg-blue-50 rounded-full transition-colors">
                  <FiMessageCircle className="w-5 h-5 group-hover:text-blue-500" />
                </div>
                <span className="group-hover:text-blue-500">24</span>
              </button>
              <button className="flex items-center space-x-2 group">
                <div className="p-2 group-hover:bg-green-50 rounded-full transition-colors">
                  <FiRepeat className="w-5 h-5 group-hover:text-green-500" />
                </div>
                <span className="group-hover:text-green-500">12</span>
              </button>
              <button className="flex items-center space-x-2 group">
                <div className="p-2 group-hover:bg-pink-50 rounded-full transition-colors">
                  <FiHeart className="w-5 h-5 group-hover:text-pink-500" />
                </div>
                <span className="group-hover:text-pink-500">148</span>
              </button>
              <button className="p-2 group-hover:bg-blue-50 rounded-full transition-colors">
                <FiShare2 className="w-5 h-5 group-hover:text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFacebookPreview = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
            {companyName.charAt(0)}
          </div>
          <div>
            <span className="font-bold text-gray-900">{companyName}</span>
            <div className="text-xs text-gray-500 flex items-center space-x-1">
              <span>Just now</span>
              <span>·</span>
              <span>🌎</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: content }} />
        {image && (
          <div className="mt-3 -mx-4 border-t border-b border-gray-100">
            <img src={image} alt="Post" className="w-full h-auto" />
          </div>
        )}
      </div>
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex items-center justify-between text-gray-500">
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <FiThumbsUp className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <FiMessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <FiShare2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderLinkedInPreview = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {companyName.charAt(0)}
          </div>
          <div>
            <span className="font-bold text-gray-900">{companyName}</span>
            <div className="text-xs text-gray-500">Company · Just now</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-gray-900" dangerouslySetInnerHTML={{ __html: content }} />
        {image && (
          <div className="mt-3 -mx-4 border-t border-b border-gray-100">
            <img src={image} alt="Post" className="w-full h-auto" />
          </div>
        )}
      </div>
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-6 text-gray-500">
          <button className="flex items-center space-x-2 group">
            <div className="p-1 group-hover:bg-blue-50 rounded transition-colors">
              <FiThumbsUp className="w-5 h-5 group-hover:text-blue-500" />
            </div>
            <span className="group-hover:text-blue-500">Like</span>
          </button>
          <button className="flex items-center space-x-2 group">
            <div className="p-1 group-hover:bg-blue-50 rounded transition-colors">
              <FiMessageCircle className="w-5 h-5 group-hover:text-blue-500" />
            </div>
            <span className="group-hover:text-blue-500">Comment</span>
          </button>
          <button className="flex items-center space-x-2 group">
            <div className="p-1 group-hover:bg-blue-50 rounded transition-colors">
              <FiRepeat className="w-5 h-5 group-hover:text-blue-500" />
            </div>
            <span className="group-hover:text-blue-500">Repost</span>
          </button>
          <button className="flex items-center space-x-2 group">
            <div className="p-1 group-hover:bg-blue-50 rounded transition-colors">
              <FiShare2 className="w-5 h-5 group-hover:text-blue-500" />
            </div>
            <span className="group-hover:text-blue-500">Send</span>
          </button>
        </div>
      </div>
    </div>
  );

  switch (platform) {
    case 'twitter':
      return renderTwitterPreview();
    case 'facebook':
      return renderFacebookPreview();
    case 'linkedin':
      return renderLinkedInPreview();
    default:
      return null;
  }
};