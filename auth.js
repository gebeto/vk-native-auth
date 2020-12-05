const fetch = require('node-fetch');
const FormData = require('form-data');


const defaultScopes = [
  "status",
  "friends",
  "photos",
  "audio",
  "video",
  "docs",
  "notes",
  "pages",
  "wall",
  "groups",
  "notifications",
  "messages",
].join(",")


/**
 * 
 * @param {string} login VK Login email/phone
 * @param {string} password VL Password
 * 
 */
const login = async (login, password) => {
  const body = new FormData();
  body.append("username", login);
  body.append("password", password);
  body.append("scope", defaultScopes);
  body.append("grant_type", "password");
  body.append("v", "5.40");
  body.append("2fa_supported", "1");
  body.append("client_secret", "VeWdmVclDCtn6ihuP1nt");
  body.append("client_id", "3140623");

  const response = await fetch("https://api.vk.com/oauth/token", {
    method: 'POST',
    body: body,
  }).then(res => res.json());
  return response;
}

exports.login = login;