import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
};

const Users = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching users</div>;
  }

  return (
    <div
      className={`min-h-[calc(100vh - 100px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-2xl text-indigo-400">Users</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((user) => (
            <div className="p-4 rounded-lg shadow-lg w-full" key={user.id}>
              <p>
                <strong>Name: </strong>
                {user.name}
              </p>
              <p>
                <strong>Username: </strong>
                {user.username}
              </p>
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
