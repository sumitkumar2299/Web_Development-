import config from "../config/config";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service {
    Client = new Client();
    Databases;
    bucket;

    constructor(){
        this.Client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.Databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }
    
}

const service = new Service()
export default service;