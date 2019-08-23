import * as crypto from "crypto";
import { secret, crypto_salt } from "../config";
export class Crypto {
  private static algorithm = "aes-256-cbc";
  // Key length is dependent on the algorithm. In this case for aes192, it is
  // 24 bytes (192 bits)
  static async hash(data: string): Promise<string> {
    let hmac = crypto.createHmac("sha256", secret);
    hmac.update(data);
    return hmac.digest("hex").toString();
  }

  static async encrypt(passwordHash: string, data: string): Promise<{iv : string, data : string}> {
    return new Promise((res, rej) => {
      let iv = crypto.randomBytes(16);
      crypto.scrypt(passwordHash, crypto_salt, 32, (err, derived) => {
        if(err){
          rej(err)
        }
        let cipher = crypto.createCipheriv(this.algorithm, derived, iv);
        let encrypted = cipher.update(data, 'utf8', 'hex')
        encrypted += cipher.final('hex')
        res({
          iv : iv.toString('hex'),
          data : encrypted
        })
      });
    });
  }

  static async decrypt(passwordHash : string, iv : string, data : string) : Promise<string>{
    return new Promise((res, rej) => {
      crypto.scrypt(passwordHash, crypto_salt, 32, (err, derived) => {
        if(err){
          rej(err)
        }
        let decipher = crypto.createDecipheriv(this.algorithm, derived, Buffer.from(iv, 'hex'))
        let decrypted = decipher.update(data, 'hex', 'utf8')
        decrypted += decipher.final('utf8')
        res(decrypted)
      })
    })
  }

  static generateRndBytes(size ?: number) : Buffer{
    return crypto.randomBytes(size ? size : 24)
  }
}
