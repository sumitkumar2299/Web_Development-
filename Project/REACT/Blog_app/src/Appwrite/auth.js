import { use } from "react";
import config from "../config/config";

import {Client,Account,ID} from "appwrite"

export class AuthService {
    Client = new Client();
    Account;

    constructor() {
        this.Client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);

        this.Account = new Account(this.Client);
    }

    async createAccount({email,password,name}) {
        try {
            const userAccount = await this.Account.create(ID.unique(),email,password,name);
            if(userAccount){
                // call another method 
                return this.login({email,password})
            } else{
                return userAccount;
            }

        }
        catch(error){
            throw error;
        }
    }

    async login({email,password}){
        try{
           return await this.Account.createEmailPasswordSession(email,password)

        } catch(error){
            throw error
        }
    }

    async getCurrentUser(){
        try{

            return await this.Account.get();

        } catch(error){
            throw error;
        }
        return null;


       
        }
        async logout(){
            try{
                await this.Account.deleteSession();

            } catch(error){
                console.log("appwrite service :: logout :: error",error);
            }
    }
}

const AuthService = new AuthService();


export default AuthService;