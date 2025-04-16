import conf from "../conf/conf";
import {Client , Account, ID} from "appwrite"

export class AuthService {
    client = new Client()
    account 

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            console.log('Creating user with email: ', email)
            const userAccount = await this.account.create(ID.unique(), email,password,name)
            if(userAccount){
                console.log("user created successfully", userAccount)
                //call another method
                return await this.login({email,password})
            }else{
                console.error('account creation failed,no response')
                return userAccount

            }
        }catch(error){
            console.error('Error creating Account: ', error)
            throw error
        }
    }

    async login({email, password}){
        try{
            console.log('creating session for user:', email)
            return await this.account.createSession(email,password)

        }catch(error){
            console.error('error during login: ', error)
            throw error
        }
    }

    async getCurrentUser(){
        try{
            const session = await this.account.getSession("current")
            if(session){
                return await this.account.get()
            }
        }catch(error){
            console.log("Appwrite getCurrentUser error", error);
        }
        return null
    }

    async logout(){
        try{
            await this.account.deleteSessions()

        }catch(error){
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService()

export default authService


