import React from "react";
import Layout from "../Layout";

const index = () => {
  return (
    <Layout>
      <form className="min-h-screen mx-auto flex items-center justify-center text-left">
        <label for="image" className="my-3 capitalize tracking-wide font-bold text-2xl">Upload Image</label>
        <input type="file" name="image" accept="image/png, image/jpeg" />

        <label for="tag" className="my-3 capitalize tracking-wide font-bold text-2xl">Tag</label>
        <input type="text" name="tag"  className="outline rounded-md mx-2"/>

        <button>Upload</button>
      </form>
    </Layout>
  );
};

export default index;
