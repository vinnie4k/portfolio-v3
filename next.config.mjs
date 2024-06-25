/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/", // Serve from the Next.js static folder
            outputPath: "static/videos/", // Where to put the files during build
            name: "[name]-[hash].[ext]", // Add a hash for better cache management
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
