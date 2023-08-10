import { MongoClient } from "mongodb";
import config from "./config";

let connectedClient = null;
export const connectClient = async () => {
  if (!connectedClient) {
    const client = new MongoClient(config.MONGODB_URI);
    await client.connect();
    await client.db(config.DATABASE).command({ ping: 1 });
    console.info("Connected to MongoDB!");
    connectedClient = client;
    return connectedClient.db(config.DATABASE);
  }
};

export const stopClient = async () => {
  await connectedClient?.close();
};
