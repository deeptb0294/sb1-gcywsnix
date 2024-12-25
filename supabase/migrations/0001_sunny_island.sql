/*
  # Create videos management tables

  1. New Tables
    - `videos`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category_id` (text, references portfolio categories)
      - `video_url` (text)
      - `thumbnail_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
  2. Security
    - Enable RLS on `videos` table
    - Add policies for authenticated users to manage their videos
*/

CREATE TABLE IF NOT EXISTS videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category_id text NOT NULL,
  video_url text NOT NULL,
  thumbnail_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to view all videos
CREATE POLICY "Videos are viewable by everyone" 
  ON videos 
  FOR SELECT 
  TO public 
  USING (true);

-- Allow authenticated users to insert their own videos
CREATE POLICY "Users can insert their own videos" 
  ON videos 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Allow authenticated users to update their own videos
CREATE POLICY "Users can update their own videos" 
  ON videos 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() IN (
    SELECT auth.uid() 
    FROM auth.users 
    WHERE auth.users.role = 'admin'
  ));