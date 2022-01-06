const crypto = require("crypto");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat");
const { connect } = require("getstream");

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

exports.register = async (req, res) => {
  try {
    const { fullname, username, password, phoneNumber } = req.body;
    const userID = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bcrypt.hash(password, 12);
    const token = serverClient.createUserToken(userID);

    res.status(200).json({ token, userID });
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "something went wrong" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const serverClient = connect(api_key, api_secret, app_id);
  const client = StreamChat.getInstance(api_key, api_secret);
  const { users } = await client.queryUsers({ name: username });

  try {
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "something went wrong" });
  }
};