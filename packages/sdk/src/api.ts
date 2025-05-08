import axios, { AxiosInstance } from 'axios';

/**
 * API client for EchoNuraToka backend communication
 */
export class APIClient {
  private http: AxiosInstance;
  private authToken: string | null = null;

  constructor(baseURL: string) {
    this.http = axios.create({
      baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Authenticate with the API
   */
  async authenticate(): Promise<void> {
    // Implementation would depend on your auth system
    // This is just a placeholder
    const response = await this.http.post('/auth', {
      // Auth credentials
    });
    this.authToken = response.data.token;
  }

  /**
   * Make an authenticated API request
   */
  private async request<T>(config: {
    method: 'get' | 'post' | 'put' | 'delete';
    url: string;
    data?: unknown;
  }): Promise<T> {
    if (!this.authToken) {
      throw new Error('Not authenticated');
    }

    const response = await this.http.request<T>({
      ...config,
      headers: {
        Authorization: `Bearer ${this.authToken}`,
      },
    });
    return response.data;
  }

  /**
   * Get customer service configuration
   */
  async getConfig(): Promise<unknown> {
    return this.request({
      method: 'get',
      url: '/config',
    });
  }
}
