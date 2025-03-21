"use client";

import useSocket from "@/api/useSocket";
import { useState } from "react";

export default function Share() {
  const [message, setMessage] = useState("");

  const { socket, isConnected } = useSocket();

  socket.on("chat", (message) => setMessage((prev) => prev + message));

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <span
        className={`inline-block w-16 h-16 rounded-full ${
          isConnected ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <span>{message}</span>
    </div>
  );
}
