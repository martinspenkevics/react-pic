import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Display the image preview (if needed)
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      // Prepare form data for API upload
      const formData = new FormData();
      formData.append("photo", file);

      // Send to API
      console.log(formData);
    }
  };

  // Trigger file selection when clicking the custom button
  const handleCaptureClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment" // Hint to use the back camera on mobile devices
        onChange={handlePhotoCapture}
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the default file input
      />
      <button onClick={handleCaptureClick}>Capture Photo</button>
      {imagePreview && (
        <img
          src={imagePreview as string}
          alt="preview"
          style={{ maxWidth: "100%", height: "auto", paddingTop: "1rem" }}
        />
      )}
    </div>
  );
}

export default App;
