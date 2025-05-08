import { WebRTCClient } from './webrtc';
import { APIClient } from './api';

/**
 * Core SDK for EchoNuraToka customer service system
 */
class EchoNuraTokaSDK {
  private webrtcClient: WebRTCClient;
  private apiClient: APIClient;

  constructor(config: { apiBaseUrl: string; webrtcConfig?: RTCConfiguration }) {
    this.apiClient = new APIClient(config.apiBaseUrl);
    this.webrtcClient = new WebRTCClient(config.webrtcConfig);
  }

  /**
   * Initialize the SDK connection
   */
  async initialize(): Promise<void> {
    await this.apiClient.authenticate();
    await this.webrtcClient.initialize();
  }

  /**
   * Start a customer service session
   */
  async startSession(): Promise<void> {
    // Implementation here
  }

  /**
   * End the current session
   */
  async endSession(): Promise<void> {
    // Implementation here
  }
}

export { EchoNuraTokaSDK };
