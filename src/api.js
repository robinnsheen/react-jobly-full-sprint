import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }
  // gets companies by search term
  static async getCompanies(searchTerm) {
    let res = await this.request(`companies/`, { name: searchTerm });
    return res.companies;
  }
  // gets jobs by searchterm
  static async getJobs(searchTerm) {
    let res = await this.request(`jobs/`, { title: searchTerm });
    return res.jobs;
  }
  // gets jobs for company
  static async getJobsForCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    console.log("in getjobsforcompany", res.company.jobs);
    return res.company.jobs;
  }

  // post new user
  static async createNewUser(user) {
    let res = await this.request("auth/register", user, "post");
    console.log("createnewuser = ", res);
    return res.token;
  }
  // auth and log in user
  static async loginUser(user) {
    let res = await this.request("auth/token", user, "post");
    console.log("api login", res.token);
    return res.token;
  }
  // auth and get user information
  static async getUser(handle) {
    let res = await this.request(`users/${handle}`);
    console.log("getUser = ", res);
    return res.user;
  }

  // auth and edit user information firstName, lastName, password, email
  static async updateUser(handle, updates) {
    let res = await this.request(`users/${handle}`, updates, "patch");
    console.log("updateUser = ", res);
    return res.user;
  }

  // obviously, you'll add a lot here ...
}

export default JoblyApi;
