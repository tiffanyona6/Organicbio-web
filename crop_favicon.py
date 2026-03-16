from PIL import Image
import os

def crop_favicon(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    # Get the bounding box of the non-transparent/non-white area
    # If the background is white, we might need to be careful. 
    # But usually, these are transparent.
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
        # Resize to a standard square if it's not square (optional, but good for favicons)
        w, h = img_cropped.size
        size = max(w, h)
        new_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        new_img.paste(img_cropped, ((size - w) // 2, (size - h) // 2))
        
        # Finally resize to 512x512 for high quality source
        new_img = new_img.resize((512, 512), Image.Resampling.LANCZOS)
        new_img.save(output_path)
        return True
    return False

path = r"c:\Users\tiffa\OneDrive\Escritorio\Clientes\OrganicBio\Web OrganicBio\Imagenes Web\faviconorganicbio.png"
out = r"c:\Users\tiffa\OneDrive\Escritorio\Clientes\OrganicBio\Web OrganicBio\src\app\icon.png"

if os.path.exists(path):
    try:
        if crop_favicon(path, out):
            print("Favicon optimized and updated.")
        else:
            print("Could not crop image (maybe it's empty?).")
    except Exception as e:
        print(f"Error: {e}")
else:
    print("File not found.")
