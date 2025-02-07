import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h5>Camera Capture</h5>
      <CameraCapture />
    </>
  );
}

function CameraCapture() {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

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
      // fetch("https://your-api-endpoint.com/upload", {
      //   method: "POST",
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log("Success:", data))
      //   .catch((error) => console.error("Error:", error));
      console.log(formData);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment" // Hint to use the back camera on mobile devices
        onChange={handlePhotoCapture}
        className="border border-gray-300 rounded-md p-2"
      />
      {imagePreview && <img src={imagePreview as string} alt="preview" />}
    </div>
  );
}

export default App;
