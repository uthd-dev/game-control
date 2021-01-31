import styled from "styled-components";

import Card from "../stats-card";
import { useEffect, useState } from "react";

/* Socket.io */
import { io } from "socket.io-client";
const socket = io("/api/admin/ws");

function Dashboard(props) {
  const [userData, setUserData] = useState();
  const [liveData, setLiveData] = useState({
    liveStreamCount: "...",
    liveServerCount: "...",
    onlinePlayerCount: "...",
  });
  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Socket connection established!`);
    });
    socket.on("update-userData", (data) => {
      setUserData(data);
    });
    socket.on("stats", (data) => {
      setLiveData({
        ...liveData,
        ...data,
      });
    });
  });
  useEffect(() => {
    socket.emit("get-stats");
  }, []);
  return (
    <Row>
      <Card title="Live Streamers:" value={liveData.liveStreamCount} />
      <Card title="Online Players" value={liveData.onlinePlayerCount} />
      <Card title="Connected Servers" value={liveData.liveServerCount} />
    </Row>
  );
}

const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
`;

export default Dashboard;
