class ImageUploader < CarrierWave::Uploader::Base
  storage :file

  # def store_dir
  #   "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  # end

  def store_dir
    if model.is_a?(CheckAge)
      "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.user_id}"
    else
      "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    end
  end

  # 受け付け可能なファイルの拡張子を指定
  def extension_allowlist
    %w(jpg jpeg png)
  end
end
