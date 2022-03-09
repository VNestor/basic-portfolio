const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/basic-portfolio/" : "",
  // images: { loader: "imgix" },
  // reactStrictMode: true,
};
