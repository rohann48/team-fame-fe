import JSEncrypt from "jsencrypt";
const publicKey: string = process.env.REACT_APP_PUBLIC_KEY!;

function cryptoEncryption(encrypt: string) {
  try {
    const hash = JSON.stringify(encrypt);
    const byteSize = new Blob([hash]).size;

    const jsEncrypt = new JSEncrypt();
    jsEncrypt.setPublicKey(publicKey);
    let output;
    if (byteSize > 234) {
      let size = 230;
      const numChunks = Math.ceil(hash.length / size);
      const chunks = new Array(numChunks);

      for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = hash.substr(o, size);
      }
      let hashArr = [];
      for (let j = 0; j < chunks.length; j++) {
        const element = chunks[j];
        hashArr.push(jsEncrypt.encrypt(element));
      }

      output = hashArr.join("?4|0");
    } else {
      output = jsEncrypt.encrypt(hash);
    }

    return output;
  } catch (error) {
    throw error;
  }
}

export default cryptoEncryption;
