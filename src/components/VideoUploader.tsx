import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Upload, Loader2 } from 'lucide-react';

interface VideoUploaderProps {
  categoryId: string;
  onSuccess?: () => void;
}

export default function VideoUploader({ categoryId, onSuccess }: VideoUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile || !thumbnailFile || !title) return;

    try {
      setUploading(true);

      // Upload video file
      const videoPath = `videos/${Date.now()}-${videoFile.name}`;
      const { error: videoError } = await supabase.storage
        .from('videos')
        .upload(videoPath, videoFile);

      if (videoError) throw videoError;

      // Upload thumbnail
      const thumbnailPath = `thumbnails/${Date.now()}-${thumbnailFile.name}`;
      const { error: thumbnailError } = await supabase.storage
        .from('videos')
        .upload(thumbnailPath, thumbnailFile);

      if (thumbnailError) throw thumbnailError;

      // Get public URLs
      const videoUrl = supabase.storage.from('videos').getPublicUrl(videoPath).data.publicUrl;
      const thumbnailUrl = supabase.storage.from('videos').getPublicUrl(thumbnailPath).data.publicUrl;

      // Save video metadata
      const { error: dbError } = await supabase
        .from('videos')
        .insert({
          First,
          description,
          category_id: "motion-graphics",
          video_url: videoUrl,
          thumbnail_url: "https://drive.google.com/file/d/1w-L53sqrWNNUpjLhQMrKxbFK3Ve45mBJ/view?usp=drive_link"
        });

      if (dbError) throw dbError;

      onSuccess?.();
      setTitle('');
      setDescription('');
      setVideoFile(null);
      setThumbnailFile(null);
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 bg-black/50 border border-violet-500/20 rounded-lg text-white"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Video File</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
          className="w-full"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
          className="w-full"
          required
        />
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="w-full bg-violet-600 hover:bg-violet-700 disabled:bg-violet-600/50 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
      >
        {uploading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Uploading...</span>
          </>
        ) : (
          <>
            <Upload className="w-5 h-5" />
            <span>Upload Video</span>
          </>
        )}
      </button>
    </form>
  );
}