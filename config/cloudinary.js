import { v2 as cloudinary } from 'cloudinary';

    // Configuration
    cloudinary.config({ 
        cloud_name: 'CLOUDINARY_CLOUD_NAME', 
        api_key: 'CLOUDINARY_API_KEY', 
        api_secret: 'CLOUDINARY_API_SECRET' // Click 'View API Keys' above to copy your API secret
    });
    console.log("keys",process.env.CLOUDINARY_CLOUD_NAME,
        process.env.CLOUDINARY_API_KEY,
        process.env.CLOUDINARY_API_SECRET
    )
export default cloudinary

