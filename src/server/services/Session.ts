import Player from './Player';
import crypto from 'crypto';
class Session {
  private host: Player;
  private token: string;
  constructor(host: Player) {
    this.host = host;
    this.token = crypto.randomBytes(10).toString('hex');
  }

  /**
   * getHost
   */
  public getHost(): Player {
    return this.host;
  }

  /**
   * getToken
   */
  public getToken(): string {
    return this.token;
  }
  /**
   * getHost
   */
  public setHost(host: Player): void {
    this.host = host;
  }
}
export default Session;
