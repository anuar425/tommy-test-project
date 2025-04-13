import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    secretKey: process.env.TWELVEDATA_SECRET_KEY
  }
};

export default nextConfig;
