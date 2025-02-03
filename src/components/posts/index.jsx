import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const Posts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading)
    return <p className="text-center text-xl text-gray-600">Loading...</p>;
  if (isError)
    return (
      <p className="text-center text-xl text-red-500">Error: {error.message}</p>
    );

  return (
    <div className="px-5 flex flex-col items-center justify-center bg-gray-900 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-gray-100 py-6 text-center">
        📰 Posts
      </h1>

      <div className="grid place-content-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {data.map((post) => (
          <p
            key={post.id}
            className="text-lg font-medium text-gray-200 p-5 bg-gray-800 border border-gray-700 
          rounded-lg shadow-md w-full max-w-[350px] transition-all duration-300 
          hover:scale-105 hover:border-gray-500 hover:shadow-lg"
          >
            <span className="text-blue-400 font-semibold">{post.id})</span>{" "}
            {post.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Posts;
