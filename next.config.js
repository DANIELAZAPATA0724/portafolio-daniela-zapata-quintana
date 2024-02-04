module.exports = {
  // Configuración para manejar archivos estáticos
  async headers() {
    return [
      {
        source: "/public/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  // Configuración para manejar archivos CSS
  webpack: (config, { isServer }) => {
    // Añadir configuración para archivos CSS solo en el lado del cliente
    if (!isServer) {
      config.resolve.alias["./globals.css"] = false;
    }

    return config;
  },
};
