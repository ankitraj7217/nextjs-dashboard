/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        // Specify the allowed origins
        allowedOrigins: ['my-forwarded-host.com', 'studious-xylophone-4gwxpq6r7543qr9-3000.app.github.dev', 'localhost:3000'],
      },
    },
  };
  
  export default nextConfig;
  