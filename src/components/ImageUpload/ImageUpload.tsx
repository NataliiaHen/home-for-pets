import React, {
  useState, useRef, ChangeEvent, memo, useEffect,
} from 'react';
import { ReactSVG } from 'react-svg';
import './ImageUpload.scss'; // Import the SCSS file

interface Props {
  onChange: (data: File | null) => void;
  currentInput: boolean;
  handlePreviewChange: () => void;
  clearPreview: boolean;
}

export const ImageUpload: React.FC<Props> = memo(({
  onChange,
  currentInput,
  handlePreviewChange,
  clearPreview,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const convertImg: string = reader.result as string;

        setPreview(convertImg);
      };

      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }

    onChange(file);
    handlePreviewChange();
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    fileInputRef.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && file.type.substring(0, 5) === 'image') {
      handleImageChange(file);
    }
  };

  useEffect(() => {
    if (clearPreview) {
      setPreview(null);
    }
  }, [clearPreview]);

  return (
    <div className="image-upload">
      {currentInput && (
        <>
          <button
            type="button"
            onClick={(e) => handleClick(e)}
            className="image-upload__button"
          >
            <div className="image-upload__icon-box">
              <ReactSVG
                src="img/icon/plus.svg"
                className="image-upload__type-icon"
              />
            </div>
          </button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept="image/*"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </>
      )}

      {!currentInput && preview && (
        <>
          <img
            src={preview ?? ''}
            className="image-upload__img"
            alt="Preview"
          />

          <button
            className="image-upload__remove-btn"
            type="button"
            onClick={() => handleImageChange(null)}
          >
            <div className="image-upload__icon-box image-upload__icon-box--remove">
              <ReactSVG src="img/icon/close.svg" className="image-upload__type-icon" />
            </div>
          </button>
        </>
      )}
    </div>
  );
});
