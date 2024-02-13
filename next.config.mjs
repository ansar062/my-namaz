/** @type {import('next').NextConfig} */
// const withPWA  = require('next-pwa')
import withPWA from 'next-pwa'

const nextConfig = {
    ...withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
    })
};

export default nextConfig;
