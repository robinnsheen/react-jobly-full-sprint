import axios from "axios";
import { Navigate } from "react-router-dom";

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
  static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

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

  //post new user
  static async createNewUser(user){
    let res = await this.request("auth/register",user,"post" );
    console.log("createnewuser = ", res)
    return res.token
  }

  static async userLogin(user){
    let res = await  this.request("auth/token",user,"post");
    console.log("api login", res.token )
    return res.token
  }

  static async getUser(handle){
    let res = await this.request(`users/${handle}`)
    console.log("getUser = ", res.user)
    return res.user
  }

  // obviously, you'll add a lot here ...
}

export default JoblyApi;
